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

## 1. Create a backmon user

In the AWS management console, go to *IAM > Users > Add users* and create a dedicated user for backmon. Just choose
*programmatic access* and note down the *access key id* (*${ACCESS_KEY_ID}*) and *secret access key* (
*${SECRET_ACCESS_KEY}*).

## 2. Set up a policy

In the AWS management console, go to *IAM > Policies > Create policy* and create a new JSON policy with the following
content:

## 2.1. Using auto-discovery

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

### 3.1. When using`config.yaml`

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
