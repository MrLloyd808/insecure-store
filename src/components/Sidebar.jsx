import React from 'react'
import { navlist } from '../modules'
import { Palette, X } from 'lucide-react'
import { useSideBar } from '../modules/Store'

function Sidebar() {
  const visible = useSideBar((state) => state.visible)
  const inVisible = useSideBar((state) => state.inVisible)
  console.log(visible)
  return (
    <nav className={`w-80 shadow min-h-screen top-0 fixed md:sticky bg-secondary min-w-[350px] ${!visible ? "-translate-x-100" : "translate-x-0"} md:translate-x-0`}>
         <div className='makeflex md:flex md:items-center md:text-center p-5 mb-20 w-full'>
            <h4 className='font-semibold cursor-pointer'>INSECURE</h4>
            <X className='md:hidden cursor-pointer' onClick={inVisible}/>
         </div>

         <ul className='font-semibold uppercase w-full mt-5 flex flex-col items-center justify-center text-center gap-3'>
            {
                navlist.map(link => <li key={link.id}>{link.title}</li>)
            }
         </ul>
       
       <section className='flex items-center justify-center relative mt-85'>
        <div className='flex items-center cursor-pointer'>
        <Palette /> 
         <select defaultValue="Pick a font" className="select select-ghost">
         <option disabled={true}> Pick a theme</option>
          <option>Dark</option>
         <option>Light</option>
         <option>Synthwave</option>
        </select>
         </div>
       </section>
         
    </nav>
  )
}

export default Sidebar