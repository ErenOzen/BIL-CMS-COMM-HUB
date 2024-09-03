/**
 * File: messageModel.js
 * Description: This file defines the schema for the Message model using Mongoose. It represents the structure of a message document in MongoDB.
 * Created on: 06-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Import the required modules
const mongoose = require("mongoose");

// Define the schema for the Message model
const messageModel = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageModel);

module.exports = Message;
