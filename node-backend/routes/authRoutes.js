const express = require("express");
const router = express.Router();
const { createUser } = require("../utils/auth/createUser");
const { authenticateUser } = require("../utils/auth/authenticateUser");
const User = require("../models/userModel");
// login to existing account route
router.post("/login", async (req, res) => {
  try {
    let { username, password } = req.body;
    username = username.trim();
    password = password.trim();

    // throws error if any field is empty
    if (!(username && password)) {
      throw Error("ERR_EMPTY_FIELD");
    }

    const authenticatedUser = await authenticateUser({ username, password });

    res.status(200).json({ token: authenticatedUser.token });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// register new account route
router.post("/register", async (req, res) => {
  try {
    let { username, email, password, role } = req.body;
    username = username.trim();
    email = email.trim();
    password = password.trim();

    const existingEmail = await User.findOne({ email });
    const existingUser = await User.findOne({ username });

    // throws error if any field is empty
    if (!(username && email && password)) {
      throw Error("ERR_EMPTY_FIELDS");
    }

    // throws error if email is already registerd
    else if (existingEmail) {
      throw Error("EMAIL_ALREADY_REGISTERED");
    }

    // throws error if the length of password is less than 8
    else if (password.length < 8) {
      throw Error("ERR_SHORT_PASSWORD");
    }

    // validates mail address provided with regex and sends error otherwise
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      throw Error("ERR_INVALID_EMAIL");
    }

    // throws error if username is already taken
    else if (existingUser) {
      throw Error("USERNAME_TAKEN");
    }

    // if the credentials are good then create a new user
    else {
      const newUser = await createUser({
        username,
        email,
        password,
        role,
      });
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
});


module.exports = router;
