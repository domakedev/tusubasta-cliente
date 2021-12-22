import { Link } from 'react-router-dom'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import "./P404.css"

const P404 = function P404() {
  return (
    <div className="page-container">
      <Header />
      <div className="p404-main main">
        <h1 className="p404-title title">Uhm...404</h1>
        <p className="p404-subtitle subtitle">
          ¿Como llegaste aquí? <br /> <br />
          Vuelve a: <Link to="/"> Home</Link>
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default P404
