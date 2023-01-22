const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

router.get("/", function (req, res, next) {
  res.send("test");
});

router.post("/", async (req, res, next) => {
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

router.post("/login", async (req, res, next) => {
  const user = await User.findOne({ where: { username: req.body.username } });
  if (user) {
    const password_valid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (password_valid) {
      token = jwt.sign(
        { id: user.id, username: user.username, first_name: user.first_name },
        process.env.SECRET
      );
      res.status(200).json({ token: token });
    } else {
      res.status(400).json({ error: "Password Incorrect" });
    }
  } else {
    res.status(404).json({ error: "User does not exist!" });
  }
});

router.get("/me", async (req, res, next) => {
  try {
    let token = req.headers["authorization"].split(" ")[1];
    let decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Couldn't Authenticate" });
  }
},
async(req, res, next)=>{
    let user = await User.findOne({where:{id : req.user.id}, attributes:{exclude:["password"]}});
    if(user === null){
        res.status(404).json({message : "User not found"});
    }
    res.status(200).json(user)
});

module.exports = router