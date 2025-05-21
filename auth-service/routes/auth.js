const express = require('express');
const router = express.Router();
const { register, login, verifyToken } = require('../controller/authController');
router.post('/create', authMiddleware, createBook);

router.post('/register', register);
router.post('/login', login);
router.get('/verify', verifyToken);

module.exports = router;
