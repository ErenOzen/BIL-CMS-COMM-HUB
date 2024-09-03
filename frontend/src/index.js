/**
 * File: index.js
 * Description: This is the entry point for the Bil-CMS application. It sets up the React application and renders the root component.
 * Created on: 05-May-24
 *
 * @author Eren Ozen
 * @version 2.0
 * @studentId 21803591
 * @team Code Benders
 */

// Importing the required dependencies
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Importing the main CSS file
import App from "./App"; // Importing the main App component
import { BrowserRouter } from "react-router-dom"; // Importing the BrowserRouter component from 'react-router-dom'
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";

// Rendering the root component
/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
); */

ReactDOM.render(
  <BrowserRouter>
    <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ChatProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
