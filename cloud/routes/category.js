const express = require('express');
const router = express.Router();

//เรียกมาจาก controllers
const { create, list } = require("../controller/category.js");

router.post('/category/create', create);
router.get('/categories', list);

module.exports = router;