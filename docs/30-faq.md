# FAQ

## Prometheus
### How can I identify the number of backups in a week?

```sql
sum_over_time(min(1, irate(backup_latest_time_seconds[7d])))
```