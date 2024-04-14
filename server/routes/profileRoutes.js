const express = require("express");
const router = express.Router();
const { profileController } = require("../controllers/profileController");

// POST route to save LinkedIn profile data
router.post("/linkedin-profiles", profileController);
router.get("/test", (req, res) => {
  res.status(200).json({ message: "Test endpoint works!" });
});

module.exports = router;
