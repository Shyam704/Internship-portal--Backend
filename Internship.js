const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    location: {
        type: String
    },

    duration: {
        type: String
    },

    stipend: {
        type: String
    },

    skills: {
        type: String
    },

    status: {
        type: String,
        enum: ["active", "closed"],
        default: "active"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Internship", internshipSchema);