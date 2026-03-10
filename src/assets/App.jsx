

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import UserRegister from './UserRegister'
import { userContext } from './AuthContext'
import '../assets/App.css'
import DashBoard from './DashBoard'
import MenData from '../Components/MenData'
import CartComponent from './CartComponent'
import WomenData from '../Components/WomenData'
import KitchenData from '../Components/KitchenData'
const App = () => {

  const { token } = userContext()
  return (
    <div>

        <Routes>
            <Route path='/' element={ <LoginPage/>}/>
            <Route path='/register' element={<UserRegister/>}/>
            <Route path='/dashboard' element={token ? <DashBoard/> : <Navigate to='/'/>}/>
            <Route path='/men' element={<MenData />}/>
            <Route path='/cart' element={<CartComponent/>} />
            <Route path='/women' element={< WomenData/>}/>
            <Route path='/kitchen' element={< KitchenData/>}/>
        </Routes>
      
    </div>
  )
}

export default App
