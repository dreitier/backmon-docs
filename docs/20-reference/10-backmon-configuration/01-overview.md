# Overview

*backmon*'s binary must run either on a bare-metal host or inside a Docker container.
It then can be configured through a configuration file.
In it, you specify which disks, local filesystem paths or S3 buckets, have to be monitored.

*backmon* inspects each of the configured disks. If a [backup definition](../20-backup-definition/10-overview.md) is
found in a disk, its [backup definition](../20-backup-definition/10-overview.md) is applied.

*backmon* tries to locate the configuration file `config.yaml` in the following directories, priority in the defined
order:

- local directory: `./config.yaml`
- `${HOME}/.backmon/config.yaml`
- `/etc/backmon/config.yaml`

In the configuration file, you can use environment placeholders like `__${VAR}__`. Those placeholders will be replaced
during the startup of *backmon* with the corresponding environment variables. You have to place the configuration file
at `/etc/backmon/config-raw.yaml`.

Multiple placeholders in a single element are also supported, e. g. 
```yaml
endpoint: "__${S3_ENDPOINT_HOST}__:__${S3_ENDPOINT_PORT}__"
```

## Command line options for *backmon*

| Option    | Default          | Description                                                        |
|-----------|------------------|--------------------------------------------------------------------|
| `--debug` | `false` (*bool*) | Enable debug output; overwrites any log setting from `config.yaml` |

## Sample configuration file

```yaml

port: 8080
# for update_interval use `time.ParseDuration` format from https://pkg.go.dev/time#example-ParseDuration
# e.g. 1m, 1h, 86400s etc
update_interval: 1m
downloads:
  enabled: true

http:
  basic_auth:
    username: my_username
    password: my_password
  tls:
    certificate: server.rsa.crt
    key: server.rsa.key
    strict: true

environments:
  env_1:
    path: /my/backups
    disks:
      include:
        - my-bucket-1
      exclude:
        - my-secret-bucket-2
        - "/regular_ex.*ssions_are_supported/"
      all_others: exclude
  env_2:
    s3:
      access_key_id: my_access_key_id
      secret_access_key: my_secret_access_key
      auto_discover_disks: true
    disks:
      include:
        - my-bucket-1
      exclude:
        - my-secret-bucket-2
        - "/regular_ex.*ssions_are_supported/"
      all_others: exclude

```

## Available configuration keys

| Key                                         | Default                                   | Required | Description                                                                                                                                                                         |
|---------------------------------------------|-------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `port`                                      | `80` (*int*)                              | No       | Default HTTP port to listen for requests. TLS is not supported at the moment. Consider using a proxy if you need encryption.                                                        |
| `update_interval`                           | `1h` (*duration*)                         | No       | Checks each disk in that duration interval. [time.ParseDuration format](https://pkg.go.dev/time#example-ParseDuration) must be used.                                                |
| `log_level`                                 | `<empty>` (*one of `debug`, `info`*)      | No       | Used log level; will be overwritten if `--debug` is used.                                                                                                                           | 
| `downloads.enabled`                         | `false`                                   | No       | If `true`, the latest artifact of a monitored backup disk can be downloaded. This is disabled by default for security reasons ([#1](https://github.com/dreitier/backmon/issues/1)). |
| `http.basic_auth.username`                  | `<empty>` (*string*)                      | No       | Username for HTTP Basic Authentication. If this is set, `http.basic_auth.password` must be also set.                                                                                |
| `http.basic_auth.password`                  | `<empty>` (*string*)                      | No       | Password for HTTP Basic Authentication. If this is set, `http.basic_auth.username` must be also set.                                                                                |
| `http.tls.certificate`                      | `<empty>` (*string*)                      | No       | Path to certificate file. If this is set, `http.tls.key` must be also set.                                                                                                          |
| `http.tls.key`                              | `<empty>` (*string*)                      | No       | Path to private key file. If this is set, `http.tls.certificate` must be also set.                                                                                                  |
| `http.tls.strict`                           | `false` (*bool*)                          | No       | If set to true, a preferred TLS default configuration is used.                                                                                                                      |
| `environments`                              | `<empty>` (*list of environment*)         | No       | Each `environment` to check.                                                                                                                                                        |
| `environments[]`                            | `<empty>` (*string*)                      | __Yes__  | Name of environment.                                                                                                                                                                |
| `environments[$env].definitions`            | `backup_definitions.yaml` (*string*)      | No       | YAML file containing the backup definitions.                                                                                                                                        |
| `environments[$env].path`                   | `<empty>` (*string*)                      | No       | Local path to check for. If you use the `path` parameter, other parameters specific for S3 are ignored.                                                                             |
| `environments[$env].s3.region`              | `eu-central-1` (*string*)                 | No       | AWS region                                                                                                                                                                          |
| `environments[$env].s3.access_key_id`       | `<empty>` (*string*)                      | __Yes__  | AWS Access Key                                                                                                                                                                      |
| `environments[$env].s3.secret_access_key`   | `<empty>` (*string*)                      | __Yes__  | AWS Secret Access Key                                                                                                                                                               |
| `environments[$env].s3.endpoint`            | `<empty>` (*string*)                      | No       | Custom AWS S3 endpoint. This must be used for Minio buckets or if you are using a local S3 instance.                                                                                |
| `environments[$env].s3.force_path_style`    | `false` (*bool*)                          | No       | Use path-style for that S3 bucket. This is deprecated by AWS S3 and should be probably `false`.                                                                                     |
| `environments[$env].s3.insecure`            | `false` (*bool*)                          | No       | Whether to use HTTP or HTTPS to access the S3 endpoint. This is intended primarily for accessing a local S3 endpoint like MinIO.                                                    |
| `environments[$env].s3.tls_skip_verify`     | `false` (*bool*)                          | No       | Whether to verify the X.509 certificated presented by the S3 endpoint. This is intended primarily for accessing a local S3 endpoint which uses a self signed certificate            |
| `environments[$env].s3.token`               | `<empty>` (*string*)                      | No       | AWS STS session token. You can leave that empty.                                                                                                                                    |
| `environments[$env].s3.auto_discover_disks` | `true` (*bool*)                           | No       | Automatically iterate over each S3 bucket.                                                                                                                                          |
| `environments[$env].disks.include`          | `<empty>` (*list of strings*)             | No       | Only include the disks with the given name; case-sensitive; regular expressions are supported.                                                                                      | 
| `environments[$env].disks.exclude`          | `<empty>` (*list of strings*)             | No       | Only include the disks with the given name; case-sensitive; regular expressions are supported.                                                                                      | 
| `environments[$env].disks.all_others`       | `include` (*one of `include`, `exclude`*) | No       | Behaviour for disks which are not explicitly included or excluded.                                                                                                                  |

## `disks`

The `disks` section allows you to include or exclude disks which have been found during the discovery phase.

- A disk is included if it is defined in `disks.include` or one of those regular expressions matches
- A disk is excluded if it is defined in `disks.exclude` or one of those regular expressions matches
- If a disk is defined in `disks.include` __and__ `disks.exclude`, the behaviour of `disks.all_others` is
  applied (`include` by default)
- If a disk is not explicitly defined in `disks.include` or `disks.exclude`, the behaviour of `disks.all_others` is
  applied (`include` by default)
- If a disk contains a [`.backmonignore`](storage#ignoring-disks) marker file of the root of the disk, the disk is
  excluded - no matter of any `disks.*` configurations.

To use a regular expression in `disks.include` or `disks.exclude`, you have to put a slash (`/`) before and after the
regular expression:

```yaml
disks:
  include:
    - "/(\d{8})\-etcd/"
  exclude:
    - "/regular_ex.*ssions_are_supported/"
```

:::info
If you have set `environments[$env].s3.auto_discover_disks` to `false`, only the `disks.include` configuration parameter
makes any sense.
:::
