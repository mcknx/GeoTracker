// routes/IPHistoryRoute.js
const express = require("express");
const router = express.Router();
const IPHistoryController = require("../controllers/IPHistoryController");
const authenticate = require("../middlewares/authenticate");

router.get("/ipinfo/:ip", authenticate, IPHistoryController.getGeoData);

module.exports = router;
