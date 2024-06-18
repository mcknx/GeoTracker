// controllers/UserController.js
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "mckeen2024";

module.exports.login = async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
		return res.status(400).send("Invalid credentials");
	}
	const token = jwt.sign({ id: user.id }, JWT_SECRET);
	res.send({ token });
};

// controllers/UserController.js
exports.register = async (req, res) => {
	const user = new User(req.body);
	await user.save();
	res.status(201).send({ message: "User registered successfully" });
};
