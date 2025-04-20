# Microservices with Node.js and React

> Hands‑on e‑commerce microservices app powered by Node.js, Express, React/Next.js, Docker, and Kubernetes.

## Table of Contents

- [Course Summary](#course-summary)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running Locally](#running-locally)
- [Testing](#testing)
- [Deployment](#deployment)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Course Summary

A deep dive into microservice architecture, covering:

- Service design & data patterns
- Event‑based communication via a custom event bus
- SSR React app with Next.js integration
- Docker containerization & Kubernetes deployment
- GitHub Actions for CI/CD & automated testing

## Technologies

- **Backend**: Node.js, Express, TypeScript
- **Frontend**: React, Next.js, Hooks
- **Databases**: MongoDB, Redis
- **Containerization**: Docker, Docker Compose
- **Orchestration**: Kubernetes, Ingress‑Nginx
- **Testing**: Jest, Supertest
- **CI/CD**: GitHub Actions

## Prerequisites

- Node.js ≥14.x & npm
- Docker Desktop
- kubectl CLI & access to a Kubernetes cluster (minikube or cloud)
- Git

## Project Structure

/ ├─ client/ # Next.js React frontend ├─ services/ │ ├─ auth-service/ # Authentication microservice │ ├─ billing-service/ # Billing & payments │ └─ ... # Other domain services ├─ k8s/ │ ├─ dev/ # Dev manifests │ └─ prod/ # Prod manifests └─ .github/workflows/ # CI/CD pipelines

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/mthsdaher/ticketing
cd ticketing

2. Install dependencies

cd client && npm install
cd ../services/auth-service && npm install
# repeat for each service...

Running Locally
Using Docker Compose

docker-compose up --build

Or manually

    Start databases:

docker run -d --name mongo -p 27017:27017 mongo
docker run -d --name redis -p 6379:6379 redis

In each service directory:

npm run start:dev

Frontend:

    cd client
    npm run dev

Testing

Run all service tests:

npm test

Deployment

    Ensure GitHub Actions builds & pushes Docker images.

    Apply production manifests:

    kubectl apply -f k8s/prod/

    Configure DNS to point to your cluster’s ingress.

Features

    Modular microservices with domain‑driven folders

    Custom event bus for async event streams

    SSR Next.js frontend with shared API client

    Automated CI/CD and parallel testing

    Secure JWT‑based authentication

    Scalable Docker & Kubernetes setup
```
