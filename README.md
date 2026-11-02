# Student Management API

A simple, beginner-friendly REST API built using **Node.js**, **Express.js**, and **MongoDB Atlas** with **Mongoose**. This project was developed as a first-year college assignment to demonstrate fundamental CRUD (Create, Read, Update, Delete) operations and backend API design principles.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Installation Instructions](#installation-instructions)
- [MongoDB Atlas Configuration](#mongodb-atlas-configuration)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Postman Testing Guide](#postman-testing-guide)
- [Project Architecture & File Explanations](#project-architecture--file-explanations)
- [GitHub Repository](#github-repository)

---

## Project Overview

The **Student Management API** allows educational institutions or administrators to manage student records. It exposes clean RESTful endpoints to register new students, retrieve student lists or individual profiles by their unique MongoDB identifier, update student information, and delete records.

---

## Technologies Used

- **Node.js**: JavaScript runtime environment for executing server-side code.
- **Express.js**: Fast, minimalist web framework for building RESTful APIs and handling routing.
- **MongoDB Atlas**: Cloud-hosted NoSQL database for flexible data persistence.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JavaScript ES Modules (`import`/`export`)**: Modern modular JavaScript syntax.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **Nodemon**: Development utility that automatically restarts the server when code changes are detected.
- **Postman**: API development and testing tool.
- **Git & GitHub**: Version control and code repository hosting.

---

## Features

- **Full CRUD Support**: Create, Read, Update, and Delete student records.
- **Data Validation**: Required fields and data types enforced at schema level.
- **Duplicate Prevention**: Unique constraints on student `rollNumber` and `email`.
- **Safe ID Validation**: Verifies 24-character hexadecimal MongoDB ObjectIds before querying to prevent application crashes.
- **RESTful Status Codes**: Returns standardized HTTP status codes (`200`, `201`, `400`, `404`, `500`).
- **Secure Configuration**: Keeps sensitive database credentials isolated inside environment variables (`.env`).

---

## Folder Structure

```text
student-management-api/
│
├── config/
│   └── db.js                  # MongoDB database connection logic
│
├── controllers/
│   └── studentController.js   # Request handling and CRUD business logic
│
├── models/
│   └── studentModel.js        # Mongoose schema and model definition
│
├── routes/
│   └── studentRoutes.js       # Express route definitions for /api/students
│
├── .env                       # Local environment variables (ignored by Git)
├── .env.example               # Template for required environment variables
├── .gitignore                 # Files and directories ignored by Git
├── app.js                     # Express application configuration and middleware
├── index.js                   # Server entry point; connects DB and starts server
├── package.json               # Project metadata, scripts, and dependencies
├── package-lock.json          # Locked versions of installed npm packages
└── README.md                  # Project documentation and guide
```

---

## Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16.x or newer recommended)
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/) (desktop app or web agent)
- A free [MongoDB Atlas](https://www.mongodb.com/atlas) account

---

## Installation Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/akarshitmakkar-coder/student-management-api.git
   cd student-management-api
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Copy `.env.example` to create your `.env` file:
   ```bash
   cp .env.example .env
   ```
   *(On Windows PowerShell, use `Copy-Item .env.example .env`)*

---

## MongoDB Atlas Configuration

1. Log in to [MongoDB Atlas](https://cloud.mongodb.com/).
2. Under **Security** > **Database Access**:
   - Create a database user (e.g., username: `myUser`, with a secure password).
   - Note down this username and password.
3. Under **Security** > **Network Access**:
   - Add an IP access entry: choose **Allow Access From Anywhere** (`0.0.0.0/0`) for local development and testing.
4. Under **Database** > **Clusters**:
   - Click **Connect** on your cluster.
   - Choose **Drivers** (Node.js).
   - Copy the connection string. It will look like:
     ```text
     mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```
5. Open your `.env` file and replace `<username>` and `<password>` with your database user credentials. **Do not include angle brackets `< >` around your username or password**.
   Example:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://studentAdmin:MyPassword123@cluster0.tkftaox.mongodb.net/studentDB?retryWrites=true&w=majority
   ```

---

## Running the Project

### Production / Normal Mode:
```bash
npm start
```

### Development Mode (with auto-restart via Nodemon):
```bash
npm run dev
```

When the server starts successfully, the terminal will display:
```text
MongoDB Connected Successfully!
Server running on port 5000
```

Open `http://localhost:5000/` in your browser. You should see:
```text
Student Management API is Running!
```

---

## API Endpoints

Base URL: `http://localhost:5000`

| HTTP Method | Endpoint | Description | Status Code |
|-------------|----------|-------------|-------------|
| **GET** | `/` | Health check / home route | `200 OK` |
| **POST** | `/api/students` | Register a new student | `201 Created` |
| **GET** | `/api/students` | Retrieve all student records | `200 OK` |
| **GET** | `/api/students/:id` | Retrieve a single student by MongoDB ID | `200 OK` / `404 Not Found` |
| **PUT** | `/api/students/:id` | Update an existing student by ID | `200 OK` / `404 Not Found` |
| **DELETE** | `/api/students/:id` | Delete a student record by ID | `200 OK` / `404 Not Found` |

---

## Postman Testing Guide

### 1. Check Server Status
- **Method**: `GET`
- **URL**: `http://localhost:5000/`
- **Expected Response**:
  ```text
  Student Management API is Running!
  ```

---

### 2. Create a New Student
- **Method**: `POST`
- **URL**: `http://localhost:5000/api/students`
- **Headers**:
  - `Content-Type`: `application/json`
- **Body** (raw JSON):
  ```json
  {
    "name": "Rahul Sharma",
    "rollNumber": "101",
    "email": "rahul@gmail.com",
    "course": "BTech CSE",
    "year": 1
  }
  ```
- **Expected Response** (`201 Created`):
  ```json
  {
    "_id": "672728f1e83910c5949a1234",
    "name": "Rahul Sharma",
    "rollNumber": "101",
    "email": "rahul@gmail.com",
    "course": "BTech CSE",
    "year": 1,
    "createdAt": "2026-11-03T00:00:00.000Z",
    "updatedAt": "2026-11-03T00:00:00.000Z",
    "__v": 0
  }
  ```

> [!NOTE]
> **How to get the MongoDB ID**: Copy the value of the `_id` field from the response above (e.g. `672728f1e83910c5949a1234`). You will use this ID for the GET by ID, PUT, and DELETE requests.

---

### 3. Get All Students
- **Method**: `GET`
- **URL**: `http://localhost:5000/api/students`
- **Expected Response** (`200 OK`):
  ```json
  [
    {
      "_id": "672728f1e83910c5949a1234",
      "name": "Rahul Sharma",
      "rollNumber": "101",
      "email": "rahul@gmail.com",
      "course": "BTech CSE",
      "year": 1,
      "createdAt": "2026-11-03T00:00:00.000Z",
      "updatedAt": "2026-11-03T00:00:00.000Z",
      "__v": 0
    }
  ]
  ```

---

### 4. Get Student by ID
- **Method**: `GET`
- **URL**: `http://localhost:5000/api/students/672728f1e83910c5949a1234`
- **Expected Response** (`200 OK`):
  ```json
  {
    "_id": "672728f1e83910c5949a1234",
    "name": "Rahul Sharma",
    "rollNumber": "101",
    "email": "rahul@gmail.com",
    "course": "BTech CSE",
    "year": 1,
    "createdAt": "2026-11-03T00:00:00.000Z",
    "updatedAt": "2026-11-03T00:00:00.000Z",
    "__v": 0
  }
  ```

---

### 5. Update Student by ID
- **Method**: `PUT`
- **URL**: `http://localhost:5000/api/students/672728f1e83910c5949a1234`
- **Headers**:
  - `Content-Type`: `application/json`
- **Body** (raw JSON):
  ```json
  {
    "year": 2,
    "course": "BTech CSE (AI & ML)"
  }
  ```
- **Expected Response** (`200 OK`):
  ```json
  {
    "_id": "672728f1e83910c5949a1234",
    "name": "Rahul Sharma",
    "rollNumber": "101",
    "email": "rahul@gmail.com",
    "course": "BTech CSE (AI & ML)",
    "year": 2,
    "createdAt": "2026-11-03T00:00:00.000Z",
    "updatedAt": "2026-11-03T00:05:00.000Z",
    "__v": 0
  }
  ```

---

### 6. Delete Student by ID
- **Method**: `DELETE`
- **URL**: `http://localhost:5000/api/students/672728f1e83910c5949a1234`
- **Expected Response** (`200 OK`):
  ```json
  {
    "message": "Student deleted successfully."
  }
  ```

---

### 7. Testing Error Scenarios

- **Duplicate Roll Number or Email**: Sending a POST request with an existing `rollNumber` or `email` will return `400 Bad Request`:
  ```json
  {
    "message": "Duplicate value: A student with this rollNumber already exists."
  }
  ```
- **Invalid ID Format**: Sending an invalid ID string (e.g. `123`) will return `400 Bad Request`:
  ```json
  {
    "message": "Invalid student ID format."
  }
  ```
- **Non-Existent Student**: Sending a valid 24-character ID that does not exist in the database will return `404 Not Found`:
  ```json
  {
    "message": "Student not found."
  }
  ```

---

## Project Architecture & File Explanations

Here is a simple explanation of how each file works together (great for explaining during college viva / practical evaluation):

1. **`index.js` (Server Starter)**:
   - The primary entry point.
   - Loads environment variables using `dotenv`.
   - Calls `connectDB()` to connect to MongoDB Atlas.
   - Only after a successful connection is established does it start listening on `PORT` (default 5000).

2. **`config/db.js` (Database Connection)**:
   - Uses `mongoose.connect()` to connect to MongoDB using `process.env.MONGO_URI`.
   - Isolates database connection logic so it can be maintained independently from routing.

3. **`models/studentModel.js` (Data Blueprint)**:
   - Defines the structure (schema) for student documents in MongoDB.
   - Specifies field names (`name`, `rollNumber`, `email`, `course`, `year`), their data types, required constraints, and unique constraints.
   - Enables `timestamps: true` to automatically track `createdAt` and `updatedAt`.

4. **`routes/studentRoutes.js` (Endpoint Routing)**:
   - Maps URL paths (e.g. `POST /`, `GET /:id`) to their respective controller functions.
   - Keeps route definitions separated from business logic.

5. **`controllers/studentController.js` (Business Logic)**:
   - Contains the 5 functions (`createStudent`, `getStudents`, `getStudentById`, `updateStudent`, `deleteStudent`).
   - Interacts with the Mongoose model (`Student.create`, `Student.find`, etc.).
   - Validates IDs and handles database errors with appropriate HTTP status codes.

6. **`app.js` (Express Application Config)**:
   - Creates the Express instance.
   - Registers JSON parsing middleware (`express.json()`).
   - Hooks up the `/` health check route and connects `/api/students` to `studentRoutes.js`.

7. **`.env` and `.env.example`**:
   - `.env` stores secret credentials locally and is excluded from GitHub by `.gitignore`.
   - `.env.example` serves as a clean template for anyone cloning the repository.

---

## GitHub Repository

- **GitHub Repository**: [akarshitmakkar-coder/student-management-api](https://github.com/akarshitmakkar-coder/student-management-api)
