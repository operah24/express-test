const express = require("express");
const bookRoute = require("./books");

const router = new express.Router();

router.use(bookRoute)

module.exports = router