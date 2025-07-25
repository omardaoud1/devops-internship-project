# Doctor App

A full-stack Node.js backend application with MongoDB database and integrated monitoring using Prometheus, Grafana, Loki, and Alertmanager.

----

## Project Overview

This project provides a RESTful API backend connected to MongoDB, with a complete observability stack for monitoring metrics, logs, and alerts. It demonstrates best practices for containerization and monitoring in modern applications.

----

## Technologies Used

- **Backend:** Node.js  
- **Database:** MongoDB  
- **Containerization:** Docker & Docker Compose  
- **Monitoring & Alerting:** Prometheus, Grafana, Loki, Alertmanager  

----

## Getting Started

### Prerequisites

- Docker & Docker Compose installed on your machine.

### Running the Application

Build and start all services with:

```bash
docker-compose up --build
```

----
## Services & Ports

| Service       | Description             | Port  |
| ------------- | ----------------------- | ----- |
| Backend API   | Node.js server          | 5000  |
| MongoDB       | Database                | 27017 |
| Prometheus    | Metrics collection      | 9090  |
| Grafana       | Dashboard visualization | 3001  |
| Loki          | Log aggregation         | 3100  |
| Alertmanager  | Alert management        | 9093  |
| Node Exporter | Host system metrics     | 9100  |
| Promtail      | Log shipping agent      | N/A   |



----

## Environment Variables

    MONGO_URI is set in docker-compose to connect backend to MongoDB.


----

## Project Structure
``` 
├── backend
├── docker-compose.yml
├── docs
├── frontend
├── get-pip.py
├── leak.py
├── observability
├── README.md
└── wal
├── .gitignore
```

----

## Observability Stack

- **Prometheus** scrapes metrics exposed by the Node.js backend.  
- **Grafana** visualizes metrics and logs.  
- **Loki** collects and indexes logs.  
- **Alertmanager** sends alerts via Slack and email based on Prometheus rules.


----
## Documentation

For detailed explanations, configurations, and monitoring setup, please refer to the Markdown files in the [`/docs`](./docs) directory.  
This includes documentation on Prometheus, Loki, Alertmanager, and other observability components to help you understand the project
 thoroughly.

----
## Author

Omar Daoud


/////small change
