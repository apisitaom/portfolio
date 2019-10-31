const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function verifyToken(token) {
    const decode = jwt.verify(token, process.env.SECRET);
    return decode;
}

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function generateToken(datas) {
    const token = jwt.sign({
        data: datas
    }, 
        process.env.SECRET, { expiresIn: '30d' }
    );
    return token;
}

function comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
}

function hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

module.exports = {
    verifyToken,
    isValidEmail,
    generateToken,
    comparePassword,
    hashPassword
}