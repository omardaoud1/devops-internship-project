# Folder Structure

This section provides a clear overview of the main directories and important files in the project, explaining their purpose and role
within the system.


├── backend
├── docker-compose.yml
├── docs
├── frontend
├── get-pip.py
├── leak.py
├── observability
├── README.md
└── wal


The project is organized into the following main directories and files:

### backend/
Contains the Node.js Express server code.
- `server.js`: Main entry point of the backend.
- `Dockerfile`: Builds the backend container.
- `package.json`: Lists dependencies and scripts.

### frontend/
Contains the React frontend (using Vite and Tailwind CSS).
- `src/`: Source code of the frontend.
- `public/`: Static assets.
- `vite.config.ts`: Vite configuration file.
- `tailwind.config.js`: Tailwind CSS configuration.

### observability/
Contains monitoring and logging configurations.
- `prometheus/`: Includes `prometheus.yml` and alert rules.
- `grafana/`: Dashboards and provisioning configs.
- `loki/`: Loki configuration files.
- `promtail/`: Promtail config for log shipping.
- `alertmanager/`: Alertmanager config for Slack and Email alerts.

### docs/
Contains Markdown documentation and architecture diagrams.
- `architecture-summary.md`: Describes the system architecture.
- `stack-overview.md`: Summarizes the stack and technologies used.
- `images/`: Stores diagrams and visuals.

### docker-compose.yml
Orchestrates the backend, MongoDB, and observability tools.

### README.md
Project overview, setup instructions, and usage guide.

### Other files
- `leak.py`: Simulates a memory leak for alert testing.
- `get-pip.py`: Used to install pip in some environments.
- `wal/`: Contains MongoDB Write-Ahead Log (WAL) data (used internally by MongoDB).

