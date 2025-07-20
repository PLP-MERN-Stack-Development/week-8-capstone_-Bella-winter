const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { getDashboard } = require("../controllers/privateControllers");
router.get("/dashboard", protect, getDashboard, (req, res) => {
  res.json({
    message: "Welcome to My dashboard",
    user: req.user,
  });
});

module.exports = router;
