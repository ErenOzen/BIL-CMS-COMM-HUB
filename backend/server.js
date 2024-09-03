/**
 * File: server.js
 * Description: This is the main server file for the Bil-CMS application. It sets up and starts the Express server.
 * Created on: 04-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Importing required dependencies
// Express is used to create the server
// dotenv is used to manage environment variables
// nodemon is used for hot-reloading the server during development
// To install these dependencies, run the command: npm install express dotenv nodemon
const express = require("express");
const dotenv = require("dotenv");
const nodemon = require("nodemon");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const messageRoutes = require("./routes/messageRoutes");
const path = require("path"); 

// Load environment variables from .env file
dotenv.config();

// Import the chat data
connectDB();

// This is the initial version of the file and will be improved in future iterations.
// This file sets up the server, defines routes, and starts the server.
// It is used for testing the API.
// Initialize express application
const app = express();

// Define middleware to parse JSON data
app.use(express.json());

// Define a route handler for the home page
// When a GET request is made to the home page, the API status is returned
//app.get("/", (req, res) => {
  // Send a response indicating that the API is running
  //res.send("API is running...");
//});

// Define routes for user and chat
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------


// Define error handling middleware
app.use(notFound);
app.use(errorHandler);

// Define the port number
const PORT = process.env.PORT || 5000;

// Update needed on the
const server = app.listen(
  PORT,
  console.log(`Server is running on port ${PORT}`)
);

// Socket.io setup
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

// Socket.io connection
io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  //
  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  //
  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  //
  socket.off("setup", () => {
    console.log("USER DISCONNECTED"); //
    socket.leave(userData._id);
  });
});
