const express = require('express');
const { getProfile, updateProfile,getMyBooks,registerBook } = require('../controllers/userController');
const middleware = require('../middleware/authMiddleware');

const router = express.Router();
router.post('/create', middleware, registerBook);
router.get('/mybooks', middleware,getMyBooks);
router.get('/profile', middleware,getProfile);
router.put('/updateProfile', middleware, updateProfile);

module.exports = router;
