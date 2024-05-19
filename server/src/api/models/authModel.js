const db = require("../../config/databaseConnection");
const bcrypt = require("bcrypt");

const createUser = (user, callback) => {
  const {
    userType,
    userID,
    firstName,
    lastName,
    userName,
    email,
    contact,
    password,
    confirmPassword,
  } = user;

  bcrypt.hash(
    password,
    confirmPassword,
    10,
    (err, hashedPassword, hashedConfirmPassword) => {
      if (err) return callback(err);
      const sqlCreateUser = `INSERT INTO user (userType, userID, firstName, lastName, userName, email, contact, password, confirmPassword)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      db.query(
        sqlCreateUser,
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
        callback
      );
    }
  );
};

const findUserByEmailOrContact = (email, contact, callback) => {
  const query = `SELECT * FROM user WHERE email = ? OR contact = ?`;
  db.query(query, [email, contact], callback);
};

const getUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM user WHERE email = ?";
  db.query(sql, [email], callback);
};

module.exports = {
  getUserByEmail,
  findUserByEmailOrContact,
  createUser,
};
