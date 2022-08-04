# Monitor Rancher backups
After you have configured recurring backups for your [Rancher/Kubernetes cluster](https://rancher.com/docs/rancher/v2.6/en/backups/back-up-rancher/) you proably want to monitor those backups.

Rancher uses the following filename structure for the backup files when storing the backups in an S3 bucket:

```bash
s3-backup-b025385f-800a-4ee6-b8b6-bbf199a0e733-2022-08-02T00-00-00Z.tar.gz	
s3-backup-b025385f-800a-4ee6-b8b6-bbf199a0e733-2022-08-03T00-00-00Z.tar.gz	
s3-backup-b025385f-800a-4ee6-b8b6-bbf199a0e733-2022-08-04T00-00-00Z.tar.gz	
```

To monitor those files, create a `backup_definitions.yaml` in the S3 bucket with the following content:

```yaml
content:
  alias: RANCHER_CLUSTER
  defaults:
    schedule: 0 0 * * *
  files:
    "s3-backup-%w-%w-%w-%w-%w-%Y-%M-%DT%h-%m-%sZ.tar.gz":
      alias: rancher-backups
      retention-count: 7
      purge: false
```