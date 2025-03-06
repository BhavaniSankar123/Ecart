const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
const PORT = 5174;

app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
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
          .json({ status: "success", message: "Login successful" });
      } else {
        res
          .status(401)
          .json({ status: "error", message: "Invalid email or password" });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
