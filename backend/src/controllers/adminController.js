const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');

const getDashboardStats = asyncHandler(async (req, res) => {
  const [totalBookings, pendingCount, confirmedCount, completedCount, cancelledCount] = await Promise.all([
    Booking.countDocuments(),
    Booking.countDocuments({ status: 'Pending' }),
    Booking.countDocuments({ status: 'Confirmed' }),
    Booking.countDocuments({ status: 'Completed' }),
    Booking.countDocuments({ status: 'Cancelled' }),
  ]);

  const recentBookings = await Booking.find()
    .sort({ createdAt: -1 })
    .limit(8)
    .select('customerName serviceName date timeSlot status createdAt');

  res.status(200).json({
    stats: {
      totalBookings,
      pendingCount,
      confirmedCount,
      completedCount,
      cancelledCount,
    },
    recentBookings,
  });
});

const getAllBookings = asyncHandler(async (req, res) => {
  const { status, q } = req.query;
  const filter = {};

  if (status && status !== 'All') {
    filter.status = status;
  }

  if (q) {
    const regex = new RegExp(String(q), 'i');
    filter.$or = [{ customerName: regex }, { serviceName: regex }, { email: regex }, { phone: regex }];
  }

  const bookings = await Booking.find(filter).sort({ createdAt: -1 });
  res.status(200).json(bookings);
});

const updateBookingStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const allowed = ['Pending', 'Confirmed', 'Completed', 'Cancelled'];
  if (!allowed.includes(status)) {
    res.status(400);
    throw new Error('Invalid status');
  }

  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    res.status(404);
    throw new Error('Booking not found');
  }

  booking.status = status;
  await booking.save();

  res.status(200).json(booking);
});

const updateBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    res.status(404);
    throw new Error('Booking not found');
  }

  const fields = ['customerName', 'email', 'phone', 'address', 'notes', 'serviceName', 'date', 'timeSlot', 'status'];
  fields.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(req.body, key)) {
      booking[key] = req.body[key];
    }
  });

  await booking.save();
  res.status(200).json(booking);
});

const deleteBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    res.status(404);
    throw new Error('Booking not found');
  }

  await booking.deleteOne();
  res.status(200).json({ message: 'Booking deleted' });
});

module.exports = { getDashboardStats, getAllBookings, updateBookingStatus, updateBooking, deleteBooking };
