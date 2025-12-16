import { Menu, ShoppingBagIcon, X } from 'lucide-react'
import React from 'react'
import { useSideBar, useCart, useCartFloat } from '../modules/Store'


function NavBar() {
  const makeVisible = useSideBar((state) => state.makeVisible)
  const cart = useCart((state) => state.cart)
  const visible = useCartFloat((state) => state.visible)
  return (
    <header className='makeflex p-5 md:w-full md:px-15 shadow'>
        <Menu className='cursor-pointer md:hidden' onClick={makeVisible} />
        <h2 className='font-semibold cursor-pointer'>SHOP</h2> 
        <span className='flex cursor-pointer' onClick={visible}>
          <ShoppingBagIcon />
          {cart.length}
        </span>
        
    </header>
  )
}

export default NavBar