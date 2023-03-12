import { useState } from 'react'
import './css/App.css'

import { HashRouter, Routes, Route } from "react-router-dom"

import NavbarComponent from './components/NavbarComponent'
import Home from './routes/Home'
import Contact from './routes/Contact'

import FooterComponent from './components/FooterComponent'

import UtilityMaps from './routes/UtilityMaps'
import DesignMaps from './routes/DesignMaps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<NavbarComponent />}>

            <Route index element={<Home />} />
            <Route  path="/contact" element={<Contact />} />
            <Route  path="/util_maps" element={<UtilityMaps />} />
            <Route  path="/design_maps" element={<DesignMaps />} />


          </Route>
        </Routes>
      </HashRouter>
      <FooterComponent/>
    </>


  )
}

export default App

// Insatead of HashRouter (for gh-pages subdir path),
// we could use <BrowserRouter basename='/path/to/subfolder/'>
// ref: https://muffinman.io/blog/react-router-subfolder-on-server/