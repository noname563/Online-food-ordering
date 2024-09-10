const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../model/User.jsx");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  body("email").isEmail(),
  body("password", "Incorrect len").isLength({ min: 5 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User with this email already exists" }] });
      }

      const salt = await bcrypt.genSalt(10);
      const encodedpassword = await bcrypt.hash(req.body.password, salt);
      User.create({
        name: req.body.name,
        password: encodedpassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  body("email").isEmail(),
  body("password", "Incorrect len").isLength({ min: 5 }),
  async (req, res) => {
    let email = req.body.email;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const userdata = await User.findOne({ email });
      if (!userdata) {
        return res.status(400).json({ errors: "enter correct details" });
      }
      const passwordMatch = await bcrypt.compare(req.body.password, userdata.password);
      if (passwordMatch) {
        res.json({ success: true });
      } else {
        return res.status(400).json({ errors: "Incorrect email or password" });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
