const express = require("express");
const router = express.Router();

const authUser = require("../middlewares/authUser.js");
const { getMemory } = require("../controllers/memory.controllers.js");

router.get('/:type/:id', authUser, getMemory)

module.exports = router;