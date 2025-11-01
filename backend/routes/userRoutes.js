import express from "express";
import protect from "../middleware/authMiddleware.js";  // import the middleware

const router = express.Router();

// ✅ Example Protected Route
router.get("/profile", protect, (req, res) => {
  res.json({ message: "Welcome to your profile!", userId: req.user });
});

export default router;
