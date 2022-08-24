---
slug: '/'
sidebar_position: 1
---

# Introduction

*backmon* monitors backup files inside filesystems and object storages.
Each backup file definition can be exported into a Prometheus-compatible format. You can use tools like [Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/) to notify the SRE team if a backup is missing or some threshold has been missed. A threshold could be e.g. that the filesize of the backup file is too small.

## Goals
The goals of *backmon* are:

- Monitoring and supervising existing backup files: inspecting, overseeing, handling, controlling
- Overseeing backup processes
- Collecting metric data about backup files

## Features
- Export Prometheus metrics
- Purging outdated backup files (erase, remove, delete)
- Centralized download of backup files