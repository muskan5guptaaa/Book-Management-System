const User = require('../model/userModel');

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

exports.getMyBooks = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const response = await axios.get('http://localhost:5002/api/books/create', {
      headers: {
        Authorization: token,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching books from book-service:', error.message);
    res.status(500).json({ message: 'Failed to fetch books' });
  }
};