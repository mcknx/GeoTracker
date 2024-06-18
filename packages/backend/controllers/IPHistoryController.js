// controllers/IPHistoryController.js
const axios = require("axios");
const IPHistory = require("../models/IPHistory");

module.exports.getGeoData = async (req, res) => {
	const response = await axios.get(`https://ipinfo.io/${req.params.ip}/geo`);
	console.log(req.user)
	const ipHistory = new IPHistory({
		ip: req.params.ip,
		geoData: response.data,
		user: req.user.id,
	});
	await ipHistory.save();
	res.send(response.data);
};
