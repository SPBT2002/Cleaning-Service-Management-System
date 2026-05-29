const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const sanitizeUser = (user) => ({
  id: user._id,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  role: user.role,
});

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error('First name, last name, email and password are required');
  }

  const exists = await User.findOne({ email: email.toLowerCase() });
  if (exists) {
    res.status(409);
    throw new Error('Email already registered');
  }

  const user = await User.create({ firstName, lastName, email: email.toLowerCase(), password, role: 'user' });

  res.status(201).json({
    user: sanitizeUser(user),
    token: generateToken({ id: user._id, role: user.role }),
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password are required');
  }

  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user || !(await user.matchPassword(password))) {
    res.status(401);
    throw new Error('Invalid email or password');
  }

  res.status(200).json({
    user: sanitizeUser(user),
    token: generateToken({ id: user._id, role: user.role }),
  });
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: String(email || '').toLowerCase() });
  if (!user || user.role !== 'admin' || !(await user.matchPassword(password || ''))) {
    res.status(401);
    throw new Error('Invalid admin credentials');
  }

  res.status(200).json({
    user: sanitizeUser(user),
    token: generateToken({ id: user._id, role: user.role }),
  });
});

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ user: sanitizeUser(req.user) });
});

module.exports = { registerUser, loginUser, loginAdmin, getMe };
