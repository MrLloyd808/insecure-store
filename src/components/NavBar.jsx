import { Menu, ShoppingBagIcon, X } from 'lucide-react'
import React from 'react'

function NavBar() {
  return (
    <header className='makeflex p-5 md:w-full md:px-15 shadow'>

        <Menu className='cursor-pointer md:hidden'/>
    

        <h2 className='font-semibold cursor-pointer'>SHOP</h2> 

        <ShoppingBagIcon className='cursor-pointer'/>
    </header>
  )
}

export default NavBar