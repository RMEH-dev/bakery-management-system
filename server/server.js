const express = require('express');
const path = require('path'); 
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path: './.env'});

const app = express();

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});



app.set('view engine')

db.connect((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Database Connected...')
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(5000, () =>{ console.log('listening on port 5000') })
