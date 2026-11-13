# Google Cloud Storage

If you are configuring a Google Cloud Storage (GCS) environment, *backmon* automatically creates a disk for each bucket
of your Google Cloud project. Let's suppose you have the following `config.yaml`:

```yaml
environments:
  gcs_backup:
    gcs:
      project_id: my-gcp-project
```

For a full list of configuration option for the GCS provider
see [`the corresponding section`](../01-overview.md#available-configuration-keys)

Your Google Cloud project contains the following buckets:

- `bucket-1`
- `bucket-2`
- `bucket-3`

Each of those buckets is considered as a disk. You have to put a `backup_definitions.yaml`
at `gs://bucket-1/backup_definitions.yaml`, `gs://bucket-2/backup_definitions.yaml`
and `gs://bucket-3/backup_definitions.yaml`.

:::info
Each Cloud Storage bucket is a *backmon disk*.
:::

- If you want to ignore a bucket, either use the `disks.exclude` configuration key or the `.backmonignore` marker file.
- If *backmon* does not have the `storage.objects.list` permission for one of the buckets, the bucket is ignored.
- The creation time of an object is used as its timestamp, unless a [`.stat` file](../../20-backup-definition/25-file-dates.md#stat--dotstat-files)
  is present. Changes of the object's metadata, e.g. of its storage class, do not make a backup look newer.
- Empty objects whose name ends with a slash (`backups/`), like the Cloud Console creates them for folders, are ignored.
- Objects are downloaded as they are stored: objects with `Content-Encoding: gzip` are not decompressed.

## 1. Authentication

*backmon* authenticates with one of the following methods:

| Method                                | Configuration                                                                                                                                                                                                                              |
|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Application Default Credentials (ADC) | Default, if neither `credentials_file` nor `credentials_json` is set. Covers Workload Identity Federation for GKE, the attached service account of Compute Engine or Cloud Run and the `GOOGLE_APPLICATION_CREDENTIALS` environment variable. |
| Service account key file              | `gcs.credentials_file` contains the path to the JSON key file of a service account.                                                                                                                                                         |
| Service account key                   | `gcs.credentials_json` contains the content of the JSON key file, usually through a placeholder like `__${GCS_SERVICE_ACCOUNT_KEY}__`.                                                                                                      |
| Anonymous                             | `gcs.anonymous: true` sends requests without authentication, for public buckets and emulators.                                                                                                                                              |

:::info
`credentials_file` and `credentials_json` only accept keys of service accounts. Other credential configurations, like the
ones for Workload Identity Federation outside of Google Cloud (`external_account`), have to be provided as Application
Default Credentials through the `GOOGLE_APPLICATION_CREDENTIALS` environment variable.
:::

Prefer Application Default Credentials where possible, as no long-lived key has to be stored. To create a dedicated
service account and a key for it:

```bash
gcloud iam service-accounts create backmon --project my-gcp-project
gcloud iam service-accounts keys create gcs-service-account.json \
  --iam-account backmon@my-gcp-project.iam.gserviceaccount.com
```

## 2. Set up permissions

| IAM permission           | Required for                                                                                                                                                 |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `storage.buckets.list`   | auto-discovery of the buckets in the project (`auto_discover_disks: true`, the default)                                                                       |
| `storage.objects.list`   | listing the backup files of a bucket                                                                                                                         |
| `storage.objects.get`    | downloading the `backup_definitions.yaml`, the `.backmonignore` marker file, `.stat` files, and backup files if *backmon* runs with `downloads.enabled=true` |
| `storage.objects.delete` | purging, if `backup_definitions.yaml` contains `purge=true`                                                                                                  |

### 2.1. Using auto-discovery

By default, *backmon* scans all buckets of the project given in `gcs.project_id`. If `project_id` is not set, the
project of the credentials is used; with credentials that do not belong to a project, `project_id` is required.

Listing the buckets requires the `storage.buckets.list` permission in the project, e.g. through a custom role. Access
to the objects can be granted for each bucket with the predefined role *Storage Object Viewer*
(`roles/storage.objectViewer`), or with *Storage Object User* (`roles/storage.objectUser`) if *backmon* has to purge
backups:

```bash
gcloud iam roles create backmonBucketLister --project my-gcp-project \
  --permissions storage.buckets.list
gcloud projects add-iam-policy-binding my-gcp-project \
  --member serviceAccount:backmon@my-gcp-project.iam.gserviceaccount.com \
  --role projects/my-gcp-project/roles/backmonBucketLister

gcloud storage buckets add-iam-policy-binding gs://bucket-1 \
  --member serviceAccount:backmon@my-gcp-project.iam.gserviceaccount.com \
  --role roles/storage.objectViewer
```

### 2.2. Explicitly white-listing buckets

If *backmon* must not list the buckets of the project, or if the buckets belong to different projects, disable the
auto-discovery and include each bucket:

```yaml
environments:
  gcs_prod:
    gcs:
      # set `auto_discover_disks` to false
      auto_discover_disks: false
    disks:
      include:
        - bucket-1
        - bucket-2
        - bucket-3
```

With that configuration, only bucket `bucket-1`, `bucket-2` and `bucket-3` are included and neither `project_id` nor the
`storage.buckets.list` permission is required.

:::caution
With whitelisting buckets, you have to specify the full name of the bucket. Using regular expressions is __not__
possible.
:::

## 3. Update your `backmon` configuration

### 3.1. When using `config.yaml`

```yaml
environments:
  my_gcs_environment:
    gcs:
      project_id: my-gcp-project
      credentials_file: /etc/backmon/gcs-service-account.json
```

### 3.2. When using Helm

In your `values.yaml`, pass the service account key through a secret:

```yaml
backmon:
  environments:
    gcs_prod:
      gcs:
        project_id: my-gcp-project
        # the ${BACKMON ... } variable references the secret below
        credentials_json: __${BACKMON_GCS_PROD_KEY}__
  secrets:
    - key: BACKMON_GCS_PROD_KEY
      # content of the service account key file
      value: ${GCS_SERVICE_ACCOUNT_KEY}
```

On GKE with Workload Identity Federation, no key is needed: grant the permissions to the Kubernetes service account of
*backmon* and leave out `credentials_json`.

## Using the S3-compatible API instead

Cloud Storage also offers an [S3-compatible XML API](https://cloud.google.com/storage/docs/interoperability) with HMAC
keys. It can be used with the [S3 provider](20-aws-s3.md) and the endpoint `https://storage.googleapis.com`; the `gcs`
provider is preferable, as it supports Google's authentication methods.
