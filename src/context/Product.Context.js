// Imports
import { createContext, useContext, useState } from 'react'

// Crear Contexto
const ProductContext = createContext()

// Crear Provider
export const ProductProvider = function ProductProvider({ children }) {
  // Crear States
  const [productID, setProductID] = useState(null)
  const [productData, setProductData] = useState(null)

  // Crear Funciones

  // Enviar States y Funciones
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ProductContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        // States
        productID,
        productData,
        
        // Functions
        setProductID,
        setProductData
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

// Exportar Contexto
export const useStateProduct = () => {
  // eslint-disable-next-line new-cap
  const context = new useContext(ProductContext)

  if (context === undefined) {
    throw new Error('useStateProduct must be used within a ProductProvider')
  }

  return context
}
