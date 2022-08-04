# AWS S3
If you are configuring an S3 environment, *cloudmon* automatically creates a disk for each S3 bucket. Let's suppose you have the following `config.yaml`:

```yaml
environments:
  s3_backup:
    access_key: my_access_key
    secret_access_key: my_secret_access_key
```

Your AWS account contains the following S3 buckets:

- `bucket-1`
- `bucket-2`
- `bucket-3`

Each of those buckets is considered as a disk. You have to put a `backup_definitions.yaml` at `s3://bucket-1/backup_definitions.yaml`, `s3://bucket-2/backup_definitions.yaml` and `s3://bucket-3/backup_definitions.yaml`.

:::info
Each AWS S3 bucket is a *cloudmon disk*.
:::

- If you want to ignore a bucket, either use the `disks.exclude` configuration key or the `.cloudmonignore` marker file.
- If your AWS access key does not have the `ListBucket` permission for one of the buckets, the bucket is ignored.

## 1. Create a cloudmon user
In the AWS management console, go to *IAM > Users > Add users* and create a dedicated user for cloudmon. Just choose *programmatic access* and note down the *access key id* (*${ACCESS_KEY_ID}*) and *secret access key* (*${SECRET_ACCESS_KEY}*).

## 2. Set up a policy
In the AWS managent console, go to *IAM > Policies > Create policy* and create a new JSON policy with the following content:

## 2.1. Using auto-discovery
By default, *cloudmon* scans all S3 buckets which belongs to the user's AWS account. This requires the `ListAllMyBuckets` permission:

```yaml
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
In some environments the `ListAllMyBuckets` permission is not allowed to be assigned: Even if the user *cloudmon* user can not access the content of restrictetd buckets, it might leak sensitive information through the naming of the buckets.
You can drop the `ListAllBuckets` statement from the IAM policy above. You then have to update your `config.yaml` with the following configuration:

```yaml
disks:
  include:
    - bucket-1
    - bucket-2
    - bucket-3

environments:
  aws_prod:
    # ...
	# set `auto_discover_disks` to false
	auto_discover_disks: false
```

With that configuration, only bucket `bucket-1`, `bucket-2` and `bucket-3` are included.

:::caution
With whitelisting buckets, you have to specify the full name of the bucket. Using regular expressions is __not__ possible.
:::

### 2.3. Configure permissions and attach to user

Depending upon the used functionality of *cloudmon*, you can also adjust the permissions for the `DownloadAndPurgeFiles` statement:

| IAM permission | Required for |
| --- | --- | 
| `s3:GetObject` | downloading the `backup_definitions.yaml` and *cloudmon* runs with `downloads.enabled=true`. You can narrow down this permission to the resource `arn:aws:s3:::bucket-1/backup_definitions.yaml` if you do not use `downloads.enabled=true`. |
| `s3:DeleteObject` | purging, if `backup_definitions.yaml` contains `purge=true` |

Attach the policy to your recently created IAM user.

## 3. Update your `cloudmon` configuration
### 3.1. When using`config.yaml`

In your local `config.yaml`, put in the AWS access key id and secret access key:

```yaml
environments:
  my_aws_environment:
    access_key_id: ${ACCESS_KEY_ID}
    secret_access_key: ${SECRET_ACCESS_KEY}
    auto_discover_disks: true
```

### 3.2. When using Helm
In your `values.yaml`, put in the AWS access key id and secret access key:

```yaml
cloudmon:
  disks:
    all_others: include
    exclude: []
    include: []
  downloads:
    enabled: false
  environments:
    aws_prod:
	  # the ${CLOUDMON ... } variables reference the secrets below
      access_key_id: ${CLOUDMON_AWS_PROD_ACCESS_KEY_ID}
      region: eu-central-1
      secret_access_key: ${CLOUDMON_AWS_PROD_SECRET_ACCESS_KEY}
	  auto_discover_disks: true
  log_level: debug
  secrets:
    - key: CLOUDMON_AWS_PROD_ACCESS_KEY_ID
      # replace ${ACCESS_KEY_ID} with the access key id you noted down previously
      value: ${ACCESS_KEY_ID}
    - key: CLOUDMON_AWS_SECRET_ACCESS_KEY
      # replace ${SECRET_ACCESS_KEY} with the secret access key you noted down previously
      value: ${SECRET_ACCESS_KEY}
```