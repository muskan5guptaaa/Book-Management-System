const jwt = require('jsonwebtoken');
const SECRET = 'your_secret';

exports.generateToken = (payload) => jwt.sign(payload, SECRET, { expiresIn: '1h' });
exports.verifyToken = (token) => jwt.verify(token, SECRET);
