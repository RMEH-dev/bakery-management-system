const express = require("express"); //instance of express library created
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { generateUserID } = require("../helpers/generateUserID");
const db = require("../models/databaseConnection");

const app = express();

const mySecretKey = crypto.randomBytes(32).toString("hex");

app.use(cors());
app.use(express.json());

//Logic to check whether the user already exists
exports.checkExistingUser = (req, res) => {
  const { email, contact } = req.body;
  const query = "SELECT * FROM user WHERE email = ? OR contact = ?";
  db.query(query, [email, contact], (err, results) => {
    if (err) {
      console.error("Error checking existing user:", err);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    res.json({ exists: results.length > 0 });
  });
};

// Register a new user with the specified email
exports.signUp = async (req, res) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    contact,
    password,
    confirmPassword,
  } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Hash the confirmPassword (if needed)
    const hashedConfirmPassword = await bcrypt.hash(confirmPassword, 10);

    const userType = "Customer"; //setting default user type as Customer
    const userID = generateUserID(); // Generate a unique userID
    const query =
      "INSERT INTO user (userType, userID, firstName, lastName, userName, email, contact, password, confirmPassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [
        userType,
        userID,
        firstName,
        lastName,
        userName,
        email,
        contact,
        hashedPassword,
        hashedConfirmPassword,
      ],
      (err, results) => {
        if (err) {
          console.error("Error creating user:", err);
          res.status(500).json({ message: "Internal server error" });
          return;
        }
        // Create JWT token
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
          expiresIn: "1h", // Token expires in 1 hour
        });
        res.status(201).json({ message: "User created successfully", token });
      }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// User login functionality
exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Please provide both email and password" });
  }

  try {
    // Check if the user exists in the database
    db.query(
      "SELECT * FROM user WHERE email = ?",
      [email],
      async (error, results) => {
        if (error) {
          throw error;
        }

        if (results.length === 0) {
          return res.status(401).json({ error: "Invalid credentials" });
        }

        // Compare the provided password with the hashed password from the database
        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          return res.status(401).json({ error: "Invalid credentials" });
        }

        // Passwords match, generate JWT token
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
          expiresIn: "1h", // Token expires in 1 hour
        });

        // Passwords match, login successful
        return res
          .status(200)
          .json({
            message: "Login successful",
            token,
            userType: user.userType,
          });
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred during login" });
  }
};
