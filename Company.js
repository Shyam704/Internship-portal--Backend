const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },

    companyName: {
        type: String,
        required: true
    },

    location: {
        type: String
    },

    website: {
        type: String
    },

    verified: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Company", companySchema);