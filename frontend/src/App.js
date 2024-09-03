/**
 * File: App.js
 * Description: This is the main application file for the Bil-CMS application. It sets up the routing for the application.
 * Created on: 04-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Importing required dependencies and components
import "./App.css"; // Importing the main CSS file
import { Route } from "react-router-dom"; // Importing 'Route' from 'react-router-dom' for routing
import HomePage from "./pages/HomePage"; // Importing the HomePage component
import ChatPage from "./pages/ChatPage"; // Importing the ChatPage component
import { Button } from "@chakra-ui/button"; // Importing the Button component from Chakra UI

// The main App component
function App() {
  return (
    // Wrapping the routes in a div with class 'App'
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

// Exporting the App component so it can be used in other files
export default App;
