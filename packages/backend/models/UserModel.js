// models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

UserSchema.pre("save", function (next) {
	if (!this.isModified("password")) return next();
	this.password = bcrypt.hashSync(this.password, 10);
	next();
});

module.exports = mongoose.model("User", UserSchema);
