
import mongoose from "mongoose";

// Define the student schema
const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        rollNumber: {
            type: String,
            required: true,
            unique: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        course: {
            type: String,
            required: true
        },

        year: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

// Create the Student model
const Student = mongoose.model("Student", studentSchema);

// Export the model
export default Student;
