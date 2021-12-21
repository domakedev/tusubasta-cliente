import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home/Home'
import ProductDetails from './components/pages/ProductDetails/ProductDetails'

const App = function App() {
  return (
    <Routes>      
      <Route path="/" element={<Home />} />
      <Route path="/detalle" element={<ProductDetails />} />
      <Route path="/detalle/:id" element={<ProductDetails/>} />
    </Routes>
  )
}

export default App
