const express = require("express");
const router = express.Router();

const {Hash} = require("../controllers/userController");

router.post("/search", Hash)


module.exports = router;
