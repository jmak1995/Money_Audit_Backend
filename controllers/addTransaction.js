const db = require("../database/connection");
const express = require("express");
var jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res) => {
  const token = req.cookies.user;
  const data = req.body;
  if (token) {
    const user = jwt.verify(token, process.env.JWT_KEY);
    db.query("SELECT id FROM users WHERE username = $1", [user.user]).then(
      ({ rows }) => {
        db.query(
          "INSERT INTO transactions (amount, transaction_type, user_id) VALUES ($1,$2,$3)",
          [data.amount, data.transaction_type, rows[0].id]
        ).then(() => {
          res.send({
            adding: true,
          });
        });
      }
    );
  } else {
    res.redirect("/login");
  }
};
// if not token send to login
