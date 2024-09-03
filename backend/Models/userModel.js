/**
 * File: userModel.js
 * Description: This file defines the schema for the User model using Mongoose. It represents the structure of a user document in MongoDB.
 * Created on: 06-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Import the required modules
// const e = require("express");
const mongoose = require("mongoose");

// Import the bcrypt module to hash the user password
const bcrypt = require("bcryptjs");

// Define the schema for the User model
const userSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", required: true, unique: true }, // may update later
    password: { type: "String", required: true },
    pic: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Middleware to hash the user password before saving it to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
