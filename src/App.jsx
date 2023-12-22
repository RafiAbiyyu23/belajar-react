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
    <Route path="/belajar-react/" element= {<Home />} />
    <Route path="/belajar-react/about/" element= {<About />} />
    <Route path="/belajar-react/cuaca/" element= {<Cuaca />} />
    <Route path="/belajar-react/portofolio/" element= {<Portofolio />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
