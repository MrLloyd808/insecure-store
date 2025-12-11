
import Sidebar from '../components/Sidebar'
import NavBar from '../components/NavBar'
import { useTheme } from '../modules/Store'

function Shop() {
const mode = useTheme((state) => state.mode)
  
  return (
    <main data-theme={mode} className='md:flex block gap-1 shadow-2xl overflow-hidden h-screen '>
    
       
       <Sidebar />

       <section className='w-full h-screen shadow-2xl flex flex-col gap-3'>
     <NavBar />
     <div className='w-full h-screen shadow p-4'>

      <p>lojjhhbaccha</p>

     </div>
    </section>
    </main>
  )
}

export default Shop