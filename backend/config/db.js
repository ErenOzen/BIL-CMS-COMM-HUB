/**
 * File: db.js
 * Description: This file sets up the connection to the MongoDB database using Mongoose. It exports a function that connects to the database and logs any errors.
 * Created on: 07-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

// Import the mongoose library
const mongoose = require("mongoose");

// This function connects to the MongoDB database using Mongoose
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

// Export the connectDB function
module.exports = connectDB;
