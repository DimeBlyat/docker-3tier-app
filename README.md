# 🚀 Docker 3-Tier Application with Kubernetes & Helm

> Cloud-native deployment project using Docker, Kubernetes, Helm, Minikube, Wazuh, and ArgoCD.

---

## Day 1 – Dockerized 3-Tier Application

### What I Built
- A 3-tier application with Frontend (UI), Backend (API), and PostgreSQL Database
- Each tier containerized using Docker
- Services connected via Docker Compose networking

### 🐳 Docker Steps

```bash
docker compose up -d
```

### Services
- Frontend
- Backend
- Database

---

## Day 2 – Kubernetes Deployment

- Set up local Kubernetes cluster using Minikube
- Deployed all 3 tiers using Kubernetes manifests
- Exposed application using NodePort service

### Commands Used

```bash
kubectl apply -f .
kubectl get pods
kubectl get svc
```

---

## 🚀 Day 3 – Kubernetes Advanced Concepts

- Implemented readiness & liveness probes
- Configured Persistent Volume Claims (PVC) for PostgreSQL
- Set up Ingress with custom host routing
- Created dev and prod namespaces
- Performed rolling updates and tested rollback

### Key Concepts
- Self-healing systems
- High availability
- Zero downtime deployment

### Commands Used

```bash
kubectl rollout status deployment/backend
kubectl rollout undo deployment/backend
```

### Ingress Host

```
myapp.local
```

---

## Day 4 – Cluster Monitoring with K9s

- Inspected pods and logs using K9s
- Monitored cluster events in real time
- Executed into containers for debugging

### Key Concepts
- Pod inspection
- Log streaming
- Event monitoring
- Container exec

---

## ⛵ Day 5 – Helm Chart Packaging

- Packaged Kubernetes manifests into a reusable Helm chart
- Created environment-specific values files for dev and prod
- Used Helm hooks for pre-install migration jobs
- Added PostgreSQL as a Helm subchart dependency

### Commands Used

```bash
helm install myapp ./three-tier-app
helm upgrade myapp ./three-tier-app
helm rollback myapp 1
helm dependency update
helm package .
```

### Environment Deployments

```bash
# Development
helm install dev-app . -f values-dev.yaml -n dev

# Production
helm install prod-app . -f values-prod.yaml -n prod
```

---

## 🔐 Day 6 – Helm Secrets

- Studied secure secret handling using helm-secrets and SOPS
- Learned how to encrypt sensitive values before committing to Git

### Key Concepts
- Secret encryption at rest
- SOPS + age/GPG key management
- Never committing plaintext secrets

---

## 🛡️ Day 7 – Wazuh Security Monitoring

- Deployed Wazuh using Helm in dedicated namespace
- Configured custom hostname and Ingress settings
- Set up credentials and access

### Commands Used

```bash
helm install wazuh wazuh-helm/wazuh -n wazuh -f wazuh-values.yaml
```

### Access

```
mywazuh.com
```

---

## 🛡️ Day 8 – Wazuh Access Configuration

- Updated `/etc/hosts` file to map `mywazuh.com` to the local Minikube IP
- Added the entry in nano editor for local DNS resolution

### How to Access Wazuh

To access Wazuh at `mywazuh.com`, I modified the `/etc/hosts` file:

```bash
nano /etc/hosts
```

Then added the following line:

```
<minikube-ip>  mywazuh.com
```

This allows your local machine to resolve `mywazuh.com` to your Minikube cluster's IP address.

---

## ✅ Day 25 – CI/CD Pipeline Security & GitOps (GitHub Actions + ArgoCD)

### 🔄 Workflow

GitHub Push → Gitleaks Scan → TruffleHog Scan → SAST Linting → Docker Build → Push to DockerHub → Patch values.yaml → ArgoCD Sync → Kubernetes Deploy

### ⚙️ Features Implemented

- Secret scanning on every push using Gitleaks (full git history)
- Verified secrets detection using TruffleHog with `--only-verified` flag
- Python SAST analysis using Bandit
- Code style linting using Flake8
- Dependency CVE scanning using Safety
- Automated Docker image build and push on every push to main
- Secure login using GitHub Secrets (`DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`)
- Dynamic image tagging using Commit SHA:
  - `latest` → current version
  - `<commit-sha>` → unique build version
- Auto-patch of `values.yaml` with new image SHA
- ArgoCD auto-sync triggered on every manifest change

### 🏷️ Example Tags

```
dimeblyat/three-tier-app:latest
dimeblyat/three-tier-app:838b710d396c93992629b50952df69b86467eefd
```

### 🔁 GitOps Workflow

Git Push → ArgoCD Detects Change → Helm Chart Sync → Kubernetes Update

### Key Concepts
- Shift-left security (scan before build)
- GitOps — Git as single source of truth
- Automated self-healing deployments via ArgoCD
- Zero-touch continuous delivery

---

## 🏗️ Architecture

```
Frontend (UI)
     ↓
Backend (API)
     ↓
PostgreSQL Database
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Docker | Containerization |
| Kubernetes | Container orchestration |
| Helm | Kubernetes package manager |
| Minikube | Local cluster |
| PostgreSQL | Database |
| Wazuh | Security monitoring |
| ArgoCD | GitOps continuous delivery |
| GitHub Actions | CI/CD pipeline |

---

## 📁 Project Structure

```
docker-3tier-app/
│
├── .github/
│   ���── workflows/
│       └── ci-cd-pipeline.yml
├── backend/
├── frontend/
├── three-tier-app/
│   ├── templates/
│   ├── charts/
│   ├── values.yaml
│   ├── values-dev.yaml
│   ├── values-prod.yaml
│   └── Chart.yaml
├── docs/
│   └── pipeline-diagram.html
├── application.yaml
├── wazuh-values.yaml
└── README.md
```

---

## 🎯 Learning Outcomes

✅ Docker containerization  
✅ Kubernetes orchestration  
✅ Helm chart development  
✅ Ingress configuration  
✅ Persistent storage  
✅ Rolling updates & rollback  
✅ Namespace isolation  
✅ Security monitoring with Wazuh  
✅ CI/CD pipeline with GitHub Actions  
✅ Secret scanning with Gitleaks & TruffleHog  
✅ SAST linting with Bandit, Flake8, Safety  
✅ GitOps with ArgoCD  

---

## 👨‍💻 Author

**Dimitar**