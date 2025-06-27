const express = require("express");
const db = require("../db/db");
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;

// const express = require("express");
// const db = require("../db/db");
// const router = express.Router();

// router.get("/", (req, res) => {
//   db.query("SELECT * FROM products", (err, results) => {
//     if (err) {
//       res
//         .status(500)
//         .json({ status: "error", message: "Internal server error" });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

// router.post("/", (req, res) => {
//   const { name, price, description, imgUrl, category } = req.body;

//   db.query(
//     "INSERT INTO products (name, price, description, imgUrl, category) VALUES (?, ?, ?, ?, ?)",
//     [name, price, description, imgUrl, category],

//     (err, results) => {
//       if (err) {
//         res
//           .status(500)
//           .json({ status: "error", message: "Internal server error" });
//       } else {
//         res
//           .status(201)
//           .json({ status: "success", message: "Product added successfully" });
//       }
//     }
//   );
// });

// module.exports = router;
