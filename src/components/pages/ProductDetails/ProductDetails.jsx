import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsStarHalf } from 'react-icons/bs'
import { AiFillLike } from 'react-icons/ai'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import axios from '../../../utils/axios'
import './ProductDetails.css'

const ProductDetails = function ProductDetails() {
  const id = useLocation().pathname.slice(-2)

  if (id.includes('e')) {
    return (
      <div className="page-container">
        <Header />
        <div className="main">
          <h1 className="product-details-title title">Ups!</h1>
          <p className="product-details-subtitle subtitle">
            Primero selecciona un producto, aqui: <Link to="/"> Home</Link>
          </p>
        </div>
        <Footer />
      </div>
    )
  }
  const [producto, setProduct] = useState()

  // console.log(producto)

  useEffect(() => {
    window.scrollTo(0, 0)

    const bringUser = async () => {
      const product = await axios.get(`/products/${id}`)
      setProduct(product.data)
    }

    bringUser()
  }, [])

  // console.log(id)

  return (
    <div className="page-container">
      <Header />

      <div className="product-details-main main">
        <h1 className="product-details-title title">Uf, a tiempo.</h1>
        <p className="product-details-subtitle subtitle">
          Ahora tienes acceso privilegiado a este producto, comprarlo o no, tu
          decides.
        </p>

        <div className="product-details-card">
          <div className="card-image-container">
            <img className="card-image" src={producto?.image} alt="" />
          </div>
          <div className="card-data">
            <h2 className="card-title title">{producto?.title}</h2>
            <div className="card-micro-data">
              <div className="card-data-blocks">
                <div className="card-data-block">
                  <div className="block-decoration" />
                  <p className="block-title price">${producto?.price}</p>
                </div>
                <div className="card-data-block">
                  <div className="block-decoration" />
                  <p className="block-title price">Descripción:</p>
                  <div className="block-description paragraph">
                    {producto?.description}
                  </div>
                </div>
                <div className="card-data-block">
                  <div className="block-decoration" />
                  <p className="block-title price">Valoraciones:</p>
                  <p className="block-stat">
                    <BsStarHalf />
                    {producto?.rating.rate}
                  </p>
                  <p className="block-stat">
                    <AiFillLike />
                    {producto?.rating.count}
                  </p>
                </div>
              </div>
              <div className="card-category">{producto?.category}</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductDetails
