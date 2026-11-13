# Helm chart

We provide a [Helm chart for backmon](https://github.com/dreitier/helm-charts/tree/main/charts/backmon). It requires
Kubernetes 1.19+ and Helm 3; see the chart's
[README](https://github.com/dreitier/helm-charts/tree/main/charts/backmon#prerequisites) for all prerequisites.

## Installation

The chart is published in two places with the same versions:

| Source | Location |
|---|---|
| Helm repository | `https://dreitier.github.io/helm-charts/` |
| OCI registry (GitHub Container Registry) | `oci://ghcr.io/dreitier/charts/backmon` |

From the Helm repository:

```bash
$ helm repo add dreitier https://dreitier.github.io/helm-charts/
$ helm repo update
$ helm install backmon dreitier/backmon
```

From the OCI registry, without `helm repo add` (Helm 3.8+):

```bash
$ helm show values oci://ghcr.io/dreitier/charts/backmon
$ helm install backmon oci://ghcr.io/dreitier/charts/backmon --version <version>
```

### Image registry

By default, the chart pulls the *backmon* image from Docker Hub (`dreitier/backmon`). The same images are published to
the GitHub Container Registry, which you can use e.g. to avoid Docker Hub's rate limits:

```yaml
image:
  repository: ghcr.io/dreitier/backmon
```

## Configuration

The [configuration file](../20-reference/10-backmon-configuration/01-overview.md) of *backmon* is passed as a whole
in `backmon.config.content`. The chart stores it in a Kubernetes secret and mounts it at `/etc/backmon/config.yaml`:

```yaml
backmon:
  config:
    content: |-
      port: 8000
      log_level: info
      update_interval: 15m
      downloads:
        enabled: false
      environments:
        aws_prod:
          s3:
            access_key_id: __${BACKMON_AWS_PROD_ACCESS_KEY_ID}__
            secret_access_key: __${BACKMON_AWS_PROD_SECRET_ACCESS_KEY}__

# each key of these secrets becomes an environment variable of the backmon container
extraEnvFrom:
  - name: backmon-aws
```

:::caution
Keep `port: 8000`: the service, the probes and the ServiceMonitor of the chart use that port.
:::

To keep credentials out of your `values.yaml`, use placeholders like `__${VAR}__` in the configuration. They are
replaced with environment variables when *backmon* starts. The environment variables can be provided with

| Value               | Description                                                                              |
|---------------------|------------------------------------------------------------------------------------------|
| `extraEnvFrom`      | List of existing secrets (`name`); each key of a secret becomes an environment variable   |
| `extraEnv`          | List of environment variables, as in the `env` section of a container                    |
| `extraVolumes`      | Additional volumes of the pod, e.g. a secret with a key file or a volume with backups    |
| `extraVolumeMounts` | Mounts of the additional volumes into the *backmon* container                             |

If you want to manage the configuration file yourself, set `backmon.config.enabled` to `false` and mount your own file
at `/etc/backmon/config.yaml` with `extraVolumes` and `extraVolumeMounts`.

For storage-specific examples see [AWS S3](../20-reference/10-backmon-configuration/10-storage/20-aws-s3.md#32-when-using-helm)
and [Google Cloud Storage](../20-reference/10-backmon-configuration/10-storage/30-google-cloud-storage.md#32-when-using-helm).
