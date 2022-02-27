const db = require("../database/connection");

module.exports = (req, res) => {
  db.query("SELECT username FROM users WHERE username = $1", [
    req.body.username,
  ]).then(({ rows }) => {
    if (rows[0]) {
      res.send({ error: "username already exists" });
    } else {
      db.query("INSERT INTO users (username,password) VALUES($1,$2)", [
        req.body.username,
        req.body.password,
      ]);
    }
  });
};
