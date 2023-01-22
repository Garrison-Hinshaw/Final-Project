const express = require("express");
const router = express.Router();
const Models = require("./../models");
const db = require("../models")

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const {User} = db 

router.get("/", function (req, res) {
  res.send("test");
});

router.post("/", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const make_user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    password: await bcrypt.hash(req.body.password, salt),
  };
  created_user = await User.create(make_user);
  res.status(201).json(created_user);
});

router.post("/login", async (req, res) => {
  console.log(req.body, "testing login", User)
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    console.log("we found a user")
    const password_valid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (password_valid) {
      token = jwt.sign(
        { id: user.id, username: user.username, first_name: user.first_name },
        process.env.SECRET
      );
      res.status(200).json({ token, user });
    } else {
      res.status(400).json({ error: "Password Incorrect" });
    }
  } else {
    res.status(404).json({ error: "User does not exist!" });
  }
});

router.get(
  "/me",
  async (req, res) => {
    try {
      let token = req.headers["authorization"].split(" ")[1];
      let decoded = jwt.verify(token, process.env.SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ message: "Couldn't Authenticate" });
    }
  },
  async (req, res) => {
    let user = await User.findOne({
      where: { id: req.user.id },
      attributes: { exclude: ["password"] },
    });
    if (user === null) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  }
);

module.exports = router;
