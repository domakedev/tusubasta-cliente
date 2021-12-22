import { useEffect, useState } from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import ProductCard from '../../layout/ProductCard/ProductCard'
import axios from '../../../utils/axios'
import './Home.css'

const Home = function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    const bringProducts = async function bringProducts() {
      try {
        setLoading(true)

        let n1 = Math.floor(Math.random() * 20) + 1
        let n2 = Math.floor(Math.random() * 20) + 1
        const n3 = Math.floor(Math.random() * 20) + 1

        if (n1 === n2 || n1 === n3) {
          n1 = Math.floor(Math.random() * 20) + 1
        } else if (n2 === n3) {
          n2 = Math.floor(Math.random() * 20) + 1
        }

        const result1 = await axios.get(`/products/${n1}`)
        const result2 = await axios.get(`/products/${n2}`)
        const result3 = await axios.get(`/products/${n3}`)

        setProducts([result1.data, result2.data, result3.data])
        setLoading(false)
      } catch (error) {
        // console.log(error)
      }
    }

    bringProducts()
  }, [])

  return (
    <div className="page-container">
      <Header />
      <div className="home-main main">
        <h1 className="home-title title">¡Que suerte!</h1>
        <p className="home-subtitle subtitle">
          Estos productos solo estaran disponibles por poco tiempo.
        </p>
        <p className="home-subtitle_advice subtitle">
          *Por ahora no tienes que ofertar, el precio será el mínimo historico.
        </p>

        <div className="home-products">
          {loading ? (
            <div className="lds-circle">
              <div />
            </div>
          ) : null}
          {products?.map((product) => (
            <ProductCard
              key={Math.floor(Math.random() * 30000)}
              id={product.id}
              title={product.title}
              image={product.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
