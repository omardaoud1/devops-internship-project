# Grafana Dashboards Documentation

This document summarizes the key Grafana dashboards used for monitoring the Doctor app infrastructure and services.

---

## System CPU Usage Panel

This panel shows the real-time usage of CPU across the system or containerized services.

![System CPU Usage](images/system-CPU-usage-panel.png)

---

## System Memory Usage Panel

This panel displays memory usage, helping identify spikes and trends over time.

![System Memory Usage](images/System-Memory-Usage-panel.png)

---

## CPU Usage Breakdown Panel

Breakdown of CPU usage by processes or containers.

![CPU Usage Panel](images/CPU-usage-panel.png)

---

## Memory Usage Distribution

A visual overview (e.g. donut chart) of how memory is allocated.

![Memory Usage Panel](images/memory-usage-panel.png)

---

## HTTP Requests Panel

Tracks number and rate of incoming HTTP requests.

![HTTP Requests Panel](images/HTTP-requests-panel.png)

---

## Uptime Panel

Shows system or container uptime status and alerts for potential downtime.

![Uptime Panel](images/uptime-panel.png)

---

## Real-Time Logs Panel

Streaming real-time logs collected via Loki, useful for debugging and incident response.

![Real-Time Logs Panel](images/live-logs-panel.png)

---

## Total Logs Count

Displays the total number of logs captured during the selected period.

![Logs Count Panel](images/total-logs-count-panel.png)

---

## Logs Filtered by Level

Shows logs filtered by severity (info, warning, error, etc.).

![Logs by Level](images/logs-filtered-by-level-panel.png)

---

## Real-Time Logs Dashboard Overview

Complete view of the real-time logging dashboard powered by Loki.

![Real-Time Logs Dashboard](images/real-time-logs-dashboard.png)

---

## Custom Dashboard Overview

This dashboard combines multiple panels (CPU, memory, logs) in one view.

![Custom Dashboard](images/custom-dashboard.png)


