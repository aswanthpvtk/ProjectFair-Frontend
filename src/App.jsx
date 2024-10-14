import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Home from './pages/Home'
import Auth from './pages/Auth'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>}  />
        <Route path='/register' element={<Auth register={'register'}/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/project' element={<Project/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
