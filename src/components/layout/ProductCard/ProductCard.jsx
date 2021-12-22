import { useEffect, useState } from 'react'
import './ProductCard.css'
import { MdAccessTimeFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'

// Context
import { useStateProduct } from '../../../context/Product.Context'

const ProductCard = function ProductCard({ id = 0, title = '', image = '' }) {
  //
  //
  //
  const { setProductID } = useStateProduct()

  const [seconds, setSeconds] = useState(18000001)

  useEffect(() => {
    // Random max 5 minutos
    const num = Math.floor(Math.random() * 1000) * 60 * 5

    // Tiempo de ahora + extra
    let topTimeMils = 18000000 + num

    const interval = setInterval(() => {
      topTimeMils -= 1000
      setSeconds(topTimeMils)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home-product">
      <div className="product-image-container">
        <img className="product-image" src={image} alt="mochila" />
      </div>

      <div className="product-data">
        <p className="product-id">Item: #{id}</p>
        <h2 className="product-title subtitle">{title}</h2>
        <div className="product-timezone">
          <div className="product-time">
            <MdAccessTimeFilled />
            <p>
              {seconds < 18001000
                ? 'Se te acabó el tiempo'
                : new Date(seconds).toLocaleTimeString()}
            </p>
          </div>
          <Link
            onClick={() => {
              setProductID(id)
            }}
            disabled={seconds < 18001000}
            className={
              seconds < 18001000
                ? 'product-button product-button__disabled'
                : `product-button`
            }
            to={{
              pathname: seconds < 18001000 ? '/home' : `/detalle/${id}`,
            }}
          >
            Ver detalles
          </Link>{' '}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
