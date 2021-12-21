import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './Header.css'

const CustomLink = function CustomLink({ children, to, ...props }) {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <div>
      <Link
        // style={{ textDecoration: match ? 'underline' : 'none' }}
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
  return (
    <div className="header">
      <div className="header-nav">
        <div className="header-logotype">TU SUBASTA</div>

        <div className="header-nav-options">
          {/* <Link className="header-nav-option" to="/">
            Home
          </Link> */}

          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/detalle">Detalles del Producto</CustomLink>
          <CustomLink to="/sobre-mi">Sobre mí</CustomLink>

          {/* <Link className="header-nav-option" to="/detalle">
            Detalles del Producto
          </Link> */}

          {/* <p className="header-nav-option">Sobre mí</p> */}
        </div>
      </div>
      {/* <div className="header-auth-buttons" /> */}
    </div>
  )
}

export default Header
