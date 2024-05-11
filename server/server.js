const express = require("express"); //instance of express library created
const cors = require("cors");
const db = require('./src/api/models/databaseConnection')
const authRoutes = require("./src/api/routes/authRoutes");



const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/routes", authRoutes)

const PORT = process.env.PORT || 5000

//port assign to the backend server for successful connection requests
app.listen(PORT, () => {
  console.log("listening on port 5000");
});

// module.exports = db;
