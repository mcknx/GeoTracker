// routes/UserRoute.js
const { Router } = require("express"); // Import the Router from Express
const router = Router();
const { login, register } = require("../controllers/UserController");

router.post("/login", login);

router.post("/register", register);

module.exports = router;
