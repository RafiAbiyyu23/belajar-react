import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Cuaca from './Pages/Cuaca'
import Portofolio from './Pages/Portofolio'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element= {<Home />} />
    <Route path="/about" element= {<About />} />
    <Route path="/cuaca" element= {<Cuaca />} />
    <Route path="/portofolio" element= {<Portofolio />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App