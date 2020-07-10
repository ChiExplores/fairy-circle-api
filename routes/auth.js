const express = require("express");
const router = express.Router();

const { login, logout, guest, signup } = require("../controllers/auth");

router.post("/signup", signup);
router.post("/login", login);
router.post("/guest", guest);
router.post("/logout", logout);

module.exports = router;
