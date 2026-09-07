# CircleCI Node.js & Express Sample

A minimal Node.js REST API built with Express, featuring automated route testing via Jest and continuous integration using CircleCI.

---

## Features

- Lightweight HTTP API built with Express.
- Automated testing suite using Jest and Supertest.
- Ready-to-use CircleCI pipeline configuration (`.circleci/config.yml`).
- Automatic CD trigger support via deployment webhooks (e.g., Render).

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Git](https://git-scm.com/)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<YOUR_USERNAME>/circle-ci-node.git
cd circle-ci-node

```

### 2. Install dependencies

```bash
npm install

```

### 3. Run the development server

```bash
npm start

```

The server starts locally at `http://localhost:3000`.

---

## API Endpoints

| Method | Endpoint     | Description           | Sample Response                                          |
| ------ | ------------ | --------------------- | -------------------------------------------------------- |
| `GET`  | `/`          | Health check / status | `{"status": "ok", "message": "Express server is live!"}` |
| `GET`  | `/api/users` | List sample users     | `[{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]` |
| `POST` | `/api/echo`  | Echo request payload  | `{"received": "your-data"}`                              |

---

## Running Tests

Run the test suite with Jest:

```bash
npm test

```

---

## CI/CD Pipeline (CircleCI)

The CI workflow defined in `.circleci/config.yml` runs on every push:

1. **Test Job:** Spins up a Node.js Docker container, runs `npm ci`, and executes `npm test`.
2. **Deploy Job:** Triggers automatically upon successful test completion on the `main` branch by invoking the deployment webhook (`$RENDER_DEPLOY_HOOK`).

### Setting up CircleCI Environment Variables

To enable automated deployments:

1. Navigate to your project on the CircleCI dashboard.
2. Go to **Project Settings** > **Environment Variables**.
3. Add `RENDER_DEPLOY_HOOK` containing your hosting service deploy hook URL.
