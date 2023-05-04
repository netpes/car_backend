const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const port = 2000;
const user = require("./views/user")




// Put these statements before you define any routes.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin: "https://carproject.pages.dev/"}));
app.use("/",user)
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});



http.listen(port, () => {
  console.log(` running at http://localhost:${port}/`);
});
