/**
 * messageControllers.js
 *
 * This file contains the controllers for the message-related endpoints of the application.
 * It uses the express-async-handler package to handle asynchronous route handlers,
 * and the Mongoose models for Message, User, and Chat to interact with the database.
 *
 * Dependencies:
 * - express-async-handler: For handling asynchronous route handlers.
 * - Message, User, Chat from "../models": For interacting with the database.
 *
 * Controllers:
 * - allMessages: Fetches all messages for a specific chat. It populates the sender and chat fields of the messages.
 * - sendMessage: Creates a new message. It checks if the required data (content and chatId) are provided in the request body.
 * It then creates a new message and populates the sender, chat, and users fields of the message.
 *
 * Created on: 11-May-24
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Import the required dependencies
const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");
const User = require("../models/userModel");
const Chat = require("../models/chatModel");

//@description     Get all Messages
//@route           GET /api/Message/:chatId
//@access          Protected
const allMessages = asyncHandler(async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "name pic email")
      .populate("chat");
    res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

//@description     Create New Message
//@route           POST /api/Message/
//@access          Protected
const sendMessage = asyncHandler(async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);

    message = await message.populate("sender", "name pic");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "name pic email",
    });

    //
    await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

    res.json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// Export the controllers
module.exports = { allMessages, sendMessage };
