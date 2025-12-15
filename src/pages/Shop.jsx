
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
     <div className='w-full p-4 overflow-scroll grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4'>
      {productList.map(item => <Card key={item.id} name={item.name} url={item.url} price={item.price} item={item}/>)}
      

     </div>
    </section>
    </main>
  )
}

export default Shop