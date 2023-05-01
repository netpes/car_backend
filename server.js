const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const port = process.env.PORT || 2000;
const user = require("./views/user")




// Put these statements before you define any routes.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin: "https://7ba50f4d.carproject.pages.dev/"}));
app.use("/",user)




http.listen(port, () => {
  console.log(` running at http://localhost:${port}/`);
});
