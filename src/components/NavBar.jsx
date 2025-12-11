import { Menu, ShoppingBagIcon, X } from 'lucide-react'
import React from 'react'
import { useSideBar } from '../modules/Store'

function NavBar() {
  const makeVisible = useSideBar((state) => state.makeVisible)
  return (
    <header className='makeflex p-5 md:w-full md:px-15 shadow'>
        <Menu className='cursor-pointer md:hidden' onClick={makeVisible} />
        <h2 className='font-semibold cursor-pointer'>SHOP</h2> 
        <ShoppingBagIcon className='cursor-pointer'/>
    </header>
  )
}

export default NavBar