/**
 * UserBadgeItem.js
 *
 * This file defines a React component that renders a user badge item.
 *
 * Dependencies:
 * - @chakra-ui/icons: Chakra UI component library's icons
 * - @chakra-ui/layout: Chakra UI component library's layout components
 *
 * The UserBadgeItem component receives the following props:
 * - user: An object representing the user, which should include a 'name' and '_id' property
 * - handleFunction: A function to be executed when the badge is clicked
 * - admin: The '_id' of the user who is an admin
 *
 * The component renders a 'Badge' component from Chakra UI with the user's name. If the user is an admin,
 * it appends '(Admin)' to the name. It also includes a 'CloseIcon' from Chakra UI.
 *
 * @param {Object} props - The props that are passed to this component
 * @param {Object} props.user - The user object, which should include a 'name' and '_id' property
 * @param {Function} props.handleFunction - The function to be executed when the badge is clicked
 * @param {String} props.admin - The '_id' of the user who is an admin
 * @returns {JSX.Element} The rendered UserBadgeItem component
 *
 * @author Eren Ozen
 * @version 2.0
 * @studentId 21803591
 * @team Code Benders
 */

// Importing necessary modules
import { CloseIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/layout";

// UserBadgeItem component
const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
    <Badge
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}
      {admin === user._id && <span> (Admin)</span>}
      <CloseIcon pl={1} />
    </Badge>
  );
};

// Exporting the UserBadgeItem component
export default UserBadgeItem;
