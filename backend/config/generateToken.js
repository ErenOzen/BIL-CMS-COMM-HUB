/**
 * File: generateToken.js
 * Description: This file defines a function to generate a JSON Web Token (JWT) for user authentication. The token is used to verify the identity of users in subsequent requests.
 * Created on: 07-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Importing required dependencies
const e = require("express");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "120d",
  });
};

// Export the generateToken function
module.exports = generateToken;
