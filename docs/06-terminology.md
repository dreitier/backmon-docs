# Terminology

| Term | Description |
| --- | --- |
| *cloudmon host* | The host on which the *cloudmon* binary is running. |
| *storage provider* | Some API or endpoint which provides file access for *disk*s. |
| *disk* | A *disk* represents a specific *storage provider* and a path in that provided storage.|
| *bucket* | *bucket* means an S3-compatible bucket. One *bucket* can provide any number of disks. |
| *backup definition* | At the root of each *disk* there must be a *backup_definition.yaml* which specifices how backups are stored in it.|