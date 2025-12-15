import { Heart } from 'lucide-react'
import React from 'react'

function Card({ id, name, url, price}) {
  return (
    <div key={id} className='flex flex-col rounded'>
    <img src={url} alt='product-image' className='w-full h-50 sm:h-56 object-cover rounded'/>
      <div className='w-full p-1'>
           <h2 className='font-semibold'>{name}</h2>
           <h4 className='font-semibold pb-1'>{"R" + price}</h4>
          <div>
          
           <button className='btn btn-neutral w-full font-semibold'>Add To Cart</button>

           </div>
      </div>
    </div>
  )
}

export default Card