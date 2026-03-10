
import React from 'react'
import DashBoard from '../assets/DashBoard'

import { kitchenData } from '../Data/KitchenComponent'
import { userCart } from '../assets/UserCart'
const KitchenData = () => {

  const {addToCart}=userCart();
  return (
    <>
    <DashBoard/>
    <div className='d-flex flex-wrap'>
      {
        kitchenData.map((data)=>{
          return(
            <div className='card w-25 p-2 m-3 shadow rounded-4' key={data.id}>

              <img src={data.image}/>
               <div className='card-header'>
                <p>{data.model}</p>
                <p><strong>{data.price}</strong></p>
                <p>{data.brand}</p>
                </div>
                <div className='card-footer'>
                  <button className='btn btn-danger w-100' onClick={()=>{addToCart(data)}}>
                    <span className='bi bi-cart4'>Add to Cart</span>
                  </button>
               </div>
            </div>
          )
        })

      }

    </div>
    </>
  )
}

export default KitchenData
