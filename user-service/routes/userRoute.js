const express = require('express');
const { getProfile, updateProfile,getMyBooks } = require('../controllers/userController');
const middleware = require('../middleware/authMiddleware');

const router = express.Router();
router.get('/mybooks', middleware,getMyBooks);
router.get('/profile', middleware,getProfile);
router.put('/profile', middleware, updateProfile);

module.exports = router;
