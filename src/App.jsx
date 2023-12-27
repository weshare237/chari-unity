import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Testimonial from './Pages/Testimonial'
import About from './Pages/About'
import Team from './Pages/Team'
import SharedLayout from './Components/SharedLayout'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Donate from './Pages/Donate'
import Causes from './Pages/Causes'
import ErrorPage from './Pages/Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          {/* <Route path='team' element={<Team />} /> */}
          <Route path='contact' element={<Contact />} />
          <Route path='testimonials' element={<Testimonial />} />
          <Route path='services' element={<Service />} />
          <Route path='donate' element={<Donate />} />
          <Route path='causes' element={<Causes />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
