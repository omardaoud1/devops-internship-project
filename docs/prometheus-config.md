# Prometheus Configuration

Prometheus is an open-source monitoring and alerting toolkit designed for reliability and simplicity.  
In this project, Prometheus is responsible for collecting metrics from various services, storing them in a time-series database, and triggering alerts when certain conditions are met.

It scrapes data from:
- The Node.js backend (custom metrics)
- Node Exporter (host metrics)
- Alertmanager (for managing and routing alerts)

###  Full Config

```yaml
rule_files:
  - "alert.rules.yml"
  - "test-alert.rules.yml"

global:
  scrape_interval: 15s

alerting:
  alertmanagers:
    - static_configs:
        - targets: ["alertmanager:9093"]

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
  - job_name: 'backend'
    static_configs:
      - targets: ['backend:5000']
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

------------------------------------------------------------------------------------------


### Explanation of each section :
***rule_files:Specifies external files that contain alert rules. In this case:

        ***alert.rules.yml: contains main production alerts.
        ***test-alert.rules.yml: optional/test alerts.

***global.scrape_interval: 15s:  Prometheus will scrape all targets every 15 seconds.

***alerting.alertmanagers.targets: 
Defines where Prometheus should send alerts. In this case, it's sending alerts to the Alertmanager running at alertmanager:9093.

***scrape_configs:   Defines the list of monitoring targets. Each job_name represents a group of similar targets.

***job_name: 'prometheus': Prometheus monitors itself on localhost:9090.

***job_name: 'backend': The Node.js backend is scraped on port 5000, assuming it exposes metrics on /metrics.

***job_name: 'node-exporter': Scrapes system-level metrics from the container running Node Exporter.

----------------------------------------------------------------------------------------------

### Scrape Targets Summary

Prometheus scrapes metrics from the following targets:

| Job Name        | Target               | Port   | Description                                      |
|------------------|----------------------|--------|--------------------------------------------------|
| prometheus       | localhost            | 9090   | Prometheus monitors itself                      |
| backend          | backend              | 5000   | Node.js backend exposing custom metrics         |
| node-exporter    | node-exporter        | 9100   | System-level host metrics via Node Exporter     |
| alertmanager     | alertmanager         | 9093   | (Used in alerting section, not scraped)         |


------------------------------------------------------------------------------------------------


### Alert Rules

Prometheus uses alert rules defined in `alert.rules.yml` to detect system and application issues in real time.  
These alerts are evaluated based on PromQL expressions and sent to Alertmanager when triggered.

### `alert.rules.yml`

```yaml
groups:
  - name: system-alerts
    rules:
      - alert: HighCPUUsage
        expr: max by(instance, cpu)(100 - rate(node_cpu_seconds_total{mode="idle"}[2m]) * 100) > 20
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: "High CPU usage detected"
          description: "CPU usage is above 80% on at least one core for more than 1 minute."

      - alert: HighMemoryUsage
        expr: (node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes > 0.8
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: "High Memory usage detected"
          description: "Memory usage is above 80% for more than 1 minute."

      - alert: HighHTTP500Errors
        expr: rate(http_requests_total{status="500"}[1m]) > 0
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: "HTTP 500 errors detected"
          description: "The app has returned HTTP 500 errors in the last minute."

      - alert: AppDown
        expr: up{job="backend"} == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "app is down"
          description: "Prometheus is not able to scrape metrics from backend."


---------------------------------------------------------------------

###Explanation of Each Rule

HighCPUUsage:
    Triggers if CPU usage exceeds 80% on any core for more than 1 minute.

HighMemoryUsage:
    Triggers if used memory exceeds 80% of total memory for over 1 minute.

HighHTTP500Errors:
    Triggers if the app returns any HTTP 500 errors in the last minute.

AppDown:
    Triggers when Prometheus cannot scrape the backend (i.e. the backend is down).

Each rule has:

    expr: A PromQL condition to evaluate

    for: The duration it must remain true before firing

    labels: Tags like severity used by Alertmanager

    annotations: Human-readable alert message details

--------------------------------------------------------------------------

### Accessing Prometheus

- Prometheus UI is available at:  
  **http://localhost:9090**

Here, you can:
- Explore metrics using PromQL
- Test and debug alert rules
- View active alerts and targets

### Reloading Prometheus Configuration

If you make changes to `prometheus.yml` or alert rule files:

1. Restart the Prometheus container:
   ```bash
   docker-compose restart prometheus

