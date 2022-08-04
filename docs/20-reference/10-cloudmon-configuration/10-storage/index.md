# Storage
*cloudmon* supports backup file which are either stored
- in a local or local-mounted filesystem, like NFS
- or in an S3 compatible bucket like AWS S3 or Minio

## Ignoring disks
In each disk, you can put a marker file named `.cloudmonignore`. When *cloudmon* checks the disk and that file is present, the disk is ignored.
This may come in handy if you have multiple non-backup related buckets in your S3 account.