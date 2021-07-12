const express = require('express');
const router = express.Router();

const { user , profile , signup } = require("../controller/user.js");

router.post('/signup', signup);
router.get('/user', user);
router.get('/profile', profile);

module.exports = router;