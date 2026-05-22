import { Route, Routes } from 'react-router-dom'
import Home from './pages/client/Home'
import Gallery from './pages/client/Gallery'
import Service from './pages/client/Service'
import Review from './pages/client/Review'
import Contact from './pages/client/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Service />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/reviews" element={<Review />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
