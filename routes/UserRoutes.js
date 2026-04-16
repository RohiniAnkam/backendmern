const express = require("express");
const router = express.Router();

const { register, login, getUser } = require("../controllers/UserController");
const auth = require("../middleware/Auth");

router.post("/register", register);
router.post("/login", login);
router.get("/getuser", auth, getUser);

module.exports = router;