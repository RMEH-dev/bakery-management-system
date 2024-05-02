const express = require("express"); //instance of express library created
const path = require("path"); 
const mysql = require("mysql"); //instance of mysql library created
const dotenv = require("dotenv");
const cors = require("cors");



dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());




// database configuration and connection
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

// database successful connection validation
db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Database Connected...");
  }
});

// post method to get the data from client to the database
app.post("/signUp", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const userName = req.body.userName;
  const contact = req.body.contact;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  db.query(
    "INSERT INTO user (`firstName`, `lastName`, `email`, `userName`, `contact`, `password`, `confirmPassword`) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [firstName, lastName, email, userName, contact, password, confirmPassword],
    (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    }
  );
});

app.set("view engine");


// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });


//port assign to the backend server for successful connection requests
app.listen(5000, () => {
  console.log("listening on port 5000");
});
