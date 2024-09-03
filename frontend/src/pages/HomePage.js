/**
 * File: HomePage.js
 * Description: This is the home page component for the Bil-CMS application. It renders the home page view.
 * Created on: 05-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Importing the React library
import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

// Importing the Login and Signup components
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom";

// For custom themes
//import { extendTheme } from "@chakra-ui/react";
//import { containerTheme } from "./components/Container";

/* const theme = extendTheme({
  // add a custom color scheme
  colors: {
    bilkentRed: {
      500: "#ed1c24 ",
    },
    bilkentBlue: {
      500: "#1f4fa2",
    },
  },
}); */

// The HomePage component
// This is a functional component that returns a JSX element
// The JSX element is a div with the text 'Home'
const HomePage = () => {
  const history = useHistory(); // useHistory hook to redirect the user

  // useEffect hook to check if the user is already logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    // If the user is already logged in, redirect them to the chats page
    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="x1" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={6}
        bg={"red.900"}
        maxW="960px"
        //colorScheme="bilkentRed"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        // center text in the box
        alignItems="center"
      >
        <Text
          fontSize="30px"
          fontFamily={"sans-serif, bold"}
          color={"white"}
          fontWeight={"600"}
          // center text in the box
          textAlign="center"
          //fontStyle={""}
        >
          Bil-CMS Communication Hub
        </Text>
      </Box>

      <Box
        bg="gray.300"
        w="100%"
        p={4}
        color={"black"}
        maxW="960px"
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Tabs variant="soft-rounded" colorScheme="red">
          <TabList mb="1em">
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

// Exporting the HomePage component
// This allows it to be imported and used in other files
export default HomePage;
