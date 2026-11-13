# API

Besides the [metrics](metrics.md), *backmon* serves a read-only API below `/api`. With it you can browse the monitored
disks and download the latest backup of a file.

:::info

This page describes the API of *backmon* 6.0.0 and later. Before, the API responded with plain JSON arrays of names
and without links.

:::

## Authentication

The API is protected by HTTP Basic Authentication if `http.basic_auth` is
[configured](10-backmon-configuration/01-overview.md#available-configuration-keys). Without it, anyone who can reach
*backmon* can use the API. `/metrics` is never protected.

## Hypermedia

The API follows [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS): each response links to the related resources.
A client only has to know the entry point `/api` and follows the links from there instead of building URLs itself.

The responses are [HAL](https://datatracker.ietf.org/doc/html/draft-kelly-json-hal) documents with the content type
`application/hal+json`:

- `_links` contains the links of the resource. Each link is an object with the path in `href`.
- `_embedded` contains the children of the resource. Each child has a `name` and its own `_links`.

| Link       | Present on                          | Target                                    |
|------------|-------------------------------------|-------------------------------------------|
| `self`     | each resource and embedded resource | The resource itself                       |
| `up`       | each resource except `/api`         | The parent of the resource                |
| `download` | embedded variants of a file         | The latest backup file of the variant     |

Names are percent-encoded in links. The name of a disk of the
[local filesystem](10-backmon-configuration/10-storage/10-local-filesystem.md) is its path, so `/var/backups` becomes
`%2Fvar%2Fbackups`.

## Resources

| Resource                  | Path                                       | Embedded resources |
|---------------------------|--------------------------------------------|--------------------|
| [Entry point](#entry-point) | `/api`                                   | `disks`            |
| [Disk](#disk)             | `/api/{disk}`                              | `directories`      |
| [Directory](#directory)   | `/api/{disk}/{directory}`                  | `files`            |
| [File](#file)             | `/api/{disk}/{directory}/{file}`           | `variants`         |
| [Download](#download)     | `/api/{disk}/{directory}/{file}/{variant}` | -                  |

Directories and files are addressed by their `alias` of the
[backup definition](20-backup-definition/10-overview.md). All resources only support `GET`. `/` redirects to `/api`.

### Entry point

`/api` lists all disks, sorted by name.

```bash
curl -u my_username:my_password http://localhost:8080/api
```

```json
{
  "_links": {
    "self": { "href": "/api" }
  },
  "_embedded": {
    "disks": [
      {
        "name": "my-bucket",
        "_links": { "self": { "href": "/api/my-bucket" } }
      }
    ]
  }
}
```

### Disk

`/api/{disk}` shows a disk and the directories of its backup definition.

| Field      | Description                                                                                        |
|------------|----------------------------------------------------------------------------------------------------|
| `name`     | Name of the disk                                                                                   |
| `quota`    | Quota of the disk in bytes; `0` if the backup definition has none                                  |
| `timezone` | Time zone of the backup definition; missing if it has none                                         |

```json
{
  "name": "my-bucket",
  "quota": 0,
  "timezone": "Europe/Berlin",
  "_links": {
    "self": { "href": "/api/my-bucket" },
    "up": { "href": "/api" }
  },
  "_embedded": {
    "directories": [
      {
        "name": "my-backups",
        "_links": { "self": { "href": "/api/my-bucket/my-backups" } }
      }
    ]
  }
}
```

### Directory

`/api/{disk}/{directory}` shows a directory and the files which are defined for it.

```json
{
  "name": "my-backups",
  "_links": {
    "self": { "href": "/api/my-bucket/my-backups" },
    "up": { "href": "/api/my-bucket" }
  },
  "_embedded": {
    "files": [
      {
        "name": "pgdump",
        "_links": { "self": { "href": "/api/my-bucket/my-backups/pgdump" } }
      }
    ]
  }
}
```

### File

`/api/{disk}/{directory}/{file}` shows a file and its variants, sorted by name. The variants are the groups of backup
files which have been found for the file; they are the values of the `group` label of the [metrics](metrics.md).

```json
{
  "name": "pgdump",
  "_links": {
    "self": { "href": "/api/my-bucket/my-backups/pgdump" },
    "up": { "href": "/api/my-bucket/my-backups" }
  },
  "_embedded": {
    "variants": [
      {
        "name": "backups",
        "_links": { "download": { "href": "/api/my-bucket/my-backups/pgdump/backups" } }
      }
    ]
  }
}
```

The `download` link is only present if `downloads.enabled` is set. Without it, a variant has no `_links`.

### Download

`/api/{disk}/{directory}/{file}/{variant}` responds with the content of the latest backup file of the variant as
attachment. Which file is the latest one depends on the
[`sort`](20-backup-definition/10-overview.md#directoriesdirectoryfilesfilesort) key of the file.

Downloads are disabled by default and have to be enabled with `downloads.enabled` in the
[configuration](10-backmon-configuration/01-overview.md#available-configuration-keys).

## Errors

Errors are reported as plain text with the matching HTTP status code, e.g. `404` for an unknown disk, directory, file
or variant.

## Running behind a reverse proxy

The links of the responses are absolute paths like `/api/my-bucket`. If a reverse proxy serves *backmon* below a path
prefix and strips it before forwarding the request, e.g. `https://example.com/backmon/api` is forwarded as `/api`,
the proxy has to send the prefix in the `X-Forwarded-Prefix` header:

```
X-Forwarded-Prefix: /backmon
```

The links and the redirect from `/` to `/api` then start with the prefix, e.g. `/backmon/api/my-bucket`.

| Reverse proxy | Configuration                                                                                   |
|---------------|-------------------------------------------------------------------------------------------------|
| Traefik       | The `StripPrefix` middleware sets the header on its own.                                        |
| ingress-nginx | Set the annotation `nginx.ingress.kubernetes.io/x-forwarded-prefix: "/backmon"` on the Ingress. |
| nginx         | `proxy_set_header X-Forwarded-Prefix /backmon;`                                                 |

Only a plain absolute path is accepted as prefix; any other value is ignored.
