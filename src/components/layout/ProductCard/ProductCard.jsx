import { useEffect, useState } from 'react'
import './ProductCard.css'
import { MdAccessTimeFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ProductCard = function ProductCard({ id = 0, title = '', image = '' }) {
  const [seconds, setSeconds] = useState(18000001)

  useEffect(() => {
    // Random max 1 hora: extra
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
          {/* <button
            disabled={seconds < 18001000}
            type="button"
            className="product-button"
          >
            Ver detalles
          </button> */}
          <Link
            disabled={seconds < 18001000}
            className={
              seconds < 18001000
                ? 'product-button product-button__disabled'
                : `product-button`
            }
            to={seconds < 18001000 ? '/' : `/product-details/${id}`}
          >
            Ver detalles
          </Link>{' '}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
