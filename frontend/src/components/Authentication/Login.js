/**
 * File: Login.js
 * Description: This file defines the Login component for the application. It handles user authentication and form validation.
 * Created on: 07-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Importing the required libraries and hooks
import React from "react";
import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import { set } from "mongoose";
import { useState } from "react";
import axios from "axios"; // For image upload function
import { useHistory } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  //const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  //const [confirmpassword, setConfirmpassword] = useState();
  //const [pic, setPic] = useState();

  const toast = useToast();
  const history = useHistory();
  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please fill all the fields!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    // Checking matching passwords
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Login Successful!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "User Registration Failed!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing="5px" color="Black">
      <FormControl id="email" isRequired mb="5">
        <FormLabel color={"Black"}>Email</FormLabel>

        <Input
          // change color of the input field frame
          borderColor={"black"}
          //borderWidth={"1px"}
          //focusBorderColor="red"
          value={email}
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired mb="5">
        <FormLabel color={"Black"}>Password</FormLabel>
        <InputGroup>
          <Input
            // change color of the input field frame
            borderColor={"black"}
            type={show ? "text" : "password"}
            value={password}
            //borderWidth={"1px"}
            //focusBorderColor="red"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" color={"blue"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>

      <Button
        variant="solid"
        colorScheme="red"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Test Credentials
      </Button>
    </VStack>
  );
};

export default Login;
