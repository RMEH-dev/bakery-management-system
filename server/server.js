const express = require("express"); //instance of express library created
const path = require("path");
const mysql = require("mysql"); //instance of mysql library created
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const mySecretKey = crypto.randomBytes(32).toString('hex');



dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());

// Using multer to store images in local filesystem
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/products");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

// database configuration and connection

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error("error connecting to MySQL database", err);
    throw err;
  } else {
    console.log("connected to MySQL database");
  }
});

//Logic to check whether the user already exists
app.post("/checkExistingUser", (req, res) => {
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
});

// Register a new user with the specified email
app.post("/signUp", async (req, res) => {
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

    const userID = generateUserID(); // Generate a unique userID
    const query =
      "INSERT INTO user (userID, firstName, lastName, userName, email, contact, password, confirmPassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [
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
});

// User login functionality
app.post("/login", (req, res) => {
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
        return res.status(200).json({ message: "Login successful" });
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred during login" });
  }
});

//Function to create the unique USER ID
function generateUserID() {
  const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let userID = "U";
  for (let i = 0; i < 3; i++) {
    userID += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    );
  }
  return userID;
}

app.set("view engine");

//Post method to do upload images (product images) to the filesystem
app.post("/productImages", upload.single("productImage"), (req, res) => {
  console.log(req.file);
});

//port assign to the backend server for successful connection requests
app.listen(5000, () => {
  console.log("listening on port 5000");
});
