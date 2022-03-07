const db = require("../database/connection");
const express = require("express");
var jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res) => {
  const token = req.cookies.user;
  if (token) {
    const user = jwt.verify(token, process.env.JWT_KEY);
    db.query(
      "SELECT amount, transaction_type, transcation_date FROM users INNER JOIN transactions ON users.id = transactions.user_id WHERE username = $1",
      [user.user]
    ).then(({ rows }) => {
      res.send({ username: user, data: rows });
    });
  }
};
// if no token go to login/signup
