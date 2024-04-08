const express = require("express");
const router = express.Router();
const { profileController } = require("../controllers/profileController");

// POST route to save LinkedIn profile data
router.post("/", profileController);

module.exports = router;
