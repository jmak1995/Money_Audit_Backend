const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(4000, () => {
  console.log("running on http://localhost:4000");
});
