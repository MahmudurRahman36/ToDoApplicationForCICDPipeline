# ToDo Application | Task Manager

A modern, responsive ToDo application built with **React.js** and **Tailwind CSS v3**. Deployed automatically to **AWS EC2** using a **GitHub Actions CI/CD pipeline** with a **self-hosted runner**.

---

## 1. Features

- **Add & Delete Tasks** — Simple interface to create and remove tasks.
- **Edit Tasks** — Double-click any task to edit it in place. Press `Enter` to save, `Escape` to cancel.
- **Toggle Completion** — Mark tasks as complete/incomplete with a single click.
- **Filter Tasks** — Toggle between **All**, **Pending**, and **Completed** views.
- **Progress Tracking** — See how many tasks are completed at a glance.
- **Clear Completed** — One-click button to bulk-remove completed tasks.
- **Persistence** — All tasks are saved to `localStorage` and survive page refreshes.
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop.

---

## 2. Project Structure

```text
ToDoApplicationForCICDPipeline/
├── .github/
│   └── workflows/
│       └── ci.yml            # GitHub Actions CI/CD pipeline
├── src/
│   ├── components/
│   │   ├── FilterBar.jsx     # Filter controls & progress count
│   │   ├── Header.jsx        # App branding
│   │   ├── TodoForm.jsx      # Task input form
│   │   ├── TodoItem.jsx      # Single task row (edit/delete/toggle)
│   │   └── TodoList.jsx      # Task list container
│   ├── App.jsx               # Root component & state management
│   ├── App.test.jsx          # Unit tests (Vitest)
│   ├── index.css             # Global styles + Tailwind directives
│   └── main.jsx              # React entry point
├── .dockerignore             # Files excluded from Docker build context
├── .gitignore                # Files excluded from git
├── Dockerfile                # Multi-stage Docker build
├── docker-compose.yml        # Orchestrates App + PostgreSQL
├── index.html                # HTML entry point
├── nginx.conf                # Nginx configuration for React SPA
├── package.json              # Dependencies & npm scripts
├── postcss.config.js         # PostCSS (for Tailwind)
├── tailwind.config.js        # Tailwind v3 configuration
└── vite.config.js            # Vite + Vitest configuration
```

---

## 3. Local Development

### Prerequisites
- Node.js v20+
- npm v9+

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/MahmudurRahman36/ToDoApplicationForCICDPipeline.git
cd ToDoApplicationForCICDPipeline

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**.

### Other Commands

```bash
npm run build   # Build for production (output → dist/)
npm test        # Run unit tests (Vitest)
npm run preview # Preview the production build locally
```

---

## 4. CI/CD Pipeline (GitHub Actions)

The pipeline is defined in `.github/workflows/ci.yml` and runs automatically on every push to the `development` branch.

### Pipeline Architecture

```
Developer pushes to 'development'
          │
          ▼
┌─────────────────────────────────┐
│  Self-Hosted Runner             │  ← mahmud-batch11-selfhosted-runner
│  (65.0.94.198)                  │     IP: 65.0.94.198
│                                 │
│  JOB 1: build-and-test          │
│    ✓ Checkout code              │
│    ✓ Setup Node.js 20           │
│    ✓ npm ci                     │
│    ✓ npm test                   │
│    ✓ npm run build              │
│    ✓ Verify dist/ output        │
│                                 │
│  JOB 2: deploy                  │
│    ✓ Checkout code              │
│    ✓ Configure SSH              │
│    ✓ rsync files to App Server  │──► mahmud-batch11-application
│    ✓ docker compose up -d       │    (13.233.204.205)
│    ✓ Cleanup SSH key            │
└─────────────────────────────────┘
```

### Required GitHub Secrets

Go to **GitHub Repo → Settings → Secrets and variables → Actions → New repository secret**:

| Secret Name   | Value                                       |
|---------------|---------------------------------------------|
| `EC2_HOST`    | `13.233.204.205` (application server IP)    |
| `EC2_USER`    | `ubuntu`                                    |
| `EC2_SSH_KEY` | Contents of the `.pem` private key file     |
| `DB_PASSWORD` | A strong password for PostgreSQL            |

---

## 5. Infrastructure

| Server Name                       | Role                      | Public IP      | Private IP   |
|-----------------------------------|---------------------------|----------------|--------------|
| `mahmud-batch11-selfhosted-runner`| GitHub Actions Runner     | 65.0.94.198    | 10.0.5.250   |
| `mahmud-batch11-application`      | React App + Nginx + DB    | 13.233.204.205 | 10.0.8.97    |

Both servers run **Ubuntu 24.04** on **AWS EC2**.

---

## 6. Self-Hosted Runner Setup (`mahmud-batch11-selfhosted-runner`)

SSH into the runner server and follow these steps:

```bash
# 1. Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Install rsync
sudo apt-get install -y rsync

# 3. Register the runner
# Go to: GitHub Repo → Settings → Actions → Runners → New self-hosted runner
# Follow the on-screen instructions to download and configure the runner
```

---

## 7. Application Server Setup (`mahmud-batch11-application`)

SSH into the app server and follow these steps:

```bash
# 1. Install Docker
sudo apt-get update
sudo apt-get install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 2. Allow ubuntu user to run Docker without sudo (optional)
sudo usermod -aG docker ubuntu

# 3. Create the app directory
mkdir -p ~/app
```

---

## 8. Key Concepts

### CI/CD
Continuous Integration/Continuous Deployment is the practice of automatically building, testing, and deploying code on every push. This eliminates manual errors and speeds up the release cycle.

### Self-Hosted Runner
A self-hosted runner is a machine you manage yourself that executes GitHub Actions workflows. Unlike GitHub-hosted runners (ephemeral VMs), self-hosted runners persist between runs, have access to private network resources, and can be customized.

### Workflow Execution Flow
1. Developer pushes code to the `development` branch.
2. GitHub detects the push and triggers the workflow.
3. The self-hosted runner picks up the job.
4. The runner installs dependencies, runs tests, and builds the app.
5. On success, the runner SSHs into the application server and deploys via Docker Compose.
