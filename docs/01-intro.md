---
slug: '/'
sidebar_position: 1
---

# Introduction

*cloudmon* monitors backup file inside an S3 or Minio bucket.
Each backup file definition can be exported in an Prometheus-compatible format. You can use tools like AlertManager to notify the SRE team if a backup is missing or some threshold has been missed.

## Goals
The goals of *cloudmon* are:

- Monitoring and supervising existing backup files (inspecting, overseeing, handling, controlling)
- Overseeing backup processes
- Collecting metric data about backups

## Features
- Prometheus metrics
- Purging outdated backup files (erase, remove, delete)
- Centralized backup downloads