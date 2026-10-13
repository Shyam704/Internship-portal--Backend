const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },

    college: {
        type: String
    },

    degree: {
        type: String
    },

    skills: {
        type: String
    },

    resume: {
        type: String
    },

    profileCompletion: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Student", studentSchema);