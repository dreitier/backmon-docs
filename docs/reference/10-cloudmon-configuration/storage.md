# Storage
*cloudmon* supports backup file which are either stored
- in a local or local-mounted filesystem, like NFS
- or in an S3 compatible bucket like AWS S3 or Minio

## Storage providers
### Local filesystem
Local disks can be configured in the `config.yaml` by using the parameter `environments[].path`:

```yaml
environments:
  local_backup:
    path: /data/backup/mysql
```

*cloudmon* tries to read the `backup_definition.yaml` from the location `/data/backup/mysql/backup_definition.yaml`.

### S3
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

Each of those buckets is considered as disk. You have to put a `backup_definition.yaml` at `s3://bucket-1/backup_definition.yaml`, `s3://bucket-2/backup_definition.yaml` and `s3://bucket-3/backup_definition.yaml`.

- If you want to ignore a bucket, either use the `disks.exclude` configuration key or the `.cloudmonignore` marker file described below.
- If your access key does not have the `ListBucket` permission for one the buckets, the buckets get ignored.

#### IAM policy setup
Your IAM user needs a policy attached with the following permissions:

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
            "Sid": "ListBucketObjects",
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::your-bucket"
            ]
        },
        {
            "Sid": "ListAndModifyActions",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::your-bucket/*"
            ]
        }
    ]
}
```

## Ignoring disks
In each disk, you can put a marker file named `.cloudmonignore`. When *cloudmon* checks the disk and that file is present, the disk is ignored.
This may come in handy if you have multiple non-backup related buckets in your S3 account.