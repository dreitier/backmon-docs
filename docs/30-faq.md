# FAQ

## Prometheus
### How can I identify the number of backups in a week?

```sql
sum_over_time(min(1, irate(backup_latest_time_seconds[7d])))
```

### Why does Prometheus does not export metrics like `cloudmon_backup_latest_size_bytes`?

If metrics like `cloudmon_backup_latest_size_bytes` and `cloudmon_backup_latest_file_modified_at` are not available in the `/metrics` endpoint, either the root directories name in your `backup_definitions.yaml` is wrong or none of the files matches the given pattern.