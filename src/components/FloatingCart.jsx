import { X } from 'lucide-react'
import React from 'react'
import { useCart } from '../modules/Store'
import CartCard from './CartCard'

function FloatingCart() {
    const cart = useCart((state) => state.cart)
  return (
    <div className='absolute min-w-50 w-[75%] max-h-130 bg-neutral top-1/2 left-1/2 -translate-x-1/2 -translate-y-70 p-3 rounded overflow-hidden'>
    
      <div className='makeflex w-full pb-3'>
                  <h4 className='font-semibold cursor-pointer'>CART</h4>
                  <X className='md:hidden cursor-pointer'/>
      </div>
     <hr />
     <section className='flex justify-center p-2'>
        <button className='btn uppercase'>clear cart</button>
     </section>


      <div className='grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 overflow-scroll h-100'>
        {cart.length ? cart.map(item => <CartCard item={item} id={item.id} name={item.name} price={item.price} url={item.url}/>) : <p>No items in cart</p>}
      </div>
   

    </div>
  )
}

export default FloatingCart