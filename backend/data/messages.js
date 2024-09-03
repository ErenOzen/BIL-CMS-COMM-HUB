/**
 * FOR TEST PURPOSES ONLY
 *
 * messages.js
 *
 * This file contains an array of message objects for testing or seeding the database.
 * Each message object includes the following properties:
 * - readBy: An array of user IDs who have read the message.
 * - _id: The unique ID of the message.
 * - sender: An object containing the sender's information, including their profile picture URL, unique ID, and name.
 * - content: The content of the message.
 * - chat: The unique ID of the chat that the message belongs to.
 * - createdAt: The timestamp of when the message was created.
 * - updatedAt: The timestamp of when the message was last updated.
 * - __v: The version key, used internally by Mongoose.
 *
 * This data can be used for testing the chat functionality of the application.
 *
 * Created on: 11-May-24
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

export const messages = [
  {
    readBy: [],
    _id: "60a3f2ed0c8dcc43bc3cfff2",
    sender: {
      pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      _id: "1",
      name: "Piyush",
    },
    content: "Hello There",
    chat: "60a3de1ff381d830b884998d",
    createdAt: "2021-05-18T17:01:33.332Z",
    updatedAt: "2021-05-18T17:01:33.332Z",
    __v: 0,
  },
  {
    readBy: [],
    _id: "60a3f47ece619262c884b77d",
    sender: {
      pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      _id: "2",
      name: "John Doe",
    },
    content: "Yo Wassup!",
    chat: "60a3de1ff381d830b884998d",
    createdAt: "2021-05-18T17:08:14.447Z",
    updatedAt: "2021-05-18T17:08:14.447Z",
    __v: 0,
  },
  {
    readBy: [],
    _id: "60a3f47ece619262c884b77d",
    sender: {
      pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      _id: "2",
      name: "John Doe",
    },
    content: "How's it going!",
    chat: "60a3de1ff381d830b884998d",
    createdAt: "2021-05-18T17:09:14.447Z",
    updatedAt: "2021-05-18T17:09:14.447Z",
    __v: 0,
  },
  {
    readBy: [],
    _id: "60a3f2ed0c8dcc43bc3cfff2",
    sender: {
      pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      _id: "1",
      name: "Piyush",
    },
    content: "All good!",
    chat: "60a3de1ff381d830b884998d",
    createdAt: "2021-05-18T17:011:33.332Z",
    updatedAt: "2021-05-18T17:011:33.332Z",
    __v: 0,
  },
  {
    readBy: [],
    _id: "60a3f2ed0c8dcc43bc3cfff2",
    sender: {
      pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      _id: "1",
      name: "Piyush",
    },
    content: "What About You?",
    chat: "60a3de1ff381d830b884998d",
    createdAt: "2021-05-18T17:01:12.332Z",
    updatedAt: "2021-05-18T17:01:12.332Z",
    __v: 0,
  },
  {
    readBy: [],
    _id: "60a3f47ece619262c884b77d",
    sender: {
      pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      _id: "2",
      name: "John Doe",
    },
    content: "Same, Thank You!",
    chat: "60a3de1ff381d830b884998d",
    createdAt: "2021-05-18T17:09:14.447Z",
    updatedAt: "2021-05-18T17:09:14.447Z",
    __v: 0,
  },
  {
    readBy: [],
    _id: "60a3f47ece619262c884b77d",
    sender: {
      pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      _id: "2",
      name: "John Doe",
    },
    content: "What Techonologies are you learning these days?",
    chat: "60a3de1ff381d830b884998d",
    createdAt: "2021-05-18T17:09:16.447Z",
    updatedAt: "2021-05-18T17:09:16.447Z",
    __v: 0,
  },
  {
    readBy: [],
    _id: "60a3f2ed0c8dcc43bc3cfff2",
    sender: {
      pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      _id: "1",
      name: "Piyush",
    },
    content: "Just the MERN Stack",
    chat: "60a3de1ff381d830b884998d",
    createdAt: "2021-05-18T17:01:18.332Z",
    updatedAt: "2021-05-18T17:01:18.332Z",
    __v: 0,
  },
  {
    readBy: [],
    _id: "60a3f47ece619262c884b77d",
    sender: {
      pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      _id: "2",
      name: "John Doe",
    },
    content: "From Roadside Coder?",
    chat: "60a3de1ff381d830b884998d",
    createdAt: "2021-05-18T17:19:16.447Z",
    updatedAt: "2021-05-18T17:19:16.447Z",
    __v: 0,
  },
  {
    readBy: [],
    _id: "60a3f2ed0c8dcc43bc3cfff2",
    sender: {
      pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      _id: "60a281bc502ec30428fb6bb0",
      name: "Piyush",
    },
    content: "Yea boiii..",
    chat: "60a3de1ff381d830b884998d",
    createdAt: "2021-05-18T17:20:18.332Z",
    updatedAt: "2021-05-18T17:20:18.332Z",
    __v: 0,
  },
];
