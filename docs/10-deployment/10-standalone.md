# Standalone

*backmon* is a single binary without dependencies. You can run it as container or directly on a host.

## Container image

Multi-arch images (`linux/amd64`, `linux/arm64`) are published to two registries with the same content and tags:

| Registry | Image |
|---|---|
| [Docker Hub](https://hub.docker.com/r/dreitier/backmon) | `dreitier/backmon` |
| [GitHub Container Registry](https://github.com/dreitier/backmon/pkgs/container/backmon) | `ghcr.io/dreitier/backmon` |

Each release is tagged with `x.y.z`, `x.y`, `x` and `latest`, e.g. `5.0.1`, `5.0` and `5`.

```bash
$ docker run -p 8000:8000 \
    -v "$PWD/config.yaml:/etc/backmon/config.yaml" \
    ghcr.io/dreitier/backmon:5
```

- The [configuration file](../20-reference/10-backmon-configuration/01-overview.md) is expected at
  `/etc/backmon/config.yaml`; the published port has to match its `port`.
- Placeholders like `__${VAR}__` in the configuration are replaced with environment variables of the container
  (`docker run -e VAR=...`).
- The image is based on `distroless/static` and runs as the non-root user `65532`. If *backmon* has to read backup
  files from a mounted directory which that user can't access, set the user accordingly, e.g. with `--user`.

The images are signed with [Sigstore](https://www.sigstore.dev/) and come with build provenance attestations; see
[Verifying releases](https://github.com/dreitier/backmon#verifying-releases).

## Binaries

Binaries for Linux, macOS and Windows (amd64 and arm64) are attached to each
[GitHub release](https://github.com/dreitier/backmon/releases), together with `checksums.txt` and SBOMs.

```bash
$ ./backmon
```

*backmon* looks for `config.yaml` in the current directory, in `${HOME}/.backmon` and in `/etc/backmon`. In a
terminal it runs interactively (`r` rescans the disks, `q` quits); start it with `-background` to disable that, e.g.
as a service.

## Kubernetes

Use the [Helm chart](20-helm-chart.md).
