// models/IPHistory.js
const mongoose = require("mongoose");

const IPHistorySchema = new mongoose.Schema({
	ip: { type: String, required: true },
	geoData: { type: Object, required: true },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("IPHistory", IPHistorySchema);
