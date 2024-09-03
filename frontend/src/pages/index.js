/**
 * index.js
 *
 * This is the entry point for the React application.
 *
 * Imports:
 * - React: A JavaScript library for building user interfaces.
 * - createRoot: A function from the React DOM library for creating a root node for concurrent mode.
 * - DemoApp: The main React component for the application.
 * - index.css: The main CSS file for the application.
 *
 * On DOMContentLoaded event, a root node is created and appended to the body of the document.
 * The DemoApp component is then rendered into this root node.
 *
 * Created on: 12-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

import React from "react";
import { createRoot } from "react-dom/client";
import DemoApp from "./DemoApp";
import "./index.css";

document.addEventListener("DOMContentLoaded", function () {
  createRoot(document.body.appendChild(document.createElement("div"))).render(
    <DemoApp />
  );
});
