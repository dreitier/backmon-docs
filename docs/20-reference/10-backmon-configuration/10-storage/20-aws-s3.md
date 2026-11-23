# AWS S3

If you are configuring an S3 environment, *backmon* automatically creates a disk for each S3 bucket. Let's suppose you
have the following `config.yaml`:

```yaml
environments:
  s3_backup:
    s3:
      access_key_id: my_access_key_id
      secret_access_key: my_secret_access_key
```

For a full list of configuration option for the S3 provider see [`the corresponding section`](../01-overview.md#available-configuration-keys)

Your AWS account contains the following S3 buckets:

- `bucket-1`
- `bucket-2`
- `bucket-3`

Each of those buckets is considered as a disk. You have to put a `backup_definitions.yaml`
at `s3://bucket-1/backup_definitions.yaml`, `s3://bucket-2/backup_definitions.yaml`
and `s3://bucket-3/backup_definitions.yaml`.

:::info
Each AWS S3 bucket is a *backmon disk*.
:::

- If you want to ignore a bucket, either use the `disks.exclude` configuration key or the `.backmonignore` marker file.
- If your AWS access key does not have the `ListBucket` permission for one of the buckets, the bucket is ignored.

## Authentication

*backmon* authenticates against AWS with one of the following methods. They are configured for each environment, so
that different environments can use different methods:

| Method                                  | Configuration                                                                                                                                                                                         |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Access key of an IAM user               | `s3.access_key_id` and `s3.secret_access_key` are set, see [1. Create a backmon user](#1-create-a-backmon-user).                                                                                      |
| Default credential chain of the AWS SDK | Default, if `s3.access_key_id` and `s3.secret_access_key` are left out. Covers IAM roles for service accounts (IRSA), see [4.1. IAM roles for service accounts](#41-iam-roles-for-service-accounts-irsa). |
| Assuming an IAM role                    | `s3.assume_role_arn` is set in addition to one of the methods above, e.g. for buckets of another AWS account, see [4.2. Assume an IAM role](#42-assume-an-iam-role-stsassumerole).                       |

Prefer IAM roles where possible, as no long-lived access key has to be stored and rotated.

## 1. Create a backmon user

In the AWS management console, go to *IAM > Users > Add users* and create a dedicated user for backmon. Just choose
*programmatic access* and note down the *access key id* (`${ACCESS_KEY_ID}`) and *secret access key* (
`${SECRET_ACCESS_KEY}`).

## 2. Set up a policy

In the AWS management console, go to *IAM > Policies > Create policy* and create a new JSON policy with the following
content:

### 2.1. Using auto-discovery

By default, *backmon* scans all S3 buckets which belong to the user's AWS account. This requires the `ListAllMyBuckets`
permission:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ListAllBuckets",
      "Effect": "Allow",
      "Action": "s3:ListAllMyBuckets",
      "Resource": "arn:aws:s3:::*"
    },
    {
      "Sid": "ListDisks",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::bucket-1",
        "arn:aws:s3:::bucket-2",
        "arn:aws:s3:::bucket-3"
      ]
    },
    {
      "Sid": "DownloadAndPurgeFiles",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::bucket-1/*",
        "arn:aws:s3:::bucket-2/*",
        "arn:aws:s3:::bucket-3/*"
      ]
    }
  ]
}
```

### 2.2. Explicitly white-listing buckets

In some environments the `ListAllMyBuckets` permission is not allowed to be assigned: Even if the user *backmon* user
can not access the content of restricted buckets, it might leak sensitive information through the naming of the buckets.
You can drop the `ListAllBuckets` statement from the IAM policy above. You then have to update your `config.yaml` with
the following configuration:

```yaml
environments:
  aws_prod:
    s3:
      # ...
      # set `auto_discover_disks` to false
      auto_discover_disks: false
    disks:
      include:
        - bucket-1
        - bucket-2
        - bucket-3
```

With that configuration, only bucket `bucket-1`, `bucket-2` and `bucket-3` are included.

:::caution
With whitelisting buckets, you have to specify the full name of the bucket. Using regular expressions is __not__
possible.
:::

### 2.3. Configure permissions and attach to user

Depending upon the used functionality of *backmon*, you can also adjust the permissions for the `DownloadAndPurgeFiles`
statement:

| IAM permission    | Required for                                                                                                                                                                                                                                |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| `s3:GetObject`    | downloading the `backup_definitions.yaml` and *backmon* runs with `downloads.enabled=true`. You can narrow down this permission to the resource `arn:aws:s3:::bucket-1/backup_definitions.yaml` if you do not use `downloads.enabled=true`. |
| `s3:DeleteObject` | purging, if `backup_definitions.yaml` contains `purge=true`                                                                                                                                                                                 |

Attach the policy to your recently created IAM user.

## 3. Update your `backmon` configuration

### 3.1. When using `config.yaml`

In your local `config.yaml`, put in the AWS access key id and secret access key:

```yaml
environments:
  my_aws_environment:
    s3:
      access_key_id: __${ACCESS_KEY_ID}__
      secret_access_key: __${SECRET_ACCESS_KEY}__
      region: eu-central-1
      auto_discover_disks: true
```

### 3.2. When using Helm

Create a Kubernetes secret with the AWS access key id and secret access key:

```bash
kubectl create secret generic backmon-aws \
  --from-literal=BACKMON_AWS_PROD_ACCESS_KEY_ID="${ACCESS_KEY_ID}" \
  --from-literal=BACKMON_AWS_PROD_SECRET_ACCESS_KEY="${SECRET_ACCESS_KEY}"
```

In your `values.yaml`, reference the secret and use its keys as placeholders in the configuration:

```yaml
backmon:
  config:
    content: |-
      port: 8000
      log_level: info
      update_interval: 15m
      environments:
        aws_prod:
          s3:
            # the __${BACKMON ... }__ placeholders are replaced with the environment variables of the secret below
            access_key_id: __${BACKMON_AWS_PROD_ACCESS_KEY_ID}__
            secret_access_key: __${BACKMON_AWS_PROD_SECRET_ACCESS_KEY}__
            region: eu-central-1
            auto_discover_disks: true

# each key of the secret becomes an environment variable of the backmon container
extraEnvFrom:
  - name: backmon-aws
```

See [Helm chart](../../../10-deployment/20-helm-chart.md#configuration) for details.

## 4. Use IAM roles instead of access keys

Since *backmon* 3.2.0, an access key is no longer required. If `access_key_id` and `secret_access_key` are both left
out, *backmon* uses the default credential chain of the AWS SDK. It looks for credentials in the following order:

1. the environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
2. the shared AWS configuration and credentials files (`~/.aws/config`, `~/.aws/credentials`)
3. a web identity token (`AWS_ROLE_ARN` and `AWS_WEB_IDENTITY_TOKEN_FILE`), which is what IRSA provides
4. the credentials of the container (Amazon ECS task role, EKS Pod Identity)
5. the instance profile of the Amazon EC2 instance

The IAM policy of [2. Set up a policy](#2-set-up-a-policy) stays the same. It is attached to an IAM role instead of an
IAM user, and step 1 is not needed.

:::info
With the default credential chain, *backmon* calls `sts:GetCallerIdentity` once for each environment to check the
credentials. This call needs no IAM permission, but the AWS STS endpoint of the configured `region` has to be
reachable. In a VPC without internet access, add an interface endpoint for STS (`com.amazonaws.<region>.sts`). If
AWS is only reachable through a proxy, see [5. Use an HTTP proxy](#5-use-an-http-proxy).
:::

### 4.1. IAM roles for service accounts (IRSA)

With [IAM roles for service accounts](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html),
Amazon EKS binds an IAM role to the Kubernetes service account of *backmon*. The pod receives a short-lived token of
its service account, which the AWS SDK exchanges for temporary credentials of the IAM role
(`sts:AssumeRoleWithWebIdentity`). The token and the credentials are renewed automatically.

The following example assumes that

- the AWS account has the id `111122223333` and the cluster runs in `eu-central-1`,
- *backmon* is installed into the namespace `backmon` and its service account is named `backmon`,
- the cluster has an [IAM OIDC provider](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html).
  If not, create it with `eksctl utils associate-iam-oidc-provider --cluster my-cluster --approve`.

#### Create the IAM role

Look up the OIDC issuer of the cluster. The part after `https://` is referred to as `${OIDC_PROVIDER}`:

```bash
aws eks describe-cluster --name my-cluster --query "cluster.identity.oidc.issuer" --output text
# https://oidc.eks.eu-central-1.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE
```

Create an IAM role `backmon` with the following trust policy. It only allows the service account `backmon` of the
namespace `backmon` to use the role:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::111122223333:oidc-provider/oidc.eks.eu-central-1.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "oidc.eks.eu-central-1.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE:sub": "system:serviceaccount:backmon:backmon",
          "oidc.eks.eu-central-1.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE:aud": "sts.amazonaws.com"
        }
      }
    }
  ]
}
```

Attach the policy of [2. Set up a policy](#2-set-up-a-policy) to the role:

```bash
aws iam create-role --role-name backmon --assume-role-policy-document file://trust-policy.json
aws iam attach-role-policy --role-name backmon --policy-arn arn:aws:iam::111122223333:policy/backmon
```

#### Configure the Helm chart

Annotate the service account with the IAM role and leave out the access key in the configuration:

```yaml
serviceAccount:
  create: true
  # has to match the service account of the trust policy; by default, the name is derived from the release name
  name: backmon
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::111122223333:role/backmon

backmon:
  config:
    content: |-
      port: 8000
      log_level: info
      update_interval: 15m
      environments:
        aws_prod:
          s3:
            # no access_key_id and secret_access_key: the IAM role of the service account is used
            region: eu-central-1
            auto_discover_disks: true
```

Neither a Kubernetes secret nor `extraEnvFrom` is needed.

:::caution
The annotation is only applied to pods which are created after the service account has been annotated. If you add the
annotation to an existing installation outside of Helm, restart *backmon* with
`kubectl -n backmon rollout restart deployment backmon`.
:::

#### Check the setup

Amazon EKS injects the environment variables `AWS_ROLE_ARN` and `AWS_WEB_IDENTITY_TOKEN_FILE` into the pod:

```bash
kubectl -n backmon get pods -l app.kubernetes.io/name=backmon \
  -o jsonpath='{.items[0].spec.containers[0].env[?(@.name=="AWS_ROLE_ARN")].value}'
# arn:aws:iam::111122223333:role/backmon
```

With `log_level: debug`, *backmon* logs the identity it uses:

```text
No access key or secret key provided, trying to use AWS credentials.
Using Role ARN: arn:aws:sts::111122223333:assumed-role/backmon/...
```

:::info
IRSA is not limited to Amazon EKS. Any Kubernetes cluster works, as long as its service account issuer is registered
as IAM OIDC provider and the pod gets `AWS_ROLE_ARN` and `AWS_WEB_IDENTITY_TOKEN_FILE`, e.g. through the
[Amazon EKS Pod Identity Webhook](https://github.com/aws/amazon-eks-pod-identity-webhook).
:::

### 4.2. Assume an IAM role (`sts:AssumeRole`)

With `assume_role_arn`, *backmon* does not access the buckets with its own identity. It uses its identity to assume
the given IAM role (`sts:AssumeRole`) and accesses the buckets with the temporary credentials of that role. This is
mainly used to monitor the buckets of another AWS account, without creating an IAM user in that account.

The identity which assumes the role is called the *source identity* below. It is either

- an IAM user, if `access_key_id` and `secret_access_key` are set,
- or whatever the default credential chain provides, e.g. the IAM role of the service account (IRSA).

The following example assumes that *backmon* runs with an identity of the AWS account `111122223333` and monitors the
buckets of the AWS account `444455556666`.

#### Create the IAM role in the account of the buckets

In the AWS account `444455556666`, create an IAM role `backmon-read-only` with the following trust policy. The
principal is the source identity of *backmon*, either an IAM role (`role/backmon`) or an IAM user (`user/backmon`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::111122223333:role/backmon"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

Attach the policy of [2. Set up a policy](#2-set-up-a-policy) to that role. The buckets and the policy belong to the
account `444455556666`; the source identity itself needs no permissions for S3.

:::caution
*backmon* does not send an external id or an MFA token. The trust policy must not contain conditions like
`sts:ExternalId` or `aws:MultiFactorAuthPresent`.
:::

#### Allow the source identity to assume the role

In the AWS account `111122223333`, attach the following policy to the source identity:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AssumeBackmonRole",
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      "Resource": "arn:aws:iam::444455556666:role/backmon-read-only"
    }
  ]
}
```

#### Update your `backmon` configuration

With an IAM user as source identity:

```yaml
environments:
  aws_backup_account:
    s3:
      access_key_id: __${ACCESS_KEY_ID}__
      secret_access_key: __${SECRET_ACCESS_KEY}__
      assume_role_arn: arn:aws:iam::444455556666:role/backmon-read-only
      region: eu-central-1
      auto_discover_disks: true
```

With the default credential chain as source identity, e.g. IRSA, leave out the access key:

```yaml
environments:
  aws_backup_account:
    s3:
      assume_role_arn: arn:aws:iam::444455556666:role/backmon-read-only
      region: eu-central-1
      auto_discover_disks: true
```

Auto-discovery lists the buckets of the account the assumed role belongs to, here `444455556666`.

The temporary credentials of the assumed role are renewed automatically. *backmon* uses its hostname as role session
name, which is the name of the pod in Kubernetes. In AWS CloudTrail, the requests of *backmon* show up as
`arn:aws:sts::444455556666:assumed-role/backmon-read-only/<hostname>`.

### 4.3. Monitor multiple AWS accounts with IRSA and `assume_role_arn`

As `assume_role_arn` is set for each environment, a single *backmon* instance can monitor the buckets of multiple AWS
accounts without any access key: the IAM role of the service account is the source identity, and each environment
assumes a role in its own account.

```yaml
serviceAccount:
  create: true
  name: backmon
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::111122223333:role/backmon

backmon:
  config:
    content: |-
      port: 8000
      log_level: info
      update_interval: 15m
      environments:
        # buckets of the account the cluster runs in: accessed with the IAM role of the service account
        aws_tooling:
          s3:
            region: eu-central-1
            auto_discover_disks: true
        # buckets of other accounts: the IAM role of the service account assumes a role in each account
        aws_staging:
          s3:
            assume_role_arn: arn:aws:iam::444455556666:role/backmon-read-only
            region: eu-central-1
            auto_discover_disks: true
        aws_prod:
          s3:
            assume_role_arn: arn:aws:iam::777788889999:role/backmon-read-only
            region: eu-west-1
            auto_discover_disks: true
```

The IAM role `arn:aws:iam::111122223333:role/backmon` needs

- the trust policy of [4.1.](#41-iam-roles-for-service-accounts-irsa) for the service account,
- the S3 policy of [2. Set up a policy](#2-set-up-a-policy) for the buckets of its own account (`aws_tooling`),
- the permission `sts:AssumeRole` for both `backmon-read-only` roles, as described in
  [4.2.](#42-assume-an-iam-role-stsassumerole)

### 4.4. Troubleshooting

| Symptom                                                                             | Cause                                                                                                                                                                                                                                  |
|-------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `failed to get caller identity` in the log                                          | The default credential chain did not find any credentials, or AWS STS is not reachable. With IRSA, check that the pod has the environment variables `AWS_ROLE_ARN` and `AWS_WEB_IDENTITY_TOKEN_FILE`.                                    |
| `AccessDenied` for `sts:AssumeRoleWithWebIdentity`                                  | The trust policy of the IAM role does not match: compare the OIDC provider, the namespace and the name of the service account (`system:serviceaccount:<namespace>:<name>`).                                                             |
| `AccessDenied` for `sts:AssumeRole`                                                 | The source identity lacks the permission `sts:AssumeRole` for the role, or the trust policy of the role does not contain the source identity or requires an external id.                                                                |
| The disks of another AWS account are discovered, or no disks at all                 | Auto-discovery always lists the buckets of the account of the identity which is finally used. Check `Using Role ARN` and `Trying to assume role` in the log.                                                                            |
| *backmon* uses another identity than expected, e.g. the IAM role of the EC2 instance | `AWS_ROLE_ARN` and `AWS_WEB_IDENTITY_TOKEN_FILE` are missing in the pod, so that the next method of the default credential chain is used. The pod has to be created after the service account has been annotated.                      |

## 5. Use an HTTP proxy

Since *backmon* 4.2.0, each S3 environment accepts an optional `proxy`. All requests of that environment are sent
through the proxy: the requests to S3 and the requests to AWS STS, which are made for the default credential chain and
for `assume_role_arn`.

```yaml
environments:
  # only reachable through a proxy
  aws_prod:
    s3:
      access_key_id: __${ACCESS_KEY_ID}__
      secret_access_key: __${SECRET_ACCESS_KEY}__
      region: eu-central-1
      proxy: http://my-proxy:3128
  # directly reachable, no proxy
  my_minio:
    s3:
      endpoint: http://my-minio-endpoint:9000
      force_path_style: true
      access_key_id: __${MINIO_ACCESS_KEY}__
      secret_access_key: __${MINIO_SECRET_KEY}__
```

- `proxy` has to be a complete URL with scheme and host, like `http://my-proxy:3128`. An invalid URL is rejected when
  the configuration is loaded.
- If the proxy requires authentication, put the credentials into the URL (`http://user:password@my-proxy:3128`),
  preferably through a placeholder like `__${S3_PROXY}__`. They are not written to the log.
- Without `proxy`, the environment variables `HTTP_PROXY`, `HTTPS_PROXY` and `NO_PROXY` of the *backmon* process apply.
  Use them, if all environments share the same proxy.
- `proxy` takes precedence over these environment variables. `NO_PROXY` is not evaluated for an environment with
  `proxy`.
