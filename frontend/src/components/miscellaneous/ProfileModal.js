/**
 * ProfileModal.js
 *
 * This file contains the ProfileModal component which is responsible for rendering
 * a modal with user profile information. The modal can be triggered by either clicking
 * on the provided children elements or a default IconButton.
 *
 * The ProfileModal component receives a 'user' prop which should contain the user's
 * information to be displayed in the modal.
 *
 * Dependencies:
 * - react: Used to define and render the ProfileModal component
 * - @chakra-ui/react: Used for the Modal and related components, IconButton, Image, Text, etc.
 * - @chakra-ui/icons: Used for the ViewIcon component
 *
 *
 * Created on: 11-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Import necessary dependencies
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Button,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import React from "react";

// Define the ProfileModal component
const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}

      <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent height="360px">
          <ModalHeader
            fontSize="24px"
            fontFamily="sans-serif"
            display="flex"
            justifyContent="center"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              alt={user.name}
            />
            <Text
              fontSize={{ base: "12px", md: "16px" }}
              fontFamily="sans-serif"
            >
              Email: {user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

// Export the ProfileModal component
export default ProfileModal;
