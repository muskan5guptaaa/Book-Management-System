const Book = require('../models/bookModel');

exports.createBook = async (req, res) => {
  const { title, author, description } = req.body;

  try {
    const book = await Book.create({
      title,
      author,
      description,
      user: req.user.id
    });

    res.status(201).json({ success: true, book });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getMyBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.user.id });
    res.json({ success: true, books });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id, user: req.user.id });
    if (!book) return res.status(404).json({ message: 'Book not found' });

    res.json({ success: true, book });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
