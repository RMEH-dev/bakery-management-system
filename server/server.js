const express = require("express"); //instance of express library created
const cors = require("cors");
const db = require("./src/config/databaseConnection");
const authRoutes = require("./src/api/routes/authRoutes");
const rawStockRoutes = require("./src/api/routes/rawStockRoutes");
const proStockRoutes = require("./src/api/routes/proStockRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/routes", authRoutes)
app.use("/api/routes", rawStockRoutes);
app.use("/api/routes", proStockRoutes);

const PORT =5000

//port assign to the backend server for successful connection requests
app.listen(PORT, () => {
  console.log("listening on port 5000");
});

// module.exports = db;
