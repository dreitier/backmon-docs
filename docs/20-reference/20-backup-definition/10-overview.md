﻿import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Overview

The backup definition is a YAML file that describes the structure of your backups.
In it, you provide the information that *backmon* needs to collect metric data, purge files, and offer file downloads.

*backmon* looks for the backup definition file called `backup_definitions.yaml` at the root directory of your disk.
You can overwrite the file naming in the [backmon configuration file](../10-backmon-configuration/01-overview.md).

### Sample `backup_definitions.yaml` file

```yaml
quota: 2GiB
directories:
  # use directory ./databases as the the root directory. You can have multiple directories in each YAML file. 
  # use '.' if the definitions file is in the same directory as your backups.
  './databases/{{client}}':
    # alias is used for Prometheus metrics
    alias: DB
    # assign variables
    fuse:
      - 'client'
    # apply those defaults to all files.* sections. You can override each parameter in the files.* section
    defaults:
      # expect that a backup file is generated at 00:30 each night
      schedule: 30 0 * * *
      # for identifying the newest file, we use the `born_at` field
      sort: born_at
      # purge old files which are older than 7 days and keep at least 10 backups
      purge: true

      # @see https://github.com/dreitier/backmon/issues/19
      # retention-count: 10
      # retention-age: 7d
    # inside the ./databases folder there are multiple files like `postgres-20220713.gz`
    files:
      'postgres-%Y%M%D.gz':
        # File alias for Prometheus	
        alias: PostgeSQL
        # This backup is generated at 01:00 each night
        schedule: 0 1 * * *
        retention-count: 10
        retention-age: 7d
      '%Y%M%D_mysql_%I.gz':
        alias: MySQL
```

## Available configuration keys

| Key                                                     | Default                                                                               | Required | Description                                                                                                                                                                                                                                                    |
|---------------------------------------------------------|---------------------------------------------------------------------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `quota`                                                 | `0B` (*size*)                                                                         | No       | Bucket quota. Supported units are for example GB (10^n) or GiB (2^n)                                                                                                                                                                                           |
| `directories.[$directory]`                              | `<empty>` (*string*)                                                                  | __Yes__  | Directory name inside the disk, relative to the `backup_definitions.yaml`.                                                                                                                                                                                     |
| `directories.[$directory].alias`                        | `<name of directory>` (*string*)                                                      | No       | Used alias when exporting metrics.                                                                                                                                                                                                                             |
| `directories.[$directory].fuse[]`                       | `<empty>` (*list of wildcard strings*)                                                | No       | Group files together by that substitutions.                                                                                                                                                                                                                    |
| `directories.[$directory].defaults.*`                   | `<empty>` (*any of .schedule, .sort, .purge*)                                         | No       | Apply those defaults for each `directories.[$directory].files[$file]` section. Each `directories.[$directory].files[$file].*` key can override this default.  <p />(`.retention-count`, `.retention-age`) are not available, see [#19](https://github.com/dreitier/backmon/issues/19). |
| `directories.[$directory].files[$file]`                 | `<empty>` (*map*)                                                                     | __Yes__  | File pattern to check for.                                                                                                                                                                                                                                     |
| `directories.[$directory].files[$file].schedule`        | `<empty>` (*valid cron definition*)                                                   | No       | Cron definition to check for files                                                                                                                                                                                                                             |
| `directories.[$directory].files[$file].sort`            | `interpolation` (*one of `born_at`, `modified_at`, `archived_at` or `interpolation`*) | No       | Used data to sort the files. The selected method uses the given field to sort the files and find the latest/newest one. In case of `interpolation`, the variable substitution is applied                                                                       |
| `directories.[$directory].files[$file].purge`           | `<empty>` (*bool*)                                                                    | No       | Purges each file which does not match `retention-age` or `retention-count`. If `purge` is set to `true`, without having an explicit retention, a limit von `14` days is assumed.                                                                               |
| `directories.[$directory].files[$file].retention-count` | `<empty>` (*int*)                                                                     | No       | Keep max number of files                                                                                                                                                                                                                                       |
| `directories.[$directory].files[$file].retention-age`   | `<empty>` (*duration*)                                                                | No       | Keep files newer than that                                                                                                                                                                                                                                     |
| `directories.[$directory].files[$file].alias`           | `<name of file>` (*string*)                                                           | No       | Used alias when exporting metrics.                                                                                                                                                                                                                             |

## `directories.[$directory]`

The root elements for each `backup_definitions.yaml` are the names of the subdirectories in a disk.

### Location of backup directories

#### Backups in the same directory

When backups are in the same directory with the `backup_definitions.yaml`, you have to use `.` or `./` as root element:

```mdx-code-block
<Tabs>
<TabItem value="bash" label="Directory structure" default>
```

```bash
- backup_definitions.yaml
- backup1.tar.gz
- backup2.tar.gz
```

```mdx-code-block
</TabItem>
<TabItem value="yaml" label="backup_definitions.yaml">
```

```yaml
directories:
  './':
    alias: root
    # ... configuration options
```

```mdx-code-block
</TabItem>
</Tabs>
```

#### Backups in subdirectories

```mdx-code-block
<Tabs>
<TabItem value="bash" label="Directory structure" default>
```

```bash
- backup_definitions.yaml
+ /backup-1/
  - backup1.tar.gz
  - backup2.tar.gz
+ /backup-2/
  - backup1.tar.gz
  - backup2.tar.gz
```

```mdx-code-block
</TabItem>
<TabItem value="yaml" label="backup_definitions.yaml">
```

```yaml
directories:
  './backup-1':
    alias: root-1
    # ... configuration options
  './backup-2':
    alias: root-2
    # ... configuration options
 ```

```mdx-code-block
</TabItem>
</Tabs>
```

### Patterns

#### Pattern variables

A variable can be put on a *directory* pattern by using two curly braces (e.g. `{{variable}}`). For variable names only
characters `0-9`, `A-Z`, `a-z`, and `_` are allowed. Please note that you _should not_ override the variables names from
the [substituions](substitutions).

Variables can be referenced later on in a *file* pattern with help of `${variable}`.

#### Pattern substitutions

See  [substituions](substitutions).

### `directories.[$directory].alias`

If specified, the label `dir` for the epxorted Prometheues metrics will be overwritten with the given alias.

#### Without `.alias`

```mdx-code-block
<Tabs>
<TabItem value="yaml" label="backup_definitions.yaml" default>
```

```yaml
directories:
  './backups':
    files:
      'dump-%Y%M%D.sql':
```

```mdx-code-block
</TabItem>
<TabItem value="bash" label="Prometheus output">
```

```bash
backmon_backup_latest_file_creation_expected_at_timestamp_seconds{dir="./backups",disk="_samples/1.postgres-dumps",file="dump-%Y%M%D.sql"}
```

```mdx-code-block
</TabItem>
</Tabs>
```

#### With `.alias` specified

```mdx-code-block
<Tabs>
<TabItem value="yaml" label="backup_definitions.yaml" default>
```

```yaml
directories:
  './backups':
    alias: "custom_backups"
    files:
      'dump-%Y%M%D.sql':
```

```mdx-code-block
</TabItem>
<TabItem value="bash" label="Prometheus output">
```

```bash
backmon_backup_latest_file_creation_expected_at_timestamp_seconds{dir="custom_backups",disk="_samples/1.postgres-dumps",file="dump-%Y%M%D.sql"}
```

```mdx-code-block
</TabItem>
</Tabs>
```

### `directories.[$directory].fuse`

Sometimes you need to group files together which belong logically to the same backup set but are split across different
directories.

```mdx-code-block
<Tabs>
<TabItem value="bash" label="Directory structure" default>
Let's group together the following backup `.sql` files:
```

```bash
backups/2022/01/postgres/some_subdir
- 20220101.sql
backups/2022/02/postgres/some_subdir
- 20220201.sql
backups/2022/03/postgres/some_subdir
- 20220301.sql
```

```mdx-code-block
</TabItem>
<TabItem value="yaml" label="backup_definitions.yaml">
```

```yaml
directories:
  './backups/{{of_year}/{{of_month}}/postgres/{{some_subdir}}':
    alias: "backups"
    fuse:
      - 'of_year'
      - 'of_month'
        files:
          'dump-%Y%M%D.sql':
          alias: 'postgres'
  ```

```mdx-code-block
</TabItem>
</Tabs>
```

### `directories.[$directory].defaults.*`

If you want to use the same configuration over multiple `directories.[$directory].files[$file]` sections, you can use `.defaults`.
With `.defaults` you can apply the configuration keys

- `.schedule`
- `.sort`
- `.purge`

as defaults for each `directories.[$directory].files[$file].*` section. You can can override the default key value in each
`directories.[$directory].files[$file]` section.

The two settings

- `.retention-count`
- `.retention-age`

are **not** available, see [#19](https://github.com/dreitier/backmon/issues/19).

### `directories.[$directory].files[$file]`

Each `directories.[$directory].files[$file]` key supports so-called [substitutions](substitutions). They are basically simplified
regular expressions. Some of those substitutions like '%Y' and '%M' are used to update the file's `
interpolated_timestamp'.

```mdx-code-block
<Tabs>
<TabItem value="bash" label="Directory structure" default>
```

```bash
backups-1/
- dump-20220401.sql
- dump-20220501.sql
- dump-20220601.sql
- dump-20220701.sql
```

```mdx-code-block
</TabItem>
<TabItem value="yaml" label="backup_definitions.yaml">
```

```yaml
directories:
  ./backups-1:
    alias: "backups"
    files:
      'dump-%Y%M%D.sql':
```

```mdx-code-block
</TabItem>
</Tabs>
```

### `directories.[$directory].files[$file].schedule`

Put in your crontab definition for when the backup should occur.

### `directories.[$directory].files[$file].sort`

With help of `.sort` you can define which of the backup file's fields is used for sorting. Sorting is used for finding
the latest/newest files (relevant for the `/api/download` endpoint) and oldest files (relevant for purging).

| Key             | Timestamp used                                          | Default |
|-----------------|---------------------------------------------------------|---------|
| `born_at`       | [`born_at`](file-dates)                                 | -       |
| `modified_at`   | [`modified_at`](file-dates)                             | -       |
| `archived_at`   | [`archived_at`](file-dates)                             | -       |
| `interpolation` | [interpolated timestamp](file-dates#interpolated_value) | ✓       |

If you are not using [.stat / dotstat files](file-dates#stat--dotstat-files), [
`interpolation`](file-dates#interpolated_timestamp) is used.

### `directories.[$directory].files[$file].purge`

If set to `true`, files which are older than `retention-age` and over the number of `retention-count` are deleted.

### `directories.[$directory].files[$file].retention-count`

If `.purge` is set to true, at least a number of `.retention-count` files are kept, even if they are older than
`.retention-age`.

### `directories.[$directory].files[$file].retention-age`

If `.purge` is set to true, files older then `.retention-age` are purged. Pleas note that at least a number of
`.retention-count` files is kept.
`.sort` is used to calculate if a given file is older than `.retention-age` from today.

### `directories.[$directory].files[$file].alias`

If specified, the label `file` for the epxorted Prometheues metrics will be overwritten with the given alias.

#### Without `.alias`

```mdx-code-block
<Tabs>
<TabItem value="yaml" label="backup_definitions.yaml" default>
```

```yaml
directories:
  './backups':
    files:
      'dump-%Y%M%D.sql':
```

```mdx-code-block
</TabItem>
<TabItem value="bash" label="Prometheus output">
```

```bash
backmon_backup_latest_file_creation_expected_at_timestamp_seconds{dir="./backups",disk="_samples/1.postgres-dumps",file="dump-%Y%M%D.sql"}
```

```mdx-code-block
</TabItem>
</Tabs>
```

#### With `.alias` specified

```mdx-code-block
<Tabs>
<TabItem value="yaml" label="backup_definitions.yaml" default>
```

```yaml
directories:
  './backups':
    files:
      'dump-%Y%M%D.sql':
      alias: "pg-dump"
```

```mdx-code-block
</TabItem>
<TabItem value="bash" label="Prometheus output">
```

```bash
backmon_backup_latest_file_creation_expected_at_timestamp_seconds{dir="./backups",disk="_samples/1.postgres-dumps",file="pg-dump"}
```

```mdx-code-block
</TabItem>
</Tabs>
```
