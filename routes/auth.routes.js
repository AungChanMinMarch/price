const express = require("express");
const router = express.Router();
const { createUser, checkPassword } = require('./../middlewares/auth.middlewares.js')
const { signIn, signUp, signOut } = require('../controllers/auth.controllers.js')
router.post('/signin', checkPassword, signIn)

router.post('/signup', createUser, signUp)

router.get('/signout', signOut)

module.exports = router