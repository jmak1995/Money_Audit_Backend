const express = require("express");
const router = express.Router();
const home = require("./controllers/home");
const login = require("./controllers/login");
const signup = require("./controllers/signup");

router.get("/", home);

router.get("/login", login);

router.get("/signup", signup);

module.exports = router;
