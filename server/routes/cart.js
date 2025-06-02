const express = require("express");
const db = require("../db/db");
const router = express.Router();

router.post("/", (req, res) => {
  const { userId, productId, quantity } = req.body;

  db.query(
    "INSERT INTO cart (userId, productId, quantity) VALUES (?, ?, ?)",
    [userId, productId, quantity],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ status: "error", message: "Internal server error" });
      } else {
        res
          .status(201)
          .json({ status: "success", message: "Item added to cart" });
      }
    }
  );
});

router.get("/:userId", (req, res) => {
  const { userId } = req.params;

  db.query("SELECT * FROM cart WHERE userId = ?", [userId], (err, results) => {
    if (err) {
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    } else {
      res.status(200).json(results);
    }
  });
});

router.delete("/:cartId", (req, res) => {
  const { cartId } = req.params;

  db.query("DELETE FROM cart WHERE id = ?", [cartId], (err, results) => {
    if (err) {
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    } else {
      res
        .status(200)
        .json({ status: "success", message: "Item removed from cart" });
    }
  });
});

module.exports = router;
