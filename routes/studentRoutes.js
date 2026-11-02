
import express from "express";

import {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} from "../controllers/studentController.js";

const router = express.Router();

// Create a student
router.post("/", createStudent);

// Get all students
router.get("/", getStudents);

// Get one student by ID
router.get("/:id", getStudentById);

// Update a student
router.put("/:id", updateStudent);

// Delete a student
router.delete("/:id", deleteStudent);

export default router;
