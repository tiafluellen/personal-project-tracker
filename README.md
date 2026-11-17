# Personal Project Tracker

## Project Description

Personal Project Tracker is a web application designed to help users organize and manage personal projects in one place. Users can create projects, organize them by category and status, and manage project information.

The application is designed for students, developers, writers, game designers, and other users who work on multiple personal projects.

## MVP Features

The current MVP includes the core functionality needed to manage personal projects.

- Create projects
- View projects
- Edit project information
- Delete projects
- Organize projects by category
- Track project status

Future development may include project progress tracking, saved project data, AI-powered project suggestions, and project summaries.

## Technology Stack

### Frontend

- HTML
- CSS
- JavaScript

### Development Tools

- Git
- GitHub
- Docker
- GitHub Actions
- Visual Studio Code

### Containerization

- Docker
- Nginx

## AI Tools Used

AI tools such as ChatGPT and GitHub Copilot are being used during development to assist with coding, debugging, troubleshooting, brainstorming, and documentation.

AI-generated suggestions are reviewed, tested, and modified as needed before being used in the project.

## Docker

The project is containerized using Docker.

The Docker configuration uses an Nginx Alpine image to serve the frontend application. The Docker image can be built locally and run as a container for testing.

Example Docker commands:

```bash
docker build -t personal-project-tracker .
docker run -d -p 8080:80 --name personal-project-tracker-container personal-project-tracker
```

The application can then be viewed at:

`http://localhost:8080`

## CI/CD

GitHub Actions is used to automate project validation.

The CI workflow checks that required project files are present and validates the HTML and JavaScript files. The workflow runs when changes are pushed to the repository and when pull requests are created for the `main` branch.

## Git and GitHub Workflow

The project uses feature branches and