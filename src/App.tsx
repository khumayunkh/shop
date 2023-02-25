import { useState } from 'react'
import './App.sass'
import Header from './components/Header/Header'
import AboutUs from './pages/AboutUs/AboutUs'
import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Home/>
      <AboutUs/>
    </div>
  )
}

export default App
