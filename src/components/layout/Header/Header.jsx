import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './Header.css'

// Context
import { useStateProduct } from '../../../context/Product.Context'

const CustomLink = function CustomLink({ children, to, ...props }) {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <div style={{ textAlign: 'end' }}>
      <Link
        className={match ? 'header-nav-option__active' : 'header-nav-option'}
        to={to}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </Link>
    </div>
  )
}

const Header = function Header() {
  const { productID } = useStateProduct()

  return (
    <div className="header">
      <div className="header-nav">
        <div className="header-logotype">TU SUBASTA</div>

        <div className="header-nav-options">
          {/* <Link className="header-nav-option" to="/">
            Home
          </Link> */}

          <CustomLink to="/">Home</CustomLink>
          {/* <CustomLink to="/detalle">Detalles del Producto</CustomLink> */}
          <CustomLink to={`/detalle/${productID == null ? '' : productID}`}>
            Detalles del Producto
          </CustomLink>
          <CustomLink to="/sobre-mi">Sobre mí</CustomLink>
        </div>
      </div>
      {/* <div className="header-auth-buttons" /> */}
    </div>
  )
}

export default Header
