Docker 3-Tier Application with Kubernetes & Helm
Overview

This project demonstrates deployment of a 3-tier application using:

Docker
Docker Compose
Kubernetes
Helm
Minikube
Ingress
Namespace isolation
Rolling updates
Wazuh deployment with Helm

The project was completed as part of Week 1–4 cloud-native / Kubernetes lab exercises.

Architecture

The application follows a standard 3-tier architecture:

Frontend

User-facing web interface

Backend

API service handling business logic

Database

PostgreSQL persistent storage

Technologies Used
Docker
Kubernetes
Helm
Minikube
PostgreSQL
Wazuh
GitHub
Week 1–2
Docker Compose Deployment

The application was containerized and deployed using Docker Compose.

Services
frontend
backend
database
Run
docker compose up -d
Week 3
Kubernetes Deployment

The Docker Compose setup was converted into Kubernetes manifests using Kompose.

Deploy
kubectl apply -f .
Features Implemented
Persistent Storage

PostgreSQL data persistence using PVC

Health Checks

Liveness and readiness probes

Ingress

Application exposed through custom hostnames

Example:

myapp.local
Namespaces

Environment separation implemented using:

dev
prod
Rolling Updates

Deployment image updates were tested and monitored using:

kubectl rollout status deployment/backend

Rollback tested with:

kubectl rollout undo deployment/backend
Monitoring with K9s

Cluster resources were monitored using:

pod inspection
logs
exec into containers
events monitoring
Week 4
Helm Deployment

The application was packaged as a Helm chart.

Install
helm install myapp ./three-tier-app
Upgrade
helm upgrade myapp ./three-tier-app
Rollback
helm rollback myapp 1
Environment-specific Configurations
Development
helm install dev-app . -f values-dev.yaml -n dev
Production
helm install prod-app . -f values-prod.yaml -n prod
Helm Hooks

Pre-install / pre-upgrade migration jobs implemented.

Purpose:

database initialization
schema migration simulation
Chart Dependencies

PostgreSQL added as Helm dependency.

helm dependency update
Chart Packaging
helm package .
Helm Secrets

Studied secure handling of sensitive values using:

helm-secrets
SOPS
Wazuh Deployment

Wazuh was deployed using Helm.

Install
helm install wazuh wazuh-helm/wazuh -n wazuh -f wazuh-values.yaml
Access

Accessible via custom hostname:

mywazuh.com
Custom Values Configured
hostname
ingress
credentials
Project Structure
=======
# 🚀 Docker 3-Tier Application with Kubernetes & Helm

> Cloud-native deployment project using Docker, Kubernetes, Helm, Minikube, and Wazuh.

---

## 📌 Overview

This project demonstrates deployment and orchestration of a **3-tier application** using modern DevOps tools and Kubernetes best practices.

It includes:

- Docker containerization
- Kubernetes deployment
- Helm chart packaging
- Namespace isolation
- Rolling updates & rollback
- Ingress configuration
- Wazuh deployment with Helm

---

## 🏗 Architecture

```text
Frontend (UI)
     ↓
Backend (API)
     ↓
PostgreSQL Database
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Docker | Containerization |
| Kubernetes | Container orchestration |
| Helm | Kubernetes package manager |
| Minikube | Local cluster |
| PostgreSQL | Database |
| Wazuh | Security monitoring |
| GitHub | Version control |

---

# 📅 Week 1–2: Docker

## Docker Compose Deployment

Run:

```bash
docker compose up -d
```

### Services

- Frontend
- Backend
- Database

---

# ☸️ Week 3: Kubernetes

## Deploy Application

```bash
kubectl apply -f .
```

---

## Features Implemented

### Persistent Storage
PVC for PostgreSQL

### Health Checks
- Liveness probes
- Readiness probes

### Ingress
Custom host routing

```text
myapp.local
```

### Namespaces
- dev
- prod

### Rolling Updates

```bash
kubectl rollout status deployment/backend
```

Rollback:

```bash
kubectl rollout undo deployment/backend
```

---

## Monitoring

Cluster monitoring performed using **K9s**

Features used:

- Pod inspection
- Logs
- Events
- Exec into containers

---

# ⛵ Week 4: Helm

## Install Chart

```bash
helm install myapp ./three-tier-app
```

---

## Upgrade

```bash
helm upgrade myapp ./three-tier-app
```

---

## Rollback

```bash
helm rollback myapp 1
```

---

## Environment Deployments

### Development

```bash
helm install dev-app . -f values-dev.yaml -n dev
```

### Production

```bash
helm install prod-app . -f values-prod.yaml -n prod
```

---

## Advanced Helm Features

### Helm Hooks
Pre-install migration jobs

### Dependencies
PostgreSQL subchart

```bash
helm dependency update
```

### Packaging

```bash
helm package .
```

---

# 🔐 Helm Secrets

Studied secure secret handling using:

- helm-secrets
- SOPS

---

# 🛡 Wazuh Deployment

## Install

```bash
helm install wazuh wazuh-helm/wazuh -n wazuh -f wazuh-values.yaml
```

---

## Access

```text
mywazuh.com
```

---

## Configured Values

- Custom hostname
- Ingress settings
- Credentials

---

# 📁 Project Structure

```text
>>>>>>> 8a41f9f (Fixed the README)
docker-3tier-app/
│
├── backend/
├── frontend/
├── three-tier-app/
│   ├── templates/
│   ├── charts/
│   ├── values.yaml
│   ├── values-dev.yaml
│   ├── values-prod.yaml
│   └── Chart.yaml
│
├── wazuh-values.yaml
└── README.md
<<<<<<< HEAD
Learning Outcomes

This project covered:

containerization
Kubernetes orchestration
service exposure
ingress configuration
persistent storage
Helm chart creation
chart packaging
release management
namespace isolation
rolling updates
security platform deployment
Author

Dimitar
=======
```

---

# 🎯 Learning Outcomes

This project covered:

✅ Docker containerization  
✅ Kubernetes orchestration  
✅ Helm chart development  
✅ Ingress configuration  
✅ Persistent storage  
✅ Rolling updates  
✅ Namespace isolation  
✅ Security monitoring with Wazuh

---

# 👨‍💻 Author

**Dimitar**

---

## GitHub Repository

Cloud-native deployment lab project using Kubernetes and Helm.
