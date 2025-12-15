
import Sidebar from '../components/Sidebar'
import NavBar from '../components/NavBar'
import { useTheme } from '../modules/Store'
import { productList } from '../modules'
import Card from '../components/Card'

function Shop() {
const mode = useTheme((state) => state.mode)
  
  return (
    <main data-theme={mode} className='md:flex block gap-1 shadow-2xl overflow-hidden h-screen '>
    
       
       <Sidebar />

       <section className='w-full h-screen shadow-2xl flex flex-col'>
     <NavBar />
     <div className='w-full p-4 overflow-scroll grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {productList.map(item => <Card id={item.id} name={item.name} url={item.url} price={item.price}/>)}
      

     </div>
    </section>
    </main>
  )
}

export default Shop