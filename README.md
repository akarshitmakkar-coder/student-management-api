<div align="center">

  <h1>🎓 Student Management REST API</h1>
  <p><strong>A clean, modern, and beginner-friendly backend RESTful API for managing student records.</strong></p>

  <p>
    <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-18.x+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" /></a>
    <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express.js-5.x-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" /></a>
    <a href="https://www.mongodb.com/atlas"><img src="https://img.shields.io/badge/MongoDB_Atlas-Cloud-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /></a>
    <a href="https://mongoosejs.com/"><img src="https://img.shields.io/badge/Mongoose-ODM-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" /></a>
    <a href="https://www.postman.com/"><img src="https://img.shields.io/badge/Tested_with-Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" /></a>
  </p>

  <p>
    <a href="https://skillicons.dev">
      <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,js,postman,git,github" alt="Tech Stack Icons" />
    </a>
  </p>

</div>

---

## 📑 Table of Contents

- [1. Project Overview](#1-project-overview)
- [2. Key Features](#2-key-features)
- [3. Technologies Used](#3-technologies-used)
- [4. Project Folder Structure](#4-project-folder-structure)
- [5. Installation and Setup](#5-installation-and-setup)
- [6. Environment Variables](#6-environment-variables)
- [7. How to Run the Project](#7-how-to-run-the-project)
- [8. API Endpoints](#8-api-endpoints)
- [9. API Request and Response Examples](#9-api-request-and-response-examples)
- [10. Testing with Postman](#10-testing-with-postman)
- [11. Error Handling](#11-error-handling)
- [12. Future Improvements](#12-future-improvements)
- [13. Author & Credits](#13-author--credits)

---

## 1. Project Overview

The **Student Management API** is a RESTful web service built with **Node.js**, **Express.js**, and **MongoDB Atlas** using **Mongoose ODM**. It was created as a first-year BTech Computer Science & Engineering college project to demonstrate backend architectural design, database modeling, and complete CRUD (Create, Read, Update, Delete) capabilities.

The project follows a clean **MVC (Model-View-Controller)** pattern, uses standard modern **JavaScript ES Modules** (`import`/`export`), and adheres strictly to REST conventions with appropriate HTTP status codes and JSON formatting.

---

## 2. Key Features

- ⚡ **Full CRUD Functionality**: Seamlessly register, retrieve, update, and remove student profiles.
- 🔒 **Safe ID Validation**: Checks 24-character hexadecimal MongoDB ObjectIds before querying, preventing server crashes on malformed requests.
- 🛡️ **Duplicate Prevention**: Enforces database-level unique constraints on both `rollNumber` and `email`.
- 🏷️ **Data Integrity**: Enforces strict Mongoose schema types for `name`, `rollNumber`, `email`, `course`, and `year`.
- ⏱️ **Automatic Timestamps**: Auto-generates `createdAt` and `updatedAt` timestamps for every record.
- 🌐 **Cloud Persistence**: Stores all persistent data securely in MongoDB Atlas.
- 🔐 **Isolated Configuration**: Protects secrets through `.env` environment variables excluded from version control.

---

## 3. Technologies Used

| Technology | Purpose | Documentation |
| :--- | :--- | :--- |
| **Node.js** | Asynchronous JavaScript runtime engine | [nodejs.org](https://nodejs.org/) |
| **Express.js** | Minimalist web application framework for routing and middleware | [expressjs.com](https://expressjs.com/) |
| **MongoDB Atlas** | Fully managed multi-cloud NoSQL document database | [mongodb.com/atlas](https://www.mongodb.com/atlas) |
| **Mongoose** | Object Data Modeling (ODM) library for schema validation and queries | [mongoosejs.com](https://mongoosejs.com/) |
| **JavaScript (ES Modules)** | Native `import`/`export` syntax configured via `"type": "module"` | [developer.mozilla.org](https://developer.mozilla.org/) |
| **dotenv** | Loads secret configuration variables from `.env` into `process.env` | [npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv) |
| **Nodemon** | Development tool that monitors code changes and automatically restarts the server | [nodemon.io](https://nodemon.io/) |
| **Postman** | API platform for testing HTTP requests, response headers, and payloads | [postman.com](https://www.postman.com/) |
| **Git & GitHub** | Source code version control and public repository hosting | [github.com](https://github.com/) |

---

## 4. Project Folder Structure

The project strictly follows a clean and lightweight MVC structure:

```text
student-management-api/
│
├── config/
│   └── db.js                  # MongoDB Atlas connection logic
│
├── controllers/
│   └── studentController.js   # CRUD business logic functions
│
├── models/
│   └── studentModel.js        # Mongoose schema and Student model definition
│
├── routes/
│   └── studentRoutes.js       # Route mappings for /api/students
│
├── .env                       # Local secrets & credentials (never committed)
├── .env.example               # Template showing required environment variables
├── .gitignore                 # Excludes .env and node_modules from Git
├── app.js                     # Express application instance, middleware & root route
├── index.js                   # Server entry point; connects DB and starts server
├── package.json               # Project metadata, dependencies, and npm scripts
├── package-lock.json          # Deterministic dependency tree lockfile
└── README.md                  # Comprehensive project documentation
```

---

## 5. Installation and Setup

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (Version 18.x or newer recommended)
- [Git](https://git-scm.com/)
- A free account on [MongoDB Atlas](https://www.mongodb.com/atlas)

### Step-by-Step Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/akarshitmakkar-coder/student-management-api.git
   cd student-management-api
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory by copying the provided example:
   ```bash
   # On Windows PowerShell
   Copy-Item .env.example .env

   # On macOS / Linux
   cp .env.example .env
   ```

---

## 6. Environment Variables

Open your newly created `.env` file and configure your port and MongoDB Atlas connection string:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/studentDB?retryWrites=true&w=majority
```

> [!IMPORTANT]
> - Replace `<username>` and `<password>` with your database user credentials created in MongoDB Atlas (**Security** &rarr; **Database Access**).
> - **Do not** include the `< >` angle brackets around your credentials.
> - Ensure your IP address is whitelisted in MongoDB Atlas (**Security** &rarr; **Network Access** &rarr; **Allow Access from Anywhere `0.0.0.0/0`** for local testing).
> - Never push your `.env` file to GitHub. It is already included in `.gitignore`.

---

## 7. How to Run the Project

### Development Mode (with automatic restart on file save):
```bash
npm run dev
```

### Production / Normal Mode:
```bash
npm start
```

### Expected Server Console Output:
```text
MongoDB Connected Successfully!
Server running on port 5000
```

Verify the server is running by opening `http://localhost:5000/` in your web browser. You will see:
```text
Student Management API is Running!
```

---

## 8. API Endpoints

**Base URL**: `http://localhost:5000`

| HTTP Method | Endpoint | Description | Success Status |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Health check route | `200 OK` |
| **POST** | `/api/students` | Create and register a new student | `201 Created` |
| **GET** | `/api/students` | Retrieve all student records | `200 OK` |
| **GET** | `/api/students/:id` | Retrieve a single student by MongoDB ID | `200 OK` |
| **PUT** | `/api/students/:id` | Update an existing student's details | `200 OK` |
| **DELETE** | `/api/students/:id` | Remove a student record from database | `200 OK` |

---

## 9. API Request and Response Examples

### 1. Create a Student
- **Method**: `POST`
- **URL**: `http://localhost:5000/api/students`
- **Headers**: `Content-Type: application/json`

**Request Body**:
```json
{
  "name": "Rahul Sharma",
  "rollNumber": "101",
  "email": "rahul@gmail.com",
  "course": "BTech CSE",
  "year": 1
}
```

**Response (`201 Created`)**:
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

> [!TIP]
> **Getting the ID**: Copy the value of the `_id` field from this response (e.g. `672728f1e83910c5949a1234`) to use as the `:id` parameter in the requests below.

---

### 2. Get All Students
- **Method**: `GET`
- **URL**: `http://localhost:5000/api/students`

**Response (`200 OK`)**:
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

### 3. Get Student by ID
- **Method**: `GET`
- **URL**: `http://localhost:5000/api/students/672728f1e83910c5949a1234`

**Response (`200 OK`)**:
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

### 4. Update Student Details
- **Method**: `PUT`
- **URL**: `http://localhost:5000/api/students/672728f1e83910c5949a1234`
- **Headers**: `Content-Type: application/json`

**Request Body**:
```json
{
  "year": 2,
  "course": "BTech CSE (Data Science)"
}
```

**Response (`200 OK`)**:
```json
{
  "_id": "672728f1e83910c5949a1234",
  "name": "Rahul Sharma",
  "rollNumber": "101",
  "email": "rahul@gmail.com",
  "course": "BTech CSE (Data Science)",
  "year": 2,
  "createdAt": "2026-11-03T00:00:00.000Z",
  "updatedAt": "2026-11-03T00:10:00.000Z",
  "__v": 0
}
```

---

### 5. Delete a Student
- **Method**: `DELETE`
- **URL**: `http://localhost:5000/api/students/672728f1e83910c5949a1234`

**Response (`200 OK`)**:
```json
{
  "message": "Student deleted successfully."
}
```

---

## 10. Testing with Postman

1. **Launch Postman** and create a new collection named `Student Management API`.
2. **Add Requests**:
   - `GET http://localhost:5000/` &rarr; Verify the home route status `200`.
   - `POST http://localhost:5000/api/students` &rarr; In the **Body** tab, select **raw** and set format to **JSON**. Paste the sample payload and click **Send**.
   - Copy the generated `_id` from the response.
   - `GET http://localhost:5000/api/students` &rarr; View all student objects.
   - `GET http://localhost:5000/api/students/:id` &rarr; Paste the copied ID to view individual profile.
   - `PUT http://localhost:5000/api/students/:id` &rarr; Update `year` or `course`.
   - `DELETE http://localhost:5000/api/students/:id` &rarr; Delete the record.

---

## 11. Error Handling

The API returns consistent and structured JSON error responses with standard HTTP status codes:

| HTTP Status Code | Scenario | Sample Response |
| :--- | :--- | :--- |
| **`400 Bad Request`** | Invalid MongoDB ObjectId format | `{"message": "Invalid student ID format."}` |
| **`400 Bad Request`** | Duplicate `rollNumber` or `email` | `{"message": "Duplicate value: A student with this rollNumber or email already exists."}` |
| **`400 Bad Request`** | Missing required schema field | `{"message": "Student validation failed: name: Path `name` is required."}` |
| **`404 Not Found`** | ID does not exist in database | `{"message": "Student not found."}` |
| **`500 Internal Server Error`** | Server-side or connection failure | `{"message": "Internal server error details."}` |

---

## 12. Future Improvements

Planned features for future iterations and advanced coursework:
- 📄 **Pagination & Query Filters**: Support page limits and course filtering (e.g. `/api/students?page=1&limit=10&course=CSE`).
- 🔐 **Authentication & Authorization**: Add JWT (JSON Web Tokens) with role-based access for students and administrators.
- 📋 **Input Validation Middleware**: Integrate Joi or express-validator for deep payload checks.
- 💻 **Frontend Web Dashboard**: Connect a React or Tailwind CSS interface to manage student records visually.
- 📖 **Swagger / OpenAPI Documentation**: Provide interactive API documentation via `/api-docs`.

---

## 13. Author & Credits

- **Developer**: **Akarshit Makkar**
- **GitHub Profile**: [@akarshitmakkar-coder](https://github.com/akarshitmakkar-coder)
- **Academic Program**: First-Year BTech Computer Science & Engineering (CSE)
- **Repository**: [student-management-api](https://github.com/akarshitmakkar-coder/student-management-api)
- **License**: [ISC License](https://opensource.org/licenses/ISC)

---

<div align="center">
  <sub>Built with ❤️ as a first-year BTech CSE assignment. Star ⭐ this repository if you found it helpful!</sub>
</div>
