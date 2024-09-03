/**
 * File: userControllers.js
 * Description: This file defines the controller functions for the User resource. It handles the business logic for user registration, authentication, and data retrieval.
 * Created on: 07-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Importing required dependencies
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { response } = require("express");
const generateToken = require("../config/generateToken");

// This function registers a new user in the system
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User with the e-mail already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,

      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create the User");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
  {
  }
});

// /api/user?search=eren
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        // mongodb or operator to search for a string
        $or: [
          // mongodb regex operator to search for a string
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  // find all users except the logged in user
  // const users = await User.find(keyword);
  const users = await User.find(keyword).find({ _id: { $ne: req.user_id } }); // left it for a debug
  res.send(users);
  //console.log(keyword);
});

module.exports = { registerUser, authUser, allUsers };
