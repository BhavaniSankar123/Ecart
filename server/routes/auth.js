const express = require("express");
const db = require("../db/db");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ status: "error", message: "Internal server error" });
      } else if (results.length > 0) {
        res
          .status(200)
          .json({
            status: "success",
            message: "Login successful",
            user: results[0],
          });
      } else {
        res
          .status(401)
          .json({ status: "error", message: "Invalid email or password" });
      }
    }
  );
});

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ status: "error", message: "Internal server error" });
      } else {
        res
          .status(201)
          .json({ status: "success", message: "User registered successfully" });
      }
    }
  );
});

module.exports = router;
