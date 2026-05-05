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
