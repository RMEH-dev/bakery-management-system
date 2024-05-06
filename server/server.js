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
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});


// database configuration and connection

async function connectToDatabase(){
  try {
    const db = mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
    });
    console.log('connected to MySQL database');
    return db;
  } catch (error) {
    console.error('error connecting to MySQL database', error);
    throw error;
  }
}

// // database successful connection validation
// db.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Database Connected...");
//   }
// });

// post method to get the data from client to the database
app.post("/signUp", async (req, res) => {
  // const {firstName, lastName, email, userName, contact, password, confirmPassword } = req.body;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const userName = req.body.userName;
  const contact = req.body.contact;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

   // Validate user input (refer to the validation section below)

   try {
    const db = await connectToDatabase();

    // Check for existing email or contact
    const existingUser = await db.query(
        'SELECT * FROM user WHERE email = ? OR contact = ?',
        [email, contact]
    );

    if (existingUser[0].length > 0) {
        res.status(400).json({ message: 'Email or contact number already exists' });
        return;
    }

    // Hash password securely
    const salt = await bcryptjs.genSalt(10);
    const passwordHash = await bcryptjs.hash(password, salt);
    const salt2 = await bcryptjs.genSalt(10);
    const passwordHash2 = await bcryptjs.hash(confirmPassword, salt2);

    // Insert user data into database
    await db.query(
      "INSERT INTO user (`firstName`, `lastName`, `email`, `userName`, `contact`, `password`, `confirmPassword`) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [firstName, lastName, email, userName, contact, passwordHash, passwordHash2]
    );

    res.status(201).json({ message: 'User created successfully' });
} catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' }); // Handle errors gracefully
} finally {
    // Close connection if open
}


  // db.query(
  //   "INSERT INTO user (`firstName`, `lastName`, `email`, `userName`, `contact`, `password`, `confirmPassword`) VALUES (?, ?, ?, ?, ?, ?, ?)",
  //   [firstName, lastName, email, userName, contact, password, confirmPassword],
  //   (err, result) => {
  //     if (err) {
  //       return res.json(err);
  //     } else {
  //       return res.json(result);
  //     }
  //   }
  // );
});

app.set("view engine");


// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

//Post method to do upload images (product images) to the filesystem
app.post('/productImages', upload.single('productImage'), (req, res) =>{
  console.log(req.file);
});


//port assign to the backend server for successful connection requests
app.listen(5000, () => {
  console.log("listening on port 5000");
});
