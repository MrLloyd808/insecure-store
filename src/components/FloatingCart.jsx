import { X } from 'lucide-react'
import React from 'react'
import { useCart } from '../modules/Store'
import CartCard from './CartCard'
import { useCartFloat } from '../modules/Store'

function FloatingCart() {
    const cart = useCart((state) => state.cart)
    const ResetCart = useCart((state) => state.ResetCart)
    const cartstate = useCartFloat((state) => state.cartstate)
    const hidden = useCartFloat((state) => state.hidden)
  return (
    <div className={`absolute min-w-50 w-[85%] max-h-130 bg-neutral top-1/2 left-1/2 -translate-x-1/2 -translate-y-70 p-3 rounded overflow-hidden ${cartstate}`}>
    
      <div className='makeflex w-full pb-3'>
                  <h4 className='font-semibold cursor-pointer'>CART</h4>
                  <X className=' cursor-pointer' onClick={hidden}/>
      </div>
     <hr />
     <section className='flex justify-center p-2'>
        <button className='btn uppercase' onClick={() => ResetCart()}>clear cart</button>
     </section>


      <div className='grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 overflow-scroll h-100'>
        {cart.length ? cart.map(item => <CartCard item={item} id={item.id} name={item.name} price={item.price} url={item.url}/>) : <p>No items in cart</p>}
      </div>
   

    </div>
  )
}

export default FloatingCart