const express = require("express");
const addTransaction = require("./controllers/addTransaction");
const router = express.Router();
const home = require("./controllers/home");
const login = require("./controllers/login");
const signup = require("./controllers/signup");
const checkAuth = require("./middleware/checkAuth");
// const home = require("./controllers/transactions");

router.get("/", checkAuth, home);
router.post("/login", login);
router.post("/signup", signup);
router.post("/addInfo", checkAuth, addTransaction);

module.exports = router;
