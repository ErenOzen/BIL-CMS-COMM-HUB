/**
 * File: Signup.js
 * Description: This file defines the Signup component for the application. It handles user registration and form validation.
 * Created on: 07-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Importing the required libraries and hooks
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
import React from "react";
import { useState } from "react";
import axios from "axios"; // For image upload function
import { useHistory } from "react-router-dom";

// The Signup component
const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handleClick = () => setShow(!show);

  const postDetails = (pics) => {
    setLoading(true);

    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (
      pics.type !== "image/jpeg" &&
      pics.type !== "image/png" &&
      pics.type !== "image/jpg"
    ) {
      toast({
        title: "Please Select a JPEG or PNG Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dxgxby6xm");
      axios
        .post("https://api.cloudinary.com/v1_1/dxgxby6xm/image/upload", data)
        .then((response) => {
          console.log("Cloudinary response:", response);
          setPic(response.data.url.toString());
          setLoading(false);
          toast({
            title: "Image uploaded successfully!",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
        })
        .catch((error) => {
          console.log("Cloudinary error:", error);
          setLoading(false);
        });
    }
  };

  // Checking all the fields
  const submitHandler = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmpassword) {
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
        "/api/user",
        { name, email, password, pic },
        config
      );
      toast({
        title: "User Registered Successfully!",
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
        //description: error.response.data.message,
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
      <FormControl id="first-name" isRequired mb="5">
        <FormLabel color={"Black"}>Name</FormLabel>

        <Input
          // change color of the input field frame
          borderColor={"black"}
          //borderWidth={"1px"}
          //focusBorderColor="red"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" isRequired mb="5">
        <FormLabel color={"Black"}>Email</FormLabel>

        <Input
          // change color of the input field frame
          borderColor={"black"}
          //borderWidth={"1px"}
          //focusBorderColor="red"
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

      <FormControl id="password" isRequired mb="5">
        <FormLabel color={"Black"}>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            // change color of the input field frame
            borderColor={"black"}
            type={show ? "text" : "password"}
            //borderWidth={"1px"}
            //focusBorderColor="red"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" color={"blue"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic" isRequired mb="5">
        <FormLabel color={"Black"}>Upload Your Picture</FormLabel>

        <Input
          type="file"
          p={1.5}
          accept="image/*"
          // change color of the input field frame
          borderColor={"black"}
          //borderWidth={"1px"}
          //focusBorderColor="red"
          //placeholder="Enter Your Email"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
