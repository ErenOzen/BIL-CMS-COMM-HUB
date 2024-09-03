/**
 * messageRoutes.js
 *
 * This file defines the routes for the message-related endpoints of the application.
 * It uses the Express.js framework for routing and the messageControllers for the route handlers.
 * The authMiddleware is used to protect the routes, ensuring that only authenticated users can access them.
 *
 * Dependencies:
 * - express: For routing.
 * - messageControllers: For the route handlers.
 * - authMiddleware: For protecting the routes.
 *
 * Routes:
 * - GET /:chatId: Fetches all messages for a specific chat. Requires authentication.
 * - POST /: Sends a message. Requires authentication.
 *
 * Created on: 11-May-24
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Import the required dependencies
const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");

// Initialize the router
const router = express.Router();

// Define the routes
router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

// Export the router
module.exports = router;
