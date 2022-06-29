# Overview
*cloudmon*'s binary must run either on a bare-metal host or inside a Docker container.
It then can be configure through a configuration file. 
In it, you specify which disks, local filesystem paths or S3 buckets, have to be monitored.

*cloudmon* inspects each of the configured disks. If a [backup definition](../20-backup-definition/10-overview.md) is found in a disk, its [backup definition](../20-backup-definition/10-overview.md) is applied.

*cloudmon* tries to locate the configuration file `config.yaml` in the following directories, priority in the defined order:

- local directory: `./config.yaml`
- `${HOME}/.cloudmon/config.yaml`
- `/etc/cloudmon/config.yaml`

In the configuration file, you can use environment placeholders like `${VAR}`. Those placeholders will be replaced during the startup of *cloudmon* with the corresponding environment variables. You have to place the configuration file at `/etc/cloudmon/config-raw.yaml`.

## Command line options for *cloudmon*

| Option | Default | Description |
| --- | --- | --- |
| `--debug` | `false` (*bool*) | Enable debug output; overwrites any log setting from `config.yaml` |

## Configuration file `config.yaml`

| Parameter | Default | Required | Description |
| --- | --- | --- | --- |
| `port` | `80` (*int*) | No | Default HTTP port to listen for requests. TLS is not supported at the moment. Consider using a proxy if you need encryption. |
| `update_interval` | `1h` (*duration*) | No |  Checks each disk in that duration interval. |
| `ignore_disks` | `<empty>` (*list of strings*) | No |  Each of the listed disks is ignored and won't be considered. | 
| `downloads.enabled` | `false` | No | If `true`, the latest artifact of a monitored backup disk can be downloaded. This is disabled by default for security reasons ([#1](https://github.com/dreitier/cloudmon/issues/1)).|
| `environments` | `<empty>` (*list of environment*) | No | Each `environment` to check. |
| `environments[]` | `<empty>` (*string*) | __Yes__ |  Name of environment. |
| `environments[].definitions` | `backup_definitions.yaml` (*string*) | No | YAML file containing the backup definitions. |
| `environments[].path` | `<empty>` (*string*) | No | Local path to check for. If you use the `path` parameter, other parameters specific for S3 are ignored. |
| `environments[].region` | `eu-central-1` (*string*) | No | AWS region |
| `environments[].force_path_style` | `false` (*bool*) | No | Use path-style for that S3 bucket. This is deprecated by AWS S3 and should be probably `false`. |
| `environments[].access_key_id` | `<empty>` (*string*) | __Yes__ | AWS Access Key |
| `environments[].secret_access_key` | `<empty>` (*string*) | __Yes__ | AWS Secret Access Key |
| `environments[].endpoint` | `<empty>` (*string*) | No | Custom AWS S3 endpoint. This must be used for Minio buckets or if you are using a local S3 instance. |
| `environments[].token` | `<empty>` (*string*) | No | AWS STS session token. You can leave that empty. |

### Sample configuration file

```yaml

port: 8080
update_interval: 1m
downloads:
  enabled: true

ignore_disks:
  - disk_1
  - disk_2
 
environments:
  env_1:
    path: /my/backups
  env_2:
    access_key_id: my_access_key_id
	secret_access_key: my_secret_access_key
    
```
