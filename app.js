
import express from "express";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Student Management API is Running!");
});

// Student routes
app.use("/api/students", studentRoutes);

export default app;
