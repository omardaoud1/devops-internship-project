# Alerting Logic and Tests

This document summarizes the alerting configuration, how alert rules were tested, and the key learning outcomes from implementing alerting with Prometheus, Grafana, and Loki.

----------------------------------------------------------
## Alerting Logic

The alerting system is configured using **Prometheus alert rules** defined in `alert.rules.yml`.  
These rules monitor key metrics (CPU usage, memory, container health, etc.) and trigger alerts when thresholds are exceeded.

### Examples of Alert Rules:
- **High CPU Usage:** Triggered when CPU usage exceeds a defined threshold (e.g., >80%) for more than 1 minute.
- **High Memory Usage:** Alerts when memory consumption stays above a critical level.
- **App Down:** Sends alerts if a monitored service (such as the Doctor backend) is unreachable.

The complete configuration and YAML examples are documented in [`prometheus-config.md`](./prometheus-config.md).


----------------------------------------------------------

## Simulation Tests

To validate the alerting rules, several simulation tests were performed:

### 1. High CPU Usage
- A stress test script was used to artificially increase CPU load inside the container.
- Verified that Prometheus triggered the **HighCPUUsage** alert after the threshold (e.g., >80% for 1 minute).
- Confirmed alert notifications were sent via Slack and email.

### 2. High Memory Usage
- Simulated memory consumption using a test process that allocated large memory chunks.
- Observed the **HighMemoryUsage** alert being triggered in Grafana.

### 3. App Down (Service Unavailable)
- Stopped the Doctor backend container to simulate a service outage.
- Verified that the **AppDown** alert fired and notifications were delivered.

These tests ensure that the alerting system works as expected under real-world failure scenarios.





------------------------------------------------------------

## Learning Outcomes

- **Understanding Alerting:** Learned how to define Prometheus alert rules (`alert.rules.yml`) and integrate them with Grafana for visualization.
- **Testing Alerts:** Gained experience in simulating real incidents (high CPU, memory leaks, service down) to validate alert configurations.
- **Notifications:** Configured and verified alert delivery channels (Slack, email), ensuring quick response during failures.
- **Observability Mindset:** Improved understanding of how metrics, logs, and alerts work together to monitor system health effectively.



