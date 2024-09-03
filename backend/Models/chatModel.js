/**
 * File: chatModel.js
 * Description: This file defines the schema for the Chat model using Mongoose. It represents the structure of a chat document in MongoDB.
 * Created on: 06-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Import the required modules
const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

// Define the schema for the Chat model
const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    Timestamp: true,
  }
);

// Create the Chat model
const Chat = mongoose.model("Chat", chatModel);

// Export the Chat model
module.exports = Chat;
