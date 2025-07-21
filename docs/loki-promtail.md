# Loki + Promtail Setup

This document explains how Loki and Promtail were installed and configured in the monitoring stack. It also includes sample log queries and examples from the Doctor app.


## What are Loki and Promtail?

**Loki** is a log aggregation system developed by Grafana Labs. It is designed to store and query logs efficiently, similar to how Prometheus handles metrics. Unlike traditional logging solutions, Loki only indexes metadata (labels), making it lightweight and cost-effective.

**Promtail** is an agent that collects logs from your applications or host system and sends them to Loki. It is responsible for:
- Reading log files or system logs.
- Adding labels (metadata) to logs.
- Pushing logs to the Loki server for storage and querying in Grafana.


## Setup Overview

Loki and Promtail were added to the monitoring stack using **Docker Compose**.  
The setup consists of:
- **Loki**: Runs as a service to store and index logs.
- **Promtail**: Runs as a log collector, reading logs from the Doctor app containers and forwarding them to Loki.

The main files used in this setup are:
- `docker-compose.yml` – defines the Loki and Promtail services.
- `loki-config.yml` – configuration for Loki.
- `promtail-config.yml` – configuration for Promtail.

In the next sections, we will include the exact configurations and explain each part.

-----------------------------------------------------------------------------------------
## Loki Service Configuration

The Loki service is defined in the `docker-compose.yml` file as follows:

```yaml
loki:
    image: grafana/loki:2.9.4
    container_name: loki  
    ports:
      - "3100:3100"
    command: -config.file=/etc/loki/loki.yml
    volumes:
      - ./observability/loki/loki.yml:/etc/loki/loki.yml 
      - ./observability/loki/data:/loki
      - ./observability/loki/wal:/wal


Explanation:

    image: Uses the official grafana/loki image (version 2.9.4).

    ports: Exposes Loki’s HTTP API on port 3100.

    command: Specifies the Loki configuration file.

    volumes:

        Mounts ./observability/loki/loki.yml into the container.

        Stores persistent data in ./observability/loki/data and WAL (Write-Ahead Log) in ./observability/loki/wal.


-----------------------------------------------------------------------------------
## Promtail Service Configuration

The Promtail service is defined in the `docker-compose.yml` file as follows:

```yaml
promtail:
    image: grafana/promtail:2.9.4
    container_name: promtail
    volumes:
      - ./observability/promtail/promtail.yml:/etc/promtail/promtail.yml
      - /var/lib/docker/containers:/var/lib/docker/containers:ro
      - /var/run/docker.sock:/var/run/docker.sock
    command: -config.file=/etc/promtail/promtail.yml



Explanation:

    image: Uses the official grafana/promtail image (version 2.9.4).

    volumes:

        Mounts the custom Promtail config file (promtail.yml).

        Reads container logs directly from /var/lib/docker/containers (read-only).

        Uses the Docker socket to gather container information.

    command: Points Promtail to use the mounted configuration file.


----------------------------------------------------------------------------------------
## Loki Configuration File (`loki.yml`)

The `loki.yml` file configures how Loki operates and stores logs. Below is the main content used:

```yaml
auth_enabled: false

server:
  http_listen_port: 3100
  grpc_listen_port: 9095

ingester:
  lifecycler:
    address: 127.0.0.1
    ring:
      kvstore:
        store: inmemory
      replication_factor: 1
  chunk_idle_period: 5m
  chunk_retain_period: 30s
  max_transfer_retries: 0

schema_config:
  configs:
    - from: 2020-10-24
      store: boltdb-shipper
      object_store: filesystem
      schema: v11
      index:
        prefix: index_
        period: 24h

compactor:
  working_directory: /loki/compactor
  shared_store: filesystem

storage_config:
  boltdb_shipper:
    active_index_directory: /loki/index
    cache_location: /loki/cache
    shared_store: filesystem
  filesystem:
    directory: /loki/chunks

limits_config:
  max_streams_per_user: 0

chunk_store_config:
  max_look_back_period: 0s

table_manager:
  retention_deletes_enabled: false
  retention_period: 0s




Explanation:

    auth_enabled: Disabled authentication for simplicity.

    server: Sets HTTP and gRPC ports Loki listens on.

    ingester: Handles ingestion lifecycle and data retention timing.

    schema_config: Defines storage schema; using boltdb-shipper with filesystem as the object store.

    compactor: Compacts data to reduce storage usage.

    storage_config: Defines where Loki stores indexes and chunks on the filesystem.

    limits_config: Limits on streams per user; here unlimited (0).

    chunk_store_config: Controls how far back Loki looks for chunks.

    table_manager: Manages retention settings, disabled here (no deletion).



--------------------------------------------------------------------------------------



server:
  http_listen_port: 9080
  grpc_listen_port: 0

positions:
  filename: /tmp/positions.yaml

clients:
  - url: http://loki:3100/loki/api/v1/push  

scrape_configs:
  - job_name: varlogs
    static_configs:
      - targets:
          - localhost
        labels:
          job: varlogs
          __path__: /var/lib/docker/containers/*/*.log
    pipeline_stages:
      - json:
          expressions:
            log: log
      - regex:
          source: log
          expression: 'level=(?P<level>\w+)'
      - regex:
          source: log
          expression: 'msg="(?P<msg>[^"]+)"'
      - labels:
          level:
          msg:






Explanation:

    server: Promtail listens on HTTP port 9080, with gRPC disabled (0).

    positions: Tracks the last read position in logs, stored in /tmp/positions.yaml.

    clients: Specifies the Loki endpoint where Promtail sends logs.

    scrape_configs: Defines what logs to scrape:

        job_name: A label to group logs.

        static_configs: Targets the Docker container log files (/var/lib/docker/containers/*/*.log).

        labels: Assigns metadata labels, including job.

    pipeline_stages: Processes log entries before sending:

        Parses the log field as JSON.

        Extracts the level and msg fields using regex.

        Converts these into labels for easier querying in Loki/Grafana.



------------------------------------------------------------------------------
## Sample Logs and Queries

### Sample Log Entry

Here is an example of a log entry collected from the Doctor app:

    level=info msg="User login successful" userId=1234 requestId=abcd-efgh

To find all logs with error level:

    ```logql
    {job="varlogs", level="error"}

To search for logs containing a specific message:
    {job="varlogs"} |= "User login successful"


Viewing Logs in Grafana

    Open your Grafana dashboard.

    Select the Loki data source.

    Enter one of the above queries in the Explore section.

    Logs matching the query will appear with labels for easy filtering.
