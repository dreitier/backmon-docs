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

On AWS, no credentials have to be stored at all, if an IAM role is bound to the service account of *backmon* with
`serviceAccount.annotations`, see
[IAM roles for service accounts (IRSA)](../20-reference/10-backmon-configuration/10-storage/20-aws-s3.md#41-iam-roles-for-service-accounts-irsa).

If you want to manage the configuration file yourself, set `backmon.config.enabled` to `false` and mount your own file
at `/etc/backmon/config.yaml` with `extraVolumes` and `extraVolumeMounts`.

### Reloading the configuration

*backmon* reads its configuration file and the environment variables for the placeholders when it starts. The chart
therefore restarts the pod instead of [reloading the configuration](../20-reference/10-backmon-configuration/01-overview.md#reloading-the-configuration)
in place:

- A changed `backmon.config.content` rolls the deployment on `helm upgrade`, as the pod is annotated with a checksum
  of the configuration.
- Secrets and configmaps which are not rendered by the chart (`extraEnvFrom`, `extraEnv`, `extraVolumes`) can change
  without Helm noticing, e.g. if they are managed by External Secrets. Set `reloader.enabled` to `true` to have
  [Stakater Reloader](https://github.com/stakater/Reloader) restart the pod whenever a secret or configmap referenced
  by it changes. Reloader has to be installed in the cluster.

```yaml
reloader:
  enabled: true
```

For storage-specific examples see [AWS S3](../20-reference/10-backmon-configuration/10-storage/20-aws-s3.md#32-when-using-helm)
and [Google Cloud Storage](../20-reference/10-backmon-configuration/10-storage/30-google-cloud-storage.md#32-when-using-helm).
