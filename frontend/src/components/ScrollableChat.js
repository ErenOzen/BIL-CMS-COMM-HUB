/**
 * ScrollableChat.js
 *
 * This file contains the definition of the ScrollableChat component.
 * This component is responsible for displaying a list of chat messages in a scrollable container.
 * It uses the Chakra UI library for the UI elements and react-scrollable-feed for the scrollable container.
 *
 * Dependencies:
 * - @chakra-ui/avatar: For the avatar UI element.
 * - @chakra-ui/tooltip: For the tooltip UI element.
 * - react-scrollable-feed: For the scrollable container.
 * - isLastMessage, isSameSender, isSameSenderMargin, isSameUser from "../config/ChatLogics": For determining the display of the messages.
 * - ChatState from "../Context/ChatProvider": For the chat context.
 *
 * Props:
 * - messages: An array of chat messages to be displayed.
 *
 * Created on: 11-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Import necessary dependencies
import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";

//
const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  // Render the chat messages in a scrollable container
  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  src={m.sender.pic}
                />
              </Tooltip>
            )}
            <span
              style={{
                backgroundColor: `${
                  m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                }`,
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
              }}
            >
              {m.content}
            </span>
          </div>
        ))}
    </ScrollableFeed>
  );
};

//
export default ScrollableChat;
