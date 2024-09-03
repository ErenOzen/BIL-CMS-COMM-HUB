/**
 * UserListItem.js
 *
 * This file contains the UserListItem component which is responsible for rendering
 * a list item representing a user in the application. The component displays the user's
 * avatar, name, and email.
 *
 * The UserListItem component receives two props:
 * - 'user': an object containing the user's information (name, pic, email)
 * - 'handleFunction': a function to be executed when the list item is clicked
 *
 * Dependencies:
 * - react: Used to define and render the UserListItem component
 * - @chakra-ui/avatar: Used for the Avatar component
 * - @chakra-ui/layout: Used for the Box and Text components
 *
 * Created on: 11-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { ChatState } from "../../Context/ChatProvider";

const UserListItem = ({ user, handleFunction }) => {
  // const { user } = ChatState();

  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="blue.100"
      _hover={{
        background: "blue.600",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
