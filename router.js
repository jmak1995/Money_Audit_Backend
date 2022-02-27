const express = require("express");
const router = express.Router();
// const home = require("./controllers/home");
const login = require("./controllers/login");
const signup = require("./controllers/signup");

// router.get("/", home);
router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
