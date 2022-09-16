const express = require("express");
const router = express.Router();

const authUser = require("../middlewares/authUser.js");
const { addMemory, getMemories } = require("../controllers/memory.controllers.js");

router.get("/", authUser, getMemories);
router.post("/", authUser, addMemory);

module.exports = router;