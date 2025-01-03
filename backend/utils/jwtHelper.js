const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET;  

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h'});  //{user} and {id: user._id} both generate the exp time
};

const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
};

module.exports = { generateToken, verifyToken };