const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {

    console.log("REGISTER API CALLED");

    res.json({
        message: "Registration API is working!",
        receivedData: req.body
    });

});

module.exports = router;