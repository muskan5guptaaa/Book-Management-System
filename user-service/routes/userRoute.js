const express = require('express');
const { getProfile, updateProfile } = require('../controllers/userController');
const middleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', middleware,getProfile);
router.put('/profile', middleware, updateProfile);

module.exports = router;
