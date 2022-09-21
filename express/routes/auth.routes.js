const express = require("express");
const router = express.Router();

const { createUser, checkPassword, check_duplicate_email } = require('./../middlewares/auth.middlewares.js');

const { responseToken, signOut } = require('../controllers/auth.controllers.js');

router.post('/signin', checkPassword, responseToken)

router.post('/signup', check_duplicate_email, createUser, responseToken)

router.get('/signout', signOut)

module.exports = router