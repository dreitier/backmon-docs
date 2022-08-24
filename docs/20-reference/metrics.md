# Metrics

One of the main tasks of *backmon* is to gather and export metrics.
Here you will find descriptions of:
- the [metric gathering process](#metric-data-collection)
- the [Prometheus endpoint](#prometheus-endpoint), and
- the [exported metrics](#available-metrics)

## Metric Data Collection



## Prometheus Endpoint
Metrics are offered through a configurable Prometheus endpoint.
The prometheus endpoint is reachable on the *backmon* host under the `/metrics` path.


## Available Metrics
All of the metrics offered by *backmon* begin with the prefix `backmon_backup_`. 
The metrics are listed under their full names here, but other parts of the documentation may omit this prefix for the sake of brevity.

### `backmon_environments_total`
Total number of environments, configured in the `config.yaml`.

### `backmon_disks_total`
Total number of discovered disks. This includes also the number of inactive disks, e.g. if permissions are missing.

### `backmon_backup_status`
This is a special metric that reports on the status of a bucket.

When there are no issues with the bucket, the reported status will be `0`.
A `0` means that *backmon* successfully connected to the bucket, retrieved the [*backup-definition*](20-backup-definition/10-overview.md) file, and parsed it.

If there is an issue with the bucket, the reported status will be an error code.
Such an error code will always be an integer > `0` from the following list:

Status | Meaning
--: | :--
`0` | OK
`1` | Unknown error

> **TBD**: error codes

### `backmon_backup_file_count_aim`
Reports the desired file count, as specified by the `retention-count` setting in the *backup_definitions.yaml*.

### `backmon_backup_file_count`
Reports the actual file count.

When purging is enabled, this count will usually be equal to the [target](#backmon_backup_file_count_aim).

### `backmon_backup_file_age_aim_seconds`
This is equal to the converted `retention-age` parameter in seconds from the [`backup_definitions.yaml`](backup-definition/overview)

### `backmon_backup_file_young_count`
The amount of backup files in this group that are younger than the maximum age (`file_age_aim_seconds`).

### `backmon_backup_latest_creation_aim_seconds`
Unix timestamp on which the latest backup in the corresponding file group should have occurred.

### `backmon_backup_latest_creation_seconds`
Unix timestamp on which the latest backup in the corresponding file group was created.
This is basically the value which comes from the variable interpolation of the file.

### `backmon_backup_latest_file_creation_duration`
Describes how long it took to create the backup file in seconds. This is 0 if born_at and modified_at have the same value.

### `backmon_backup_latest_file_born_at`
Unix timestamp on which the latest file has been initially created. See [.stat files](backup-definition/file-dates).

### `backmon_backup_latest_file_modified_at`
Unix timestamp on which the latest file has been modified. See [.stat files](backup-definition/file-dates).

### `backmon_backup_latest_file_archived_at`
Unix timestamp on which the latest file has been archived. See [.stat files](backup-definition/file-dates).

### `backmon_backup_latest_size_bytes`
Size (in bytes) of the latest backup in the corresponding file group.

## A note about `backmon_backup_latest_file_*_at`
Due to [file system limitations](backup-definition/file-dates) section, you have to provide the values for 
- `backmon_backup_latest_file_born_at`
- `backmon_backup_latest_file_modified_at`
- `backmon_backup_latest_file_archived_at`

through a [.stat file](backup-definition/file-dates#stat--dotstat-files). If you do not that, each of the metrics will have the same value/timestamp.

## Labels
The following table shows which labels are defined for each metric.

Metric | disk | dir | file | group |
:----- | :----: | :-: | :--: | :---: |
`backmon_backup_status` | ✓ | - | - | - |
`backmon_backup_file_count_aim` | ✓ | ✓ | ✓ | - |
`backmon_backup_file_count` | ✓ | ✓ | ✓ | ✓ |
`backmon_backup_file_age_aim_seconds` | ✓ | ✓ | ✓ | - |
`backmon_backup_file_young_count` | ✓ | ✓ | ✓ | ✓ |
`backmon_backup_latest_creation_aim_seconds` | ✓ | ✓ | ✓ | - |
`backmon_backup_latest_creation_seconds` | ✓ | ✓ | ✓ | ✓ |
`backmon_backup_latest_creation_duration` | ✓ | ✓ | ✓ | ✓ |
`backmon_backup_latest_file_born_at` | ✓ | ✓ | ✓ | ✓ |
`backmon_backup_latest_file_modified_at` | ✓ | ✓ | ✓ | ✓ |
`backmon_backup_latest_file_archived_at` | ✓ | ✓ | ✓ | ✓ |
`backmon_backup_latest_creation_seconds` | ✓ | ✓ | ✓ | ✓ |
`backmon_backup_latest_size_bytes` | ✓ | ✓ | ✓ | ✓ |

## Sample output from the `/api/metrics` endpoint

```
# HELP backmon_disks_total Total number of registered disks
# TYPE backmon_disks_total gauge
backmon_disks_total 0
# HELP backmon_environments_total Total number of environments
# TYPE backmon_environments_total gauge
backmon_environments_total 1
# HELP backmon_backup_file_age_aim_seconds The maximum age (in seconds) that any file in this group should reach.
# TYPE backmon_backup_file_age_aim_seconds gauge
backmon_backup_file_age_aim_seconds{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump"} 0
# HELP backmon_backup_file_count The amount of backup files present in this group.
# TYPE backmon_backup_file_count gauge
backmon_backup_file_count{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 4
# HELP backmon_backup_file_count_aim The amount of backup files expected to be present in this group.
# TYPE backmon_backup_file_count_aim gauge
backmon_backup_file_count_aim{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump"} 0
# HELP backmon_backup_file_young_count The amount of backup files in this group that are younger than the maximum age (file_age_aim_seconds).
# TYPE backmon_backup_file_young_count gauge
backmon_backup_file_young_count{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 0
# HELP backmon_backup_latest_creation_aim_seconds Unix timestamp on which the latest backup in the corresponding file group should have occurred.
# TYPE backmon_backup_latest_creation_aim_seconds gauge
backmon_backup_latest_creation_aim_seconds{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump"} 1.6581852e+09
# HELP backmon_backup_latest_creation_seconds Unix timestamp on which the latest backup in the corresponding file group was created.
# TYPE backmon_backup_latest_creation_seconds gauge
backmon_backup_latest_creation_seconds{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 1.658182599e+09
# HELP backmon_backup_latest_file_archived_at Unix timestamp on which the latest file has been archived
# TYPE backmon_backup_latest_file_archived_at gauge
backmon_backup_latest_file_archived_at{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 1.381818188e+09
# HELP backmon_backup_latest_file_born_at Unix timestamp on which the latest file has been initially created
# TYPE backmon_backup_latest_file_born_at gauge
backmon_backup_latest_file_born_at{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 1.2313213e+07
# HELP backmon_backup_latest_file_creation_duration Describes how long it took to create the backup file in seconds
# TYPE backmon_backup_latest_file_creation_duration gauge
backmon_backup_latest_file_creation_duration{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 1.17626186e+08
# HELP backmon_backup_latest_file_modified_at Unix timestamp on which the latest file has been modified
# TYPE backmon_backup_latest_file_modified_at gauge
backmon_backup_latest_file_modified_at{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 1.29939399e+08
# HELP backmon_backup_latest_size_bytes Size (in bytes) of the latest backup in the corresponding file group.
# TYPE backmon_backup_latest_size_bytes gauge
backmon_backup_latest_size_bytes{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 0
# HELP backmon_backup_status Indicates whether there were any problems collecting metrics for this disk. Any value >0 means that errors occurred.
# TYPE backmon_backup_status gauge
backmon_backup_status{disk="samples/1.postgres-dumps"} 0
```