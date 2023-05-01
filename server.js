const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const port = process.env.PORT || 2000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const user = require("./views/user")



app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);
// Put these statements before you define any routes.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/",user)




http.listen(port, () => {
  console.log(` running at http://localhost:${port}/`);
});
