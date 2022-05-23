# Overview

The backup definition is a YAML file that describes the structure of your backups.
In it, you provide the information that *cloudmon* needs to collect metric data, purge files, and offer file downloads.

*cloudmon* looks for the backup definition file called `backup-definition.yaml` at the root directory of your S3 bucket. 
You can overwrite the file naming in the [cloudmon configuration file](../10-cloudmon-configuration/overview.md).

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

### alias

Can be used on a `directory` and a `file`. The alias is used when exporting metrics through the HTTP API.

### fuse
`fuse` is the replacement for the original `grouping` field. In contract, `fuse` has to be defined on a per-directory level.

### defaults

### files

## file

### pattern

#### pattern variable

#### pattern substitution

### alias

### schedule

### sort

If no sorting behaviour is defined, the sorting algorithm `hybrid` is used. `hybrid` uses substituion-based date fields and fills all missing information with help of `mtime` of the file.

### purge
If `purge` is set to `true`, without having an explicit retention, a limit von `14` days is assumed.

### retention-count

### retention-age
