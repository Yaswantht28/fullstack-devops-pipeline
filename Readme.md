# 📝 Task Manager - Full Stack Dockerized Application


A full-stack Task Manager application built using **React**, **Node.js**, **Express**, and **MongoDB**, with each service containerized using **Docker** and orchestrated through **Docker Compose**.

This project was built to gain a deeper understanding of how multi-container applications work, how services communicate over Docker networks, and how Docker Compose simplifies local development by running the entire application with a single command.

---

# 🚀 Features

* Create new tasks
* View all tasks
* Update existing tasks
* Delete tasks
* RESTful API
* MongoDB database integration
* Dockerized frontend
* Dockerized backend
* Multi-container setup using Docker Compose

---

# 🏗️ Architecture

```
                   Browser
                      │
                      ▼
          React Frontend Container
                      │
             HTTP Requests
                      │
                      ▼
       Node.js + Express Container
                      │
                 Mongoose ODM
                      │
                      ▼
           MongoDB Database Container
```

---

# 📁 Project Structure

```
task-manager/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── backend_manager/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── Dockerfile
│   ├── package.json
│   ├── index.js
│   └── ...
│
├── docker-compose.yml
│
└── README.md
```

---

# 🛠️ Tech Stack

### Frontend

* React
* Axios

### Backend

* Node.js
* Express.js
* Mongoose

### Database

* MongoDB

### DevOps

* Docker
* Docker Compose

---

# 📋 Prerequisites

Before running this project, make sure the following are installed:

* Docker
* Docker Compose
* Git

Verify the installation:

```bash
docker --version
docker compose version
git --version
```

---

# 📥 Clone the Repository

```bash
git clone https://github.com/Yaswantht28/task-manager-docker.git

cd task-manager-docker.git
```

---

# ▶️ Running the Application

Build the images and start all services:

```bash
docker compose up --build
```

Run in detached mode:

```bash
docker compose up -d --build
```

Stop the application:

```bash
docker compose down
```

Stop and remove volumes:

```bash
docker compose down -v
```

---

# 🌐 Application URLs

| Service     | URL                                               |
| ----------- | ------------------------------------------------- |
| Frontend    | http://localhost:5173 *(or your configured port)* |
| Backend API | http://localhost:3000                             |
| MongoDB     | mongodb://localhost:27017                         |

---

# 📡 API Endpoints

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| GET    | `/tasks`     | Retrieve all tasks |
| POST   | `/tasks`     | Create a new task  |
| PUT    | `/tasks/:id` | Update a task      |
| DELETE | `/tasks/:id` | Delete a task      |

---

# ⚙️ Environment Variables

Create a `.env` file inside the backend project.

Example:

```env
PORT=3000
MONGO_URI=mongodb://mongodb:27017/taskdb
```

> **Note:** When using Docker Compose, the backend connects to MongoDB using the service name (`mongodb`) instead of `localhost`.

---

# 🐳 Useful Docker Commands

View running containers:

```bash
docker ps
```

View all containers:

```bash
docker ps -a
```

View logs:

```bash
docker compose logs
```

View backend logs:

```bash
docker compose logs backend
```

View frontend logs:

```bash
docker compose logs frontend
```

Restart containers:

```bash
docker compose restart
```

Rebuild containers:

```bash
docker compose up --build
```

Remove unused Docker resources:

```bash
docker system prune
```

---

# 📚 What I Learned

During this project, I gained hands-on experience with:

* Docker Images
* Docker Containers
* Dockerfiles
* Docker Compose
* Docker Networks
* Docker Volumes
* Container-to-Container Communication
* Environment Variables
* MongoDB Containerization
* Node.js Backend Containerization
* React Frontend Containerization
* Multi-Container Application Deployment

---

# 🔮 Future Enhancements

* User Authentication (JWT)
* User Registration & Login
* Task Categories
* Due Dates
* Task Priorities
* Search & Filter
* Kubernetes Deployment
* CI/CD Pipeline
* Production Deployment to Cloud

---

# 👨‍💻 Author

**Yaswanth Thunugunta**

If you found this project useful, feel free to ⭐ the repository.
