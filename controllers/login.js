const db = require("../database/connection");
const express = require("express");
var jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res) => {
  db.query("SELECT username , password FROM users WHERE username =$1", [
    req.body.username,
  ]).then(({ rows }) => {
    if (rows[0]) {
      if (rows[0].password === req.body.password) {
        var token = jwt.sign(
          { username: req.body.username },
          process.env.JWT_KEY
          // {
          //   expiresIn: 120,
          // }
        );
        res.cookie("user", token);
        res.send({ message: `Welcome ${req.body.username}` });
      } else {
        res.send({ error: "wrong password" });
      }
    } else {
      res.send({ error: "username does not exist" });
    }
  });
};
