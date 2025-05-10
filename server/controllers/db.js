const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password", // Replace with your MySQL password
  database: "ecommerce", // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the MySQL database");
  }
});

module.exports = db;
