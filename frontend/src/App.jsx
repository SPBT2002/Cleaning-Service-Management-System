import { Route, Routes } from 'react-router-dom'
import Home from './pages/client/Home'
import Gallery from './pages/client/Gallery'
import Service from './pages/client/Service'
import Review from './pages/client/Review'
import Contact from './pages/client/Contact'
import SignIn from './pages/login-pages/SignIn'
import SignUp from './pages/login-pages/SignUp'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminBookings from './pages/admin/AdminBookings'
import AdminServices from './pages/admin/AdminServices'
import AdminGallery from './pages/admin/AdminGallery'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Service />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/reviews" element={<Review />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/bookings" element={<AdminBookings />} />
      <Route path="/admin/services" element={<AdminServices />} />
      <Route path="/admin/gallery" element={<AdminGallery />} />
    </Routes>
  )
}

export default App
