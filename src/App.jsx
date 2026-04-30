import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Signup from './comp/Signup'
import { Route, Routes } from 'react-router-dom'
import Forget from './comp/Forget'
import Dashboard from './comp/Dashboard'
import AdminDashboard from './comp/AdminDashboard'
import Protectedroute from './comp/Protectedroute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/forget' element={<Forget/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path='/admin' element={
        <Protectedroute>
        <AdminDashboard/>
        </Protectedroute>
        }/>
    </Routes>
      
    </>
  )
}

export default App
