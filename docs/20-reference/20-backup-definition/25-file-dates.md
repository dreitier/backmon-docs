# File dates

For normal file systems different attributes like `*mtime*, *ctime* and *atime* exists to record the times of changes to files. Those values might change if and when files are copied to other locations like remote filesystems or object storages.
Because of this, *backmon* internally uses 4 different types of timestamps:

| Timestamp | Meaning | Default for files in local storage | Default for files in S3 |
| --- | --- | --- | --- |
| `born_at` | The time when the file has been initally created. This timestamp is the same if the file is copied to another location | *mtime* | Timestamp of upload |
| `modified_at` | The time when the file were last modified | *mtime* | Timestamp of upload |
| `archived_at` | The time when the file were moved to a long-term storage | *mtime* | Timestamp of upload |
| `interpolated_timestamp` | Based upon the file's and parent directories names, the timestamp of the file is calculated | interpolation with defaults from *mtime* | interpolation with defaults from timestamp of upload |

As you can see in the *Default for...* columns, by default they point all to the same value. To overwrite those timestamps with your own values, you can use [`.stat files`](#stat--dotstat-files).

## `interpolated_timestamp`
The `interpolated_timestamp` is calculated by *backmon* during the file discovery phase. If you have defined a file pattern for your backups which contains date formats like `%Y` or `%d`, those values will be applied. For missing parts of the date, the timestamp of the selected `.sort` algorithm is used as reference date.
In case that `.sort` has not been set or has been set to `interpolation`, a fallback to the `modified_at` timestamp happens.

## .stat / dotstat files
You can override a file's timestamp by using a `.stat` file The .stat file has the same filename as the backup file, except that you have to add the suffix `.stat` at the end.
If your backup file is named `20220719-postgres.tar.gz`, you must name your `.stat` file `20220719-postgres.tar.gz.stat`.

### Format of .stat files
`.stat` files have a simple YAML format. *backmon* recognizes the following keys which corresponds to *backmon*'s timestamp types:

| Key | Default | Required |
| --- | --- | --- |
| `born_at` | `<empty>` (*unix timestamp*) | No |
| `modified_at` | `<empty` (*unix timestamp*) | No | 
| `archived_at` | `<empty` (*unix timestamp*) | No |

- The difference between `modified_at` - `born_at` gives the duration in seconds that was needed to create the backup.
- The field `archived_at` can be set if after creating the backup an upload to a long-term archive like S3 does not happen directly. You can simply add the parameter before you upload the backup and dotstat file.

### Example format of `.stat` file
```yaml
born_at: 12313213
archived_at: 13818188
modified_at: 129939399
```

### Sample script for creating a backup and dotstat file
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