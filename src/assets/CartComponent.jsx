
import React from 'react'

import { userCart } from './UserCart'
import DashBoard from './DashBoard';
const CartComponent = () => {

    const{cartItems, removeCart} = userCart();
 
  return (
    <>
    <DashBoard/>
    <div className='container'>

        <h2>My Cart</h2>
        
        {
            cartItems.length==0?(
                  <p>No items in cart</p>
            ):
            (
                cartItems.map((data,index)=>{
                    return(
                        <>
                        <div className='card w-25 p-2 m-3 shadow rounded-4' key={index}>
            <img src={data.image}/>
              <div className='card-header'> 
           <p>{data.model}</p>
           <p><strong>{data.brand}</strong></p>
           <p><strong>{data.price}</strong></p>
           <p><i>{data.description}</i></p>
         </div>
         <div className='card-footer'>
          <button className='btn btn-danger w-100' onClick={()=>{removeCart(data.id)}}>
            <span className='bi bi-cart4'>Remove To Cart</span>
          </button>

         </div>
         </div>
                        </>
                    )
                })
            )
        }

      
    </div>
    </>
  )
}

export default CartComponent
