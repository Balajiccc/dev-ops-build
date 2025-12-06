# DevOps Build and Deployment Project

This project demonstrates:
- React application
- Docker containerization
- docker-compose
- CI/CD using Jenkins
- Deployment on AWS EC2
- Monitoring setup

## Branch Strategy
- `dev` → pushes Docker image to public DockerHub repo `dev`
- `master` → pushes Docker image to private DockerHub repo `prod`

## Scripts
- `build.sh` → Builds Docker image
- `deploy.sh` → Runs Docker container on EC2

## DockerHub Repositories
- dev (public)
- prod (private)

## Deployment
Run on EC2:

```bash
docker pull yourdockerhubusername/prod:latest
./deploy.sh
