# Metrics

One of the main tasks of *cloudmon* is to gather and export metrics.
Here you will find descriptions of:
- the [metric gathering process](#metric-data-collection)
- the [Prometheus endpoint](#prometheus-endpoint), and
- the [exported metrics](#available-metrics)

## Metric Data Collection



## Prometheus Endpoint
Metrics are offered through a configurable Prometheus endpoint.
The prometheus endpoint is reachable on the *cloudmon* host under the `/metrics` path.


## Available Metrics
All of the metrics offered by *cloudmon* begin with the prefix `cloudmon_backup_`. 
The metrics are listed under their full names here, but other parts of the documentation may omit this prefix for the sake of brevity.

### `cloudmon_backup_status`
This is a special metric that reports on the status of a bucket.

When there are no issues with the bucket, the reported status will be `0`.
A `0` means that *cloudmon* successfully connected to the bucket, retrieved the [*backup-definition*](20-backup-definition/10-overview.md) file, and parsed it.

If there is an issue with the bucket, the reported status will be an error code.
Such an error code will always be an integer > `0` from the following list:

Status | Meaning
--: | :--
`0` | OK
`1` | Unknown error

> **TBD**: error codes

### `cloudmon_backup_file_count_aim`
Reports the desired file count, as specified by the `retention-count` setting in the *backup_definition*.

### `cloudmon_backup_file_count`
Reports the actual file count.

When purging is enabled, this count will usually be equal to the [target](#cloudmon_backup_file_count_aim).

### `cloudmon_backup_file_age_aim_seconds`
This is equal to the converted `retention-age` parameter in seconds from the [`backup_definitions.yaml`](backup-definition/overview)

### `cloudmon_backup_file_young_count`
The amount of backup files in this group that are younger than the maximum age (`file_age_aim_seconds`).

### `cloudmon_backup_latest_creation_aim_seconds`
Unix timestamp on which the latest backup in the corresponding file group should have occurred.

### `cloudmon_backup_latest_creation_seconds`
Unix timestamp on which the latest backup in the corresponding file group was created.
This is basically the value which comes from the variable interpolation of the file.

### `cloudmon_backup_latest_file_creation_duration`
Describes how long it took to create the backup file in seconds. This is 0 if born_at and modified_at have the same value.

### `cloudmon_backup_latest_file_born_at`
Unix timestamp on which the latest file has been initially created. See [.stat files](backup-definition/dot-stat-files).

### `cloudmon_backup_latest_file_modified_at`
Unix timestamp on which the latest file has been modified. See [.stat files](backup-definition/dot-stat-files).

### `cloudmon_backup_latest_file_archived_at`
Unix timestamp on which the latest file has been archived. See [.stat files](backup-definition/dot-stat-files).

### `cloudmon_backup_latest_size_bytes`
Size (in bytes) of the latest backup in the corresponding file group.

## A note about `cloudmon_backup_latest_file_*_at`
Due to limitations described in the [.stat files](backup-definition/dot-stat-files) section, you have to provide the values for 
- `cloudmon_backup_latest_file_born_at`
- `cloudmon_backup_latest_file_modified_at`
- `cloudmon_backup_latest_file_archived_at`

through a [.stat file](backup-definition/dot-stat-files). If you do not that, each of the metrics will have the same value/timestamp.

## Labels
The following table shows which labels are defined for each metric.

Metric | disk | dir | file | group |
:----- | :----: | :-: | :--: | :---: |
`cloudmon_backup_status` | ✓ | - | - | - |
`cloudmon_backup_file_count_aim` | ✓ | ✓ | ✓ | - |
`cloudmon_backup_file_count` | ✓ | ✓ | ✓ | ✓ |
`cloudmon_backup_file_age_aim_seconds` | ✓ | ✓ | ✓ | - |
`cloudmon_backup_file_young_count` | ✓ | ✓ | ✓ | ✓ |
`cloudmon_backup_latest_creation_aim_seconds` | ✓ | ✓ | ✓ | - |
`cloudmon_backup_latest_creation_seconds` | ✓ | ✓ | ✓ | ✓ |
`cloudmon_backup_latest_creation_duration` | ✓ | ✓ | ✓ | ✓ |
`cloudmon_backup_latest_file_born_at` | ✓ | ✓ | ✓ | ✓ |
`cloudmon_backup_latest_file_modified_at` | ✓ | ✓ | ✓ | ✓ |
`cloudmon_backup_latest_file_archived_at` | ✓ | ✓ | ✓ | ✓ |
`cloudmon_backup_latest_creation_seconds` | ✓ | ✓ | ✓ | ✓ |
`cloudmon_backup_latest_size_bytes` | ✓ | ✓ | ✓ | ✓ |

## Sample output from the `/api/metrics` endpoint

```
# HELP cloudmon_backup_file_age_aim_seconds The maximum age (in seconds) that any file in this group should reach.
# TYPE cloudmon_backup_file_age_aim_seconds gauge
cloudmon_backup_file_age_aim_seconds{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump"} 0
# HELP cloudmon_backup_file_count The amount of backup files present in this group.
# TYPE cloudmon_backup_file_count gauge
cloudmon_backup_file_count{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 4
# HELP cloudmon_backup_file_count_aim The amount of backup files expected to be present in this group.
# TYPE cloudmon_backup_file_count_aim gauge
cloudmon_backup_file_count_aim{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump"} 0
# HELP cloudmon_backup_file_young_count The amount of backup files in this group that are younger than the maximum age (file_age_aim_seconds).
# TYPE cloudmon_backup_file_young_count gauge
cloudmon_backup_file_young_count{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 0
# HELP cloudmon_backup_latest_creation_aim_seconds Unix timestamp on which the latest backup in the corresponding file group should have occurred.
# TYPE cloudmon_backup_latest_creation_aim_seconds gauge
cloudmon_backup_latest_creation_aim_seconds{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump"} 1.6581852e+09
# HELP cloudmon_backup_latest_creation_seconds Unix timestamp on which the latest backup in the corresponding file group was created.
# TYPE cloudmon_backup_latest_creation_seconds gauge
cloudmon_backup_latest_creation_seconds{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 1.658182599e+09
# HELP cloudmon_backup_latest_file_archived_at Unix timestamp on which the latest file has been archived
# TYPE cloudmon_backup_latest_file_archived_at gauge
cloudmon_backup_latest_file_archived_at{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 1.381818188e+09
# HELP cloudmon_backup_latest_file_born_at Unix timestamp on which the latest file has been initially created
# TYPE cloudmon_backup_latest_file_born_at gauge
cloudmon_backup_latest_file_born_at{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 1.2313213e+07
# HELP cloudmon_backup_latest_file_creation_duration Describes how long it took to create the backup file in seconds
# TYPE cloudmon_backup_latest_file_creation_duration gauge
cloudmon_backup_latest_file_creation_duration{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 1.17626186e+08
# HELP cloudmon_backup_latest_file_modified_at Unix timestamp on which the latest file has been modified
# TYPE cloudmon_backup_latest_file_modified_at gauge
cloudmon_backup_latest_file_modified_at{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 1.29939399e+08
# HELP cloudmon_backup_latest_size_bytes Size (in bytes) of the latest backup in the corresponding file group.
# TYPE cloudmon_backup_latest_size_bytes gauge
cloudmon_backup_latest_size_bytes{dir="postgres",disk="samples/1.postgres-dumps",file="pgdump",group="backups"} 0
# HELP cloudmon_backup_status Indicates whether there were any problems collecting metrics for this disk. Any value >0 means that errors occurred.
# TYPE cloudmon_backup_status gauge
cloudmon_backup_status{disk="samples/1.postgres-dumps"} 0
```