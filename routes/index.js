const express = require("express");
const router = express.Router();

const authRoutes = require('./auth.routes.js');
router.use('/auth', authRoutes);

const authUser = require("../middlewares/authUser.js");

const {getApp, addItem} = require("../controllers/app.controllers.js")

router.get("/", authUser, getApp)
router.post("/", authUser, addItem)

module.exports = router;