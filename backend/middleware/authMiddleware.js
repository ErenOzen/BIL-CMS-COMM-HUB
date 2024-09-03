/**
 * File: authMiddleware.js
 * Description: This file defines a middleware function for protecting routes. It checks if a valid JWT token is provided in the request headers. If the token is valid, it adds the user object to the request and calls the next middleware. If the token is not valid or not provided, it sends a 401 Unauthorized response.
 * Created on: 09-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Import required dependencies
const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

// Middleware function to protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    //checks if token exists and starts with Bearer
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //splits token from Bearer
      token = req.headers.authorization.split(" ")[1];

      // Bearer $token

      //decodes token id
      //finds user by id and removes password
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //finds user by id and removes password
      req.user = await User.findById(decoded.id).select("-password");

      next();

      //if token is not valid
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  //if token does not exist
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

// Export the protect middleware
module.exports = { protect };
