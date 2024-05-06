const express = require("express"); //instance of express library created
const path = require("path");
const mysql = require("mysql"); //instance of mysql library created
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");

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
    })

    db.connect((err) => {
      if (err) {
        console.error("error connecting to MySQL database", err);
        throw err;
    }else{
      console.log('connected to MySQL database');
    }
  })

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
app.post("/signUp", (req, res) => {
  const { firstName, lastName, userName, email, contact, password, confirmPassword } = req.body;
  const userID = generateUserID(); // Generate a unique userID
  const query = "INSERT INTO user (userID, firstName, lastName, userName, email, contact, password, confirmPassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(query, [userID, firstName, lastName, userName, email, contact, password, confirmPassword], (err, results) => {
    if (err) {
      console.error("Error creating user:", err);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    res.status(201).json({ message: "User created successfully" });
  });
});

//Function to create the unique USER ID
function generateUserID() {
  const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let userID = "U";
  for (let i = 0; i < 3; i++) {
    userID += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
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
