# Storage
*backmon* supports backup file which are either stored
- in a local or local-mounted filesystem, like NFS
- or in an S3 compatible bucket like AWS S3 or Minio
- or in a Google Cloud Storage bucket

## Ignoring disks
In each disk, you can put a marker file named `.backmonignore`. When *backmon* checks the disk and that file is present, the disk is ignored.
This may come in handy if you have multiple non-backup related buckets in your S3 account or Google Cloud project.