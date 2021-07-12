const express = require('express');
const router = express.Router();

//เรียกมาจาก controllers
const { create } = require("../controller/category.js");

router.post('/create', create);

module.exports = router;