import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home/Home'
import AboutMe from './components/pages/AboutMe/AboutMe'
import ProductDetails from './components/pages/ProductDetails/ProductDetails'

// Context
import { ProductProvider } from './context/Product.Context'

const App = function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle" element={<ProductDetails />} />
        <Route path="/detalle/:id" element={<ProductDetails />} />
        <Route path="/sobre-mi" element={<AboutMe />} />
      </Routes>
    </ProductProvider>
  )
}

export default App
