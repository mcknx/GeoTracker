// middlewares/authenticate.js
const jwt = require("jsonwebtoken");
const JWT_SECRET = "mckeen2024";

function authenticate(req, res, next) {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).send("No authorization header");
	}

	const token = authHeader.split(" ")[1];
	jwt.verify(token, JWT_SECRET, (err, user) => {
		if (err) {
			return res.status(403).send("Invalid token");
		}

		req.user = user;
		next();
	});
}

module.exports = authenticate;
