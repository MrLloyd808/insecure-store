import React from 'react'
import { navlist } from '../modules'
import { X } from 'lucide-react'
import { useSideBar } from '../modules/Store'
import DropDownTheme from './DropDownTheme'

function Sidebar() {
  const visible = useSideBar((state) => state.visible)
  const inVisible = useSideBar((state) => state.inVisible)
  console.log(visible)
  return (
    <nav className={`w-80 shadow-xl min-h-screen top-0 fixed md:sticky bg-secondary min-w-[350px] ${!visible ? "-translate-x-100" : "translate-x-0"} md:translate-x-0 `}>
         <div className='makeflex md:flex md:items-center md:text-center p-5 w-full'>
            <h4 className='font-semibold cursor-pointer'>INSECURE</h4>
            <X className='md:hidden cursor-pointer' onClick={inVisible}/>
         </div>

         <ul className='font-semibold uppercase flex flex-col items-center justify-center text-center mt-20 mb-75 gap-1'>
            {
                navlist.map(link => <li key={link.id} className='hover:bg-primary w-60 max-w-70 p-2 rounded'>{link.title}</li>)
            }
         </ul>

         <DropDownTheme />
         
    </nav>
  )
}

export default Sidebar