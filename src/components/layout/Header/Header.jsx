import { Link } from 'react-router-dom'
import './Header.css'

const Header = function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <div className="header-logotype">TU SUBASTA</div>

        <div className="header-nav-options">
          <Link className="header-nav-option" to="/">
            Home
          </Link>
          <Link className="header-nav-option" to="/product-details">
            Detalles del Producto
          </Link>

          <p className="header-nav-option">Sobre mí</p>
        </div>
      </div>
      {/* <div className="header-auth-buttons" /> */}
    </div>
  )
}

export default Header
