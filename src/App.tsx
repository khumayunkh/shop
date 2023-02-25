import { useState } from 'react'
import './App.sass'
import Header from './components/Header/Header'
import AboutUs from './pages/AboutUs/AboutUs'
import Furniture from './pages/Furniture/Furniture'
import Home from './pages/Home/Home'
import Service from './pages/Service/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Home/>
      <AboutUs/>
      <Service/>
      <Furniture/>
    </div>
  )
}

export default App
