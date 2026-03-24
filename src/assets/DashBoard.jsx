
import React, { useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { userContext } from './AuthContext';

import { userCart } from './UserCart';
const DashBoard = () => {

  const{cartItems}=userCart();

    const{logout}=userContext();
    const navigate=useNavigate();

    const logoutToken=()=>{
          logout();      
          navigate("/")
    }
  return (
    <div className='div-list'>
      <h2 className='text-primary'>Welcome To the Dashboard</h2>
      <nav className='nav-list'>
        <ul className='li-item'>
         <Link to='/men'> <li>Mens</li></Link>
          <Link to='/women'>
          <li>Women</li>
          </Link>
          <Link to='/kitchen'>
          <li>KitchenData</li></Link>
          <Link to='/cart'>Cart({cartItems.length})
         </Link>
        </ul>
      </nav>

      <button className='btn btn-danger' onClick={logoutToken}>Logout</button>
      
    </div>
  )
}

export default DashBoard
