
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import NavBar from '../components/NavBar'

function Shop() {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <main data-theme="dark" className='md:flex block gap-1 shadow-2xl overflow-hidden h-screen '>
    
       
       <Sidebar className={`w-80 shadow min-h-screen top-0 fixed md:sticky bg-secondary min-w-[350px] ${isOpen === true ? "-translate-x-100" : "translate-x-100"}`}/>

       <section className='w-full h-screen shadow-2xl'>
     <NavBar />
     <div className='w-full h-screen shadow mt-2'>

      <p>lojjhhbaccha</p>

     </div>
    </section>
    </main>
  )
}

export default Shop