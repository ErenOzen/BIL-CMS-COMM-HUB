/**
 * File: userRoutes.js
 * Description: This file defines the routes for the User resource. It uses Express Router to create the routes and connects them to the appropriate controller functions.
 * Created on: 07-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Importing required dependencies
const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Define the routes for the User resource
router.route("/").post(registerUser).get(protect, allUsers);

router.post("/login", authUser);

//router.route("/").get(allUsers);

// Export the router
module.exports = router;
