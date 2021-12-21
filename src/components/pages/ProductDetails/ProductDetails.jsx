import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsStarHalf } from 'react-icons/bs'
import { AiFillLike } from 'react-icons/ai'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import axios from '../../../utils/axios'
import './ProductDetails.css'

// Context
import { useStateProduct } from '../../../context/Product.Context'

const ProductDetails = function ProductDetails() {
  const { productID, productData, setProductData } = useStateProduct()

  let NotProduct = ''

  if (productID == null) {
    NotProduct = (
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
    return NotProduct
  }


  useEffect(() => {
    window.scrollTo(0, 0)

    const bringUser = async () => {
      const product = await axios.get(`/products/${productID}`)
      // setProduct(product.data)
      setProductData(product.data)
    }

    bringUser()
  }, [productID])


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
            <img className="card-image" src={productData?.image} alt="" />
          </div>
          <div className="card-data">
            <h2 className="card-title title">{productData?.title}</h2>
            <div className="card-micro-data">
              <div className="card-data-blocks">
                <div className="card-data-block">
                  <div className="block-decoration" />
                  <p className="block-title price">${productData?.price}</p>
                </div>
                <div className="card-data-block">
                  <div className="block-decoration" />
                  <p className="block-title price">Descripción:</p>
                  <div className="block-description paragraph">
                    {productData?.description}
                  </div>
                </div>
                <div className="card-data-block">
                  <div className="block-decoration" />
                  <p className="block-title price">Valoraciones:</p>
                  <p className="block-stat">
                    <BsStarHalf />
                    {productData?.rating.rate}
                  </p>
                  <p className="block-stat">
                    <AiFillLike />
                    {productData?.rating.count}
                  </p>
                </div>
              </div>
              <div className="card-category">{productData?.category}</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductDetails
