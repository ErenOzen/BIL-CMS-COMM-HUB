/**
 * ChatProvider.js
 *
 * This file contains the ChatProvider component which is responsible for providing
 * chat-related context to other components in the application. It uses React's
 * Context API to create a context that can be consumed by other components.
 *
 * The ChatProvider component maintains the state of the current user and provides
 * a function to update this state. It also checks if the user is already logged in
 * when the component is first rendered, and redirects to the home page if not.
 *
 * Dependencies:
 * - react: Used to create the component and manage state
 * - react-router-dom: Used to redirect the user
 *
 *
 * Created on: 11-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Import necessary modules
import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// Create a new context
const ChatContext = createContext();

// ChatProvider component
const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);

  const history = useHistory();

  // useEffect hook to check if the user is already logged in
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      history.push("/");
    }
  }, [history]);

  // Return the ChatContext.Provider component
  return (
    <ChatContext.Provider
      value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats }}
    >
      {children}
    </ChatContext.Provider>
  );
};

// ChatState function
export const ChatState = () => {
  return useContext(ChatContext);
};

// Export the ChatProvider component
export default ChatProvider;
