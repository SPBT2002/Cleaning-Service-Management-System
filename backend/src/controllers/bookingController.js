const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');

const createBooking = asyncHandler(async (req, res) => {
  const { customerName, email, phone, address, notes, serviceName, date, timeSlot } = req.body;

  if (!customerName || !email || !phone || !address || !serviceName || !date || !timeSlot) {
    res.status(400);
    throw new Error('Missing required booking fields');
  }

  const booking = await Booking.create({
    user: req.user._id,
    customerName,
    email,
    phone,
    address,
    notes: notes || '',
    serviceName,
    date,
    timeSlot,
    status: 'Pending',
  });

  res.status(201).json(booking);
});

const getMyBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.status(200).json(bookings);
});

module.exports = { createBooking, getMyBookings };
