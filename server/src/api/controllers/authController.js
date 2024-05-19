const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  getUserByEmail,
  createUser,
  findUserByEmailOrContact,
} = require("../models/authModel");
const jwtConfig = require("../../config/jwt");
const { generateUserID } = require("../helpers/generateUserID");

//Logic to check whether the user already exists
exports.checkExistingUser = (req, res) => {
  const { email, contact } = req.body;

  findUserByEmailOrContact(email, contact, (err, results) => {
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
    findUserByEmailOrContact(email, contact, (err, results) => {
      if (err) {
        console.error("Error checking existing user:", err);
        res.status(500).json({ message: "Internal server error" });
        return;
      }
      if (results.length > 0) {
        res.status(400).json({ message: "User already exists" });
        return;
      }

      // If user does not exist, create a new user
      const userType = "Customer"; //setting default user type as Customer
      const userID = generateUserID(); // Generate a unique userID

      createUser(
        {
          userType,
          userID,
          firstName,
          lastName,
          userName,
          email,
          contact,
          password,
          confirmPassword,
        },
        (err, results) => {
          if (err) {
            console.error("Error creating user:", err);
            res.status(500).json({ message: "Internal server error" });
            return;
          }
          // Create JWT token
          const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: jwtConfig.expiresIn,
          });
          res.status(201).json({ message: "User created successfully", token });
        }
      );
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  };
};



// User login functionality
exports.login = (req, res) => {
  const { email, password } = req.body;

  getUserByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(400).json({ message: "Invalid credentials" });

    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!isMatch)
        return res.status(400).json({ message: "Invalid credentials" });

      const token = jwt.sign(
        { id: user.id, email: user.email },
        jwtConfig.secret,
        {
          expiresIn: jwtConfig.expiresIn,
        }
      );

      res.json({ token });
    });
  });
};
