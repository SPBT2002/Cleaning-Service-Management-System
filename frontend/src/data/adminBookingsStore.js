const initialBookings = [
  { id: 1, name: 'Sarah M.', phone: '+1 555 001 0001', email: 'sarah@mail.com', service: 'Deep Cleaning', date: '2025-06-10', time: '10:00 AM', status: 'Confirmed', address: '', notes: '' },
  { id: 2, name: 'James K.', phone: '+1 555 002 0002', email: 'james@mail.com', service: 'Office Cleaning', date: '2025-06-11', time: '09:00 AM', status: 'Cancelled', address: '88 Corp Ave', notes: '' },
  { id: 3, name: 'Priya D.', phone: '+1 555 003 0003', email: 'priya@mail.com', service: 'Sofa Cleaning', date: '2025-06-12', time: '02:00 PM', status: 'Confirmed', address: '', notes: '' },
  { id: 4, name: 'Tom W.', phone: '+1 555 004 0004', email: 'tom@mail.com', service: 'Carpet Cleaning', date: '2025-06-13', time: '11:00 AM', status: 'Completed', address: '', notes: '' },
  { id: 5, name: 'Lisa R.', phone: '+1 555 005 0005', email: 'lisa@mail.com', service: 'Kitchen Cleaning', date: '2025-06-14', time: '01:00 PM', status: 'Cancelled', address: '', notes: '' },
  { id: 6, name: 'Mark S.', phone: '+1 555 006 0006', email: 'mark@mail.com', service: 'Bathroom Cleaning', date: '2025-06-15', time: '03:00 PM', status: 'Pending', address: '', notes: '' },
]

let bookings = initialBookings
const listeners = new Set()

function emitChange() {
  listeners.forEach((listener) => listener())
}

export function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function getBookingsSnapshot() {
  return bookings
}

export function updateBooking(id, patch) {
  bookings = bookings.map((booking) => (booking.id === id ? { ...booking, ...patch } : booking))
  emitChange()
}

export function deleteBooking(id) {
  bookings = bookings.filter((booking) => booking.id !== id)
  emitChange()
}

export function resetBookings() {
  bookings = initialBookings
  emitChange()
}
