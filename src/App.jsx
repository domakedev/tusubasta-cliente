import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import AboutMe from './components/pages/AboutMe/AboutMe'
import ProductDetails from './components/pages/ProductDetails/ProductDetails'
import P404 from './components/pages/P404/P404'
import Landing from './components/pages/Landing/Landing'

// Context
import { ProductProvider } from './context/Product.Context'

const App = function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detalle" element={<ProductDetails />} />
        <Route path="/detalle/:id" element={<ProductDetails />} />
        <Route path="/sobre-mi" element={<AboutMe />} />
        <Route path="*" element={<P404 />} />
      </Routes>
    </ProductProvider>
  )
}

export default App
