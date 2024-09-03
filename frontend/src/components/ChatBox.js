/**
 * ChatBox.js
 *
 * This file contains the ChatBox component which is responsible for rendering
 * the chat box in the application. Currently, it simply renders a div with the
 * text "Chat Box".
 *
 * Dependencies:
 * - react: Used to define and render the ChatBox component
 *
 * Created on: 11-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Import necessary modules
import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

// Define the ChatBox component
const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  // Return the JSX code for the ChatBox component
  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "50%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

//
export default ChatBox;
