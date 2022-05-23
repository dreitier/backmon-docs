# Overview
On the *cloudmon* host you have to set up a *cloudmon* configuration file. In it, you specify which S3 buckets have to be monitored.
*cloudmon* inspects each configured S3 bucket. If a [backup definition](../backup-definition) is found in there, it is used.

cloudmon tries to locate the configuration file `config.yaml` in the following directories (priority in the defined order):

- local directory
- `${HOME}/.cloudmon`
- `/etc/cloudmon`

In the configuration file, you can use environment placeholders `${VAR}`. Those placeholders will be replaced during the startup of *cloudmon* with the corresponding environment variables. You have to place the configuration file at `/etc/cloudmon/config-raw.yaml`.