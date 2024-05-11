const express = require("express");
const {
  registerUser,
  loginUser,
  updateUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.patch("/", updateUser);

module.exports = router;
