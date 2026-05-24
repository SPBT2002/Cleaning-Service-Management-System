import { Route, Routes } from 'react-router-dom'
import Home from './pages/client/Home'
import Gallery from './pages/client/Gallery'
import Service from './pages/client/Service'
import Review from './pages/client/Review'
import Contact from './pages/client/Contact'
import SignIn from './pages/login-pages/SignIn'
import SignUp from './pages/login-pages/SignUp'

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
    </Routes>
  )
}

export default App
