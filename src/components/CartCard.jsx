import React from 'react'
import { useCart } from '../modules/Store'
import { toast } from 'react-toastify'

function CartCard({id, name, price, item, url}) {
    const RemoveFromCart = useCart((state) => state.RemoveFromCart)
    const RemovedToast = () => toast("Removed from cart successfully", {
      position: "top-center",
      theme: "dark",
      type: 'success'
    })
  return (
    <div key={id} className='flex flex-col rounded'>
    <img src={url} alt='product-image' className='w-full h-50 sm:h-56 object-cover rounded'/>
      <div className='w-full p-1'>
           <h2 className='font-semibold'>{name}</h2>
           <h4 className='font-semibold pb-1'>{"R" + price}</h4>
          <div>
          
           <button className='btn btn-neutral w-full font-semibold' onClick={() => {
            RemovedToast()
            RemoveFromCart(item)}}>REMOVE</button>

           </div>

      </div>
    </div>
  )
}

export default CartCard