const express = require('express');
const { createBook, getMyBooks, getBookById } = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createBook);
router.get('/getBooks', authMiddleware, getMyBooks);
router.get('/:id', authMiddleware, getBookById);

module.exports = router;
