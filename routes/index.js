const express = require("express");
const router = express.Router();

const authRoutes = require('./auth.routes.js');
const memoriesRoutes = require('./memories.routes.js');

router.use('/auth', authRoutes);
router.use('/memories', memoriesRoutes);

module.exports = router;