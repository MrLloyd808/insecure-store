import React from 'react'
import { navlist } from '../modules'
import { Palette, X } from 'lucide-react'

function Sidebar() {
  return (
    <nav className={`w-80 shadow min-h-screen top-0 fixed md:sticky bg-secondary min-w-[350px] `}>
         <div className='makeflex md:flex md:items-center md:text-center p-5 mb-20 w-full'>
            <h4 className='font-semibold cursor-pointer'>INSECURE</h4>
            <X className='md:hidden cursor-pointer'/>
         </div>

         <ul className='font-semibold uppercase w-full mt-5 flex flex-col items-center justify-center text-center gap-3'>
            {
                navlist.map(link => <li key={link.id}>{link.title}</li>)
            }
         </ul>
       
       <section className='flex items-center justify-center relative mt-85'>
        <div className='flex gap-2 cursor-pointer'>

         <Palette />
          <h3 className='font-semibold'>Theme</h3>
          
         </div>
       </section>
         
    </nav>
  )
}

export default Sidebar