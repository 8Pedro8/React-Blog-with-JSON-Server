# React Blog with JSON Server

Welcome to the React Blog project! This is a simple blog built with React. Blogs can be added and deleted, and all blogs are showcased on the homepage. The backend of this application is simulated with `json-server`, which provides a full fake REST API.

## 🚀 Features
- Add new blogs.
- Delete existing blogs.
- View all blogs on the homepage.
  
## 🛠️ Tech Stack
- **Frontend:** React (configured with Vite)
- **Backend:** json-server (for simulation)

## 🚀 Getting Started

### Prerequisites
Ensure that you have `node` and `npm` installed on your system. If not, download and install them from [Node.js official site](https://nodejs.org/).

### Setting up the Backend
To run the simulated server, use the following command:
```bash
npx json-server --watch data/db.json --port 8000
```
This will launch the server on `http://localhost:8000/`.

### Setting up the Frontend
1. First, install the dependencies:
   ```bash
   npm install
   ```

2. To run the frontend of the application:
   ```bash
   npm run dev
   ```

This will launch the React application, typically on `http://localhost:3000/` (unless you have other applications running or have configured a different port).