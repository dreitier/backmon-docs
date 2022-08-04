# Helm chart

We provide a [Helm chart for cloudmon](https://github.com/dreitier/helm-charts/).

You can either use that repository and install the helm chart with

```bash
$ git clone https://github.com/dreitier/helm-charts/`
$ cd helm-charts/charts/cloudmon
$ helm install cloudmon
```

or add the repository:

```bash
$ helm repo add dreitier https://dreitier.github.io/helm-charts/
$ helm repo update
$ helm install dreitier/cloudmon
```