import mongoose from "mongoose";
import Student from "../models/studentModel.js";

// @desc    Create a new student
// @route   POST /api/students
export const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        // Handle duplicate rollNumber or email error (MongoDB code 11000)
        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0];
            return res.status(400).json({
                message: `Duplicate value: A student with this ${field} already exists.`
            });
        }
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all students
// @route   GET /api/students
export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get a single student by ID
// @route   GET /api/students/:id
export const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid student ID format." });
        }

        const student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({ message: "Student not found." });
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update a student by ID
// @route   PUT /api/students/:id
export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid student ID format." });
        }

        const student = await Student.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!student) {
            return res.status(404).json({ message: "Student not found." });
        }

        res.status(200).json(student);
    } catch (error) {
        // Handle duplicate rollNumber or email during update
        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0];
            return res.status(400).json({
                message: `Duplicate value: A student with this ${field} already exists.`
            });
        }
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a student by ID
// @route   DELETE /api/students/:id
export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid student ID format." });
        }

        const student = await Student.findByIdAndDelete(id);

        if (!student) {
            return res.status(404).json({ message: "Student not found." });
        }

        res.status(200).json({ message: "Student deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
