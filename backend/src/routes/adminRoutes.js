const express = require('express');
const {
  getDashboardStats,
  getAllBookings,
  updateBookingStatus,
  updateBooking,
  deleteBooking,
} = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect, adminOnly);

router.get('/stats', getDashboardStats);
router.get('/bookings', getAllBookings);
router.patch('/bookings/:id/status', updateBookingStatus);
router.patch('/bookings/:id', updateBooking);
router.delete('/bookings/:id', deleteBooking);

module.exports = router;
