
import React from 'react'

import { womanData } from '../Data/WomenComponent'
import DashBoard from '../assets/DashBoard'

import { userCart } from '../assets/UserCart'
const WomenData = () => {

    const {addToCart} =userCart();
  return (
      <>
    <DashBoard/>
    <div className='d-flex flex-wrap mt-4 bg-body-secondary'>

    {
      womanData.map((data)=>{
        return(
          <>
         <div className='card w-25 p-2 m-3 shadow rounded-4' key={data.id}>
            <img src={data.image}/>
              <div className='card-header'> 
           <p>{data.model}</p>
           <p><b>{data.brand}</b></p>
           <p><strong>{data.price}</strong></p>
           <p><i>{data.description}</i></p>
         </div>
         <div className='card-footer'>
          <button className='btn btn-danger w-100' onClick={()=>{addToCart(data)}}>
            <span className='bi bi-cart4'>Add To Cart</span>
          </button>

         </div>
         </div>
       
          </>
        )
      })

    }
      
    </div>
    </>
  )
}

export default WomenData
