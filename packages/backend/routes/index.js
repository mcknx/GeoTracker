// index.js
const { Router } = require("express");
const router = Router();
const userRouter = require("./UserRoute");
const ipHistoryRouter = require("./IPHistoryRoute");

router.use("/api/user", userRouter);
router.use("/api", ipHistoryRouter);

module.exports = router;