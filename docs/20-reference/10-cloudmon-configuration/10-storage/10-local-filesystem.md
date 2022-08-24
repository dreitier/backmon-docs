# Local filesystem
Local disks can be configured in the `config.yaml` by using the parameter `environments[].path`:

```yaml
environments:
  local_backup:
    path: /data/backup/mysql
```

*backmon* tries to read the `backup_definitions.yaml` from the location `/data/backup/mysql/backup_definitions.yaml`.