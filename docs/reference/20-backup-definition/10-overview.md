# Overview

The backup definition is a YAML file that describes the structure of your backups.
In it, you provide the information that *cloudmon* needs to collect metric data, purge files, and offer file downloads.

*cloudmon* looks for the backup definition file called `backup_definitions.yaml` at the root directory of your S3 bucket. 
You can overwrite the file naming in the [cloudmon configuration file](../10-cloudmon-configuration/overview.md).

## Backup definition file `backup_definitions.yaml`

| Parameter | Default | Required | Description |
| --- | --- | --- | --- |
| `directories[]` | `<empty>` (*string*) | __Yes__ | Directory inside the disk, relative to the `backup_definition.yaml`. |
| `directories[].alias` | `<name of directory>` (*string*) | No | Used alias when exporting metrics. |
| `directories[].fuse[]` | `<empty>` (*list of wildcard strings*) | No | Group files together by that substitutions. |
| `directories[].fuse[]` | `<empty>` (*list of wildcard strings*) | No | Group files together by that substitutions. |
| `directories[].defaults` | `<empty>` (*default configuration for directories[].files[]*) | No | Is applied for each of the `directories[].files[]`. Each `files[]` entry can overwrite the defaults. |
| `directories[].defaults.schedule` | `<empty>` (*valid cron definition*) | No | Cron definition to check for files |
| `directories[].defaults.sort` | `<empty>` (*mtime|atime*) | No | NOT YET. Sorting algorithm |
| `directories[].defaults.purge` | `<empty>` (*bool*) | No | Purges each file which does not match `retention-age` or `retention-count`. If `purge` is set to `true`, without having an explicit retention, a limit von `14` days is assumed. |
| `directories[].defaults.retention-count` | `<empty>` (*int*) | No | Keep max number of files |
| `directories[].defaults.retention-age` | `<empty>` (*duration*) | No | Keep files newer than that |
| `directories[].files[]` | `<empty>` (*map*) | __Yes__ | File pattern to check for. You can use the same parameters as in the `.defaults` section. |
| `directories[].files[].alias` | `<name of file>` (*string*) | No | Used alias when exporting metrics. |

### Sample `backup_definitions.yaml` file

```yaml
'./databases':
  alias: DB
  fuse:
    - '%Y'
    - '%M'
    - '%D'
  defaults:
    schedule: 30 0 * * *
    sort: mtime
    purge: true
    retention-count: 10
    retention-age: 7d
  files:
    'postgres-%Y%M%D.gz':
      alias: PostgeSQL
      schedule: 0 1 * * *
    '%Y%M%D_mysql_%I.gz':
      alias: MySQL
```


## directory
A backup definition

### pattern

#### pattern variable
A variable can be put on a *directory* pattern by using two curly braces (e.g. `{{variable}}`). For variable names only characters `0-9`, `A-Z`, `a-z`, and `_` are allowed.
Variables can be referenced in a *file* pattern with help of `${variable}`.

#### pattern substitution

See [Substitutions](substitutions).

### fuse
`fuse` is the replacement for the original `grouping` field. In contract, `fuse` has to be defined on a per-directory level.

If no sorting behaviour is defined, the sorting algorithm `hybrid` is used. `hybrid` uses substituion-based date fields and fills all missing information with help of `mtime` of the file.
