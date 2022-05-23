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
A `0` means that *cloudmon* successfully connected to the bucket, retrieved the [*backup-definition*](backup-definitions) file, and parsed it.

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

### `cloudmon_backup_file_young_count`

### `cloudmon_backup_latest_creation_aim_seconds`

### `cloudmon_backup_latest_creation_seconds`

### `cloudmon_backup_latest_size_bytes`


## Labels
Each metric

The following table shows which labels are defined for each metric.

Metric | bucket | dir | file | group |
:----- | :----: | :-: | :--: | :---: |
`cloudmon_backup_status` | ✓ | - | - | - |
`cloudmon_backup_file_count_aim` | ✓ | ✓ | ✓ | - |
`cloudmon_backup_file_count` | ✓ | ✓ | ✓ | ✓ |
`cloudmon_backup_file_age_aim_seconds` | ✓ | ✓ | ✓ | - |
`cloudmon_backup_file_young_count` | ✓ | ✓ | ✓ | ✓ |
`cloudmon_backup_latest_creation_aim_seconds` | ✓ | ✓ | ✓ | - |
`cloudmon_backup_latest_creation_seconds` | ✓ | ✓ | ✓ | ✓ |
`cloudmon_backup_latest_size_bytes` | ✓ | ✓ | ✓ | ✓ |
