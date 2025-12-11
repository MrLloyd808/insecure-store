import { Palette } from 'lucide-react'
import { useTheme } from '../modules/Store'

function DropDownTheme() {
    const themeLight = useTheme((state) => state.themeLight)
    const themeDark = useTheme((state) => state.themeDark)
    const themeForest = useTheme((state) => state.themeForest)
    const themeSynthwave = useTheme((state) => state.themeSynthwave)

  return (
    <section className='flex items-center justify-center'>
        <div className="dropdown dropdown-top dropdown-center bg-secondary shadow-2xl py-2 px-1 rounded hover:bg-primary">
  <div tabIndex={0} role="button" className="flex gap-2 shadow-2xl cursor-pointer rounded-xl"> <Palette /> Change Theme </div>
  <ul tabIndex="-1" className="dropdown-content menu rounded shadow-2xl mb-2 z-1 w-45 p-2 bg-primary">
     <h2 className='font-semibold'>Pick theme</h2>

    <li className='hover:bg-secondary px-3 py-1 rounded' onClick={themeDark}>Dark</li>
    <li className='hover:bg-secondary px-3 py-1 rounded' onClick={themeLight}>Light</li>
    <li className='hover:bg-secondary px-3 py-1 rounded' onClick={themeForest}>Forest</li>
    <li className='hover:bg-secondary px-3 py-1 rounded' onClick={themeSynthwave}>Synthwave</li>
  </ul>
</div>
    </section>
 
  )
}

export default DropDownTheme