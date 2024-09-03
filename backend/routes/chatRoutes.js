/**
 * File: chatRoutes.js
 * Description: This file defines the routes for the Chat resource. It uses Express Router to create the routes and connects them to the appropriate controller functions. All routes are protected and require a valid JWT token.
 * Created on: 09-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Import required dependencies
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
} = require("../controllers/chatControllers");
// const { fetchChats } = require("../controllers/chatControllers");

// Import the chat controller
const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

// Export the chat router
module.exports = router;
