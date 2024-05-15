const express = require("express");
const router = new express.Router();
const imageRoutes = require("./imageRoutes")

router.use("/api", imageRoutes)

module.exports = router;