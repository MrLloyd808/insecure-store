import { Heart } from 'lucide-react'
import { toast } from 'react-toastify'
import { useCart } from '../modules/Store'

function Card({ id, name, url, price, item}) {
    const AddToCart = useCart((state) => state.AddToCart)
    const cart = useCart((state) => state.cart)
    const ErrorToast = () => toast("Product already in cart", {
      theme: "dark",
      type: "error",
      position: "top-center"
    })

    const AddedToast = () => toast("Product added to cart successfully", {
      position: "top-center",
      theme: "dark",
      type: "success"
    })

  return (
    <div key={id} className='flex flex-col rounded'>
    <img src={url} alt='product-image' className='w-full h-50 sm:h-56 object-cover rounded'/>
      <div className='w-full p-1'>
           <h2 className='font-semibold'>{name}</h2>
           <h4 className='font-semibold pb-1'>{"R" + price}</h4>
          <div>
          
           <button className='btn btn-neutral w-full font-semibold' onClick={() => {
             const isInCart = cart.find(itemInCart => itemInCart.id === item.id)
             if(isInCart) return ErrorToast()

             AddToCart(item)

             AddedToast()
            console.log(cart)
            }}>Add To Cart</button>
           </div>
      </div>
    </div>
  )
}

export default Card