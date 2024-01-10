# FAQ

## Prometheus
### How can I identify the number of backups in a week?

```sql
sum_over_time(min(1, irate(backup_latest_time_seconds[7d])))
```

### Why does Prometheus not export metrics like `backmon_backup_latest_size_bytes`?

If metrics like `backmon_backup_latest_size_bytes` and `backmon_backup_latest_file_modified_at` are not available in the `/metrics` endpoint, either the root directories name in your `backup_definitions.yaml` is wrong or none of the files matches the given pattern.