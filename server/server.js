const express = require("express"); //instance of express library created
const path = require("path");
const mysql = require("mysql2/promise"); //instance of mysql library created
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

async function connectToDatabase() {
  try {
    const db = mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
    });
    console.log("connected to MySQL database");
    return db;
  } catch (error) {
    console.error("error connecting to MySQL database", error);
    throw error;
  }
}

//function to produce unique userID in the database
// async function generateUniqueUserId() {
//   let userId;
//   do {
//     // Generate random 3-digit number (001 - 999)
//     userId = `U${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;

//     // Check if ID already exists in the database
//     const [rows] = await pool.query('SELECT * FROM users WHERE userID = ?', [userId]);
//   } while (rows.length > 0);

//   return userId;
// }
// Function to generate a unique userID
function generateUserID() {
  const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let userID = "U";
  for (let i = 0; i < 3; i++) {
    userID += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return userID;
}

// Check if a user with the given email or contact already exists
app.post("/checkExistingUser", (req, res) => {
  const { email, contact } = req.body;
  const query = "SELECT * FROM users WHERE email = ? OR contact = ?";
  connection.query(query, [email, contact], (err, results) => {
    if (err) {
      console.error("Error checking existing user:", err);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    res.json({ exists: results.length > 0 });
  });
});

// post method to get the data from client to the database
// app.post("/signUp", async (req, res) => {
//   // const {firstName, lastName, email, userName, contact, password, confirmPassword } = req.body;
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const email = req.body.email;
//   const userName = req.body.userName;
//   const contact = req.body.contact;
//   const password = req.body.password;
//   const confirmPassword = req.body.confirmPassword;

//   //function to hash password
//   async function hashPassword(password) {
//     const saltRounds = 10; // Adjust salt rounds as needed (higher = more secure)
//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     return hashedPassword;
//   }

//   async function hashPassword2(confirmPassword) {
//     const saltRounds = 10; // Adjust salt rounds as needed (higher = more secure)
//     const hashedPassword = await bcrypt.hash(confirmPassword, saltRounds);
//     return hashedPassword;
//   }

//   // Validate user input (refer to the validation section below)

//   try {
//     const db = await connectToDatabase();

//     // Check for existing email or contact
//     const [existingUser] = await db.query(
//       "SELECT * FROM user WHERE email = ? OR contact = ?",
//       [email, contact]
//     );

//     if (existingUser.length > 0) {
//       res
//         .status(400)
//         .json({ message: "Email or contact number already exists" });
//       return;
//     }

//     const userId = await generateUniqueUserId();

//     // Hash passwords
//     const passwordHash = await passwordHash(password);
//     const confirmPasswordHash = await confirmPasswordHash(confirmPassword);

//     // Insert user data into database
//     const result = await db.query(
//       "INSERT INTO user (`firstName`, `lastName`, `email`, `userName`, `contact`, `password`, `confirmPassword`) VALUES (?, ?, ?, ?, ?, ?, ?)",
//       [
//         firstName,
//         lastName,
//         email,
//         userName,
//         contact,
//         passwordHash,
//         confirmPasswordHash,
//       ]
//     );
//     res.status(201).json({ message: "User created successfully", userId });
//   } catch (error) {
//     console.error("Error during signup:", error);
//     res.status(500).json({ message: "Internal server error creating user!" }); // Handle errors gracefully
//   }

//   // db.query(
//   //   "INSERT INTO user (`firstName`, `lastName`, `email`, `userName`, `contact`, `password`, `confirmPassword`) VALUES (?, ?, ?, ?, ?, ?, ?)",
//   //   [firstName, lastName, email, userName, contact, password, confirmPassword],
//   //   (err, result) => {
//   //     if (err) {
//   //       return res.json(err);
//   //     } else {
//   //       return res.json(result);
//   //     }
//   //   }
//   // );
// });

// Register a new user
app.post("/signUp", (req, res) => {
  const { firstName, lastName, userName, email, contact, password, confirmPassword } = req.body;
  const userID = generateUserID(); // Generate a unique userID
  const query = "INSERT INTO user (userID, firstName, lastName, userName, email, contact, password, confirmPassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  connection.query(query, [userID, firstName, lastName, userName, email, contact, password, confirmPassword], (err, results) => {
    if (err) {
      console.error("Error creating user:", err);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    res.status(201).json({ message: "User created successfully" });
  });
});


app.set("view engine");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

//Post method to do upload images (product images) to the filesystem
app.post("/productImages", upload.single("productImage"), (req, res) => {
  console.log(req.file);
});

//port assign to the backend server for successful connection requests
app.listen(5000, () => {
  console.log("listening on port 5000");
});
