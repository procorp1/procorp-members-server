const router = require("express").Router();
const authController = require("../controller/auth.controller");

router.post("/signup", authController.createUser);

module.exports = router;
