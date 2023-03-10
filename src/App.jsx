import { useState } from 'react'
import './css/App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavbarComponent from './components/NavbarComponent'
import Home from './routes/Home'
import Contact from './routes/Contact'

import FooterComponent from './components/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarComponent />}>

            <Route index element={<Home />} />
            <Route  path="/contact" element={<Contact />} />

          </Route>
        </Routes>
      </BrowserRouter>
      <FooterComponent/>
    </>


  )
}

export default App
