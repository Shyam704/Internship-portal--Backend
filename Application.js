const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    internship: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Internship",
        required: true
    },

    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },

    appliedDate: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        enum: [
            "Applied",
            "Shortlisted",
            "Interview",
            "Selected",
            "Rejected"
        ],
        default: "Applied"
    }
});

// Prevent the same student from applying twice
applicationSchema.index(
    { internship: 1, student: 1 },
    { unique: true }
);

module.exports = mongoose.model("Application", applicationSchema);