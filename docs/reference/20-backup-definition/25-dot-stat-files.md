# .stat / dotstat files

A regular requirement is to evaluate the duration to create the backup. For example, you can use the duration to see if productive services are affected during a longer backup.

For file systems there are different attributes (mtime, ctime, atime) to record the times of changes to files. Since the creation date of a file in the local file system and a file copied to S3 cannot be tracked, *cloudmon* supports `.stat` files. In these you can easily store metadata for your backup files: e.g. the creation or upload date of the file.

# Naming of the .stat files
The .stat file has the same filename as the backup file, except that you have to add the suffix `.stat` at the end.
If your backup file is named `20220719-postgres.tar.gz`, you must name your `.stat` file `20220719-postgres.tar.gz.stat`.

# Format of the .stat files
The .stat files have a simple YAML format. cloudmon recognizes the following keys:

| Parameter | Default | Required | Description |
| --- | --- | --- | --- | 
| `born_at` | `<empty>` (*unix timestamp*) | No | The time when the file was created. |
| `modified_at` | `<empty` (*unix timestamp*) | No | The time when the contents of the file were last modified |
| `archived_at` | `<empty` (*unix timestamp*) | No | The time when the file has been archived, i.e. moved to the long-term archive. |

- The difference between `modified_at` - `born_at` gives the duration in seconds that was needed to create the backup.
- The field `archived_at` can be set if after creating the backup an upload to a long-term archive like S3 does not happen directly. You can simply add the parameter before you upload the backup and dotstat file.

## Example format of `.stat` file
```yaml
born_at: 12313213
archived_at: 13818188
modified_at: 129939399
```

## Sample script for creating backup files
For example, if you create your backups with pg_dump, you can store the values as follows:

```bash
TODAY=$(date +'%Y%m%d')
FILE="/tmp/${TODAY}.tar"
NOW=$(date +"%s")

# create dump
echo "born_at: $NOW" >> "$FILE.stat"
pg_dump -U postgres -F t my_database > $FILE
NOW=$(date +"%s")
echo "modified_at: $NOW" >> "$FILE.stat"

# for demonstration purposes, sleep some seconds
sleep 300
NOW=$(date +"%s")
# copy backup to S3
aws s3 cp "$FILE." s3://my-backup-bucket/
echo "archived_at: $NOW" >> "$FILE.stat"
aws s3 cp "$FILE.stat" s3://my-backup-bucket/
```