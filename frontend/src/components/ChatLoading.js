/**
 * ChatLoading.js
 *
 * This file contains the ChatLoading component which is responsible for rendering
 * a loading state for the chat. It displays a stack of skeleton components that
 * mimic the look of the chat while the actual chat content is being loaded.
 *
 * Dependencies:
 * - react: Used to define and render the ChatLoading component
 * - @chakra-ui/react: Used for the Stack and Skeleton components
 *
 * Created on: 11-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Import necessary dependencies
import React from "react";
import { Stack, Skeleton } from "@chakra-ui/react";

// Define the ChatLoading component
export const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
    </Stack>
  );
};
