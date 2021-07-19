const express = require('express');
const router = express.Router();

const { users , profile , signup } = require("../controller/user.js");

router.post('/signup', signup);
router.get('/users', users);
router.get('/profile', profile);

module.exports = router;