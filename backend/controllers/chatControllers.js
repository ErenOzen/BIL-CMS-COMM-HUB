/**
 * File: chatControllers.js
 * Description: This file defines the controller functions for the chat routes. It includes the 'accessChat' function which handles the logic for accessing a chat between two users.
 * If a chat already exists between the two users, it returns the chat data. If not, it prepares the data to create a new chat.
 * The function uses the 'express-async-handler' middleware for error handling of async functions and Mongoose for database operations.
 * It also uses the 'User' and 'Chat' models defined in the application.
 *
 * Created on: 09-May-24
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Import the required dependencies
const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");

// Controller function to access a chat between two users
const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  // Check if the userId parameter is provided
  if (!userId) {
    console.log("UserID parameter not sended with request");
    return res.sendStatus(400);
  }

  // Check if the chat already exists between the two users
  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );

      res.status(200).send(FullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

// Controller function to fetch all chats of the user
const fetchChats = asyncHandler(async (req, res) => {
  try {
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updateAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name pic email",
        });

        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

//
const createGroupChat = asyncHandler(async (req, res) => {
  if (!req.body.users || !req.body.name) {
    return res.status(400).send({ message: "Please Fill all the fields" });
  }

  var users = JSON.parse(req.body.users);

  if (users.length < 2) {
    return res
      .status(400)
      .send("More than 2 users are required to form a group chat");
  }

  users.push(req.user);

  try {
    const groupChat = await Chat.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: req.user,
    });

    const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    res.status(200).json(fullGroupChat);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

//
const renameGroup = asyncHandler(async (req, res) => {
  // Get the chatId and newName parameters from the request body
  const { chatId, chatName } = req.body;

  // Check if the chatId and newName parameters are provided
  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    {
      chatName,
    },
    { new: true }
  )
    // Populate the users and groupAdmin fields of the chat
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  // Check if the chat is updated successfully
  if (!updatedChat) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(updatedChat);
  }
});

// Controller function to remove a user from a group chat
const addToGroup = asyncHandler(async (req, res) => {
  // Get the chatId and userId parameters from the request body
  const { chatId, userId } = req.body;

  // Check if the chatId and userId parameters are provided
  const added = await Chat.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId },
    },
    { new: true }
  )
    // Populate the users and groupAdmin fields of the chat
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  // Check if the user is added to the group chat successfully
  if (!added) {
    res.status(404);
    throw new Error("Chat Not Found, User Not Added");
  } else {
    res.json(added);
  }
});

// Controller function to remove a user from a group chat
const removeFromGroup = asyncHandler(async (req, res) => {
  // Get the chatId and userId parameters from the request body
  const { chatId, userId } = req.body;

  // Check if the chatId and userId parameters are provided
  const removed = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    { new: true }
  )
    // Populate the users and groupAdmin fields of the chat
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  // Check if the user is removed to the group chat successfully
  if (!removed) {
    res.status(404);
    throw new Error("Chat Not Found, User Not removed");
  } else {
    res.json(removed);
  }
});

// Export the accessChat function
module.exports = {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
};
