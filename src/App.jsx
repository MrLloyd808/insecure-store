import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route index element={<Shop />} />
    
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
