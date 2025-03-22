# Helm chart

We provide a [Helm chart for backmon](https://github.com/dreitier/helm-charts/).

You can either use that repository and install the helm chart with

```bash
$ git clone https://github.com/dreitier/helm-charts/
$ cd helm-charts/charts/backmon
$ helm install backmon
```

or add the repository:

```bash
$ helm repo add dreitier https://dreitier.github.io/helm-charts/
$ helm repo update
$ helm install dreitier/backmon
```