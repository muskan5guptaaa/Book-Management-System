const User = require('../model/userModel');
const axios = require('axios');


exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateProfile = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();

    res.json({ success: true, message: 'Profile updated', user });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

//Fetch books detail using axios
exports.getMyBooks = async (req, res) => {
  try {
    const token = req.headers.authorization;
    console.log("Received Token in user-service:", token); 
    const response = await axios.get('http://localhost:5002/api/books/getBooks', {
      headers: {
        Authorization: token,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching books from book-service:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ message: 'Failed to fetch books' });
  }
};

exports.registerBook = async (req, res) => {
  try {
    const token = req.headers.authorization;
    console.log("Received Token for book creation:", token); 

    const { title, author, description } = req.body;

    const response = await axios.post(
      'http://localhost:5002/api/books/create',
      { title, author, description },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error creating book via book-service:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ message: 'Failed to create book' });
  }
};

