import { Link } from 'react-router-dom'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
// import { MdOutlinePersonPin } from 'react-icons/md'
import { SiJavascript, SiReact } from 'react-icons/si'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import HeroImage from '../../../assets/images/hero-image.svg'
import MKR from '../../../assets/images/mkr.ico'
import Ar from '../../../assets/images/ar.png'
import './Landing.css'

const TechnologiesData = [
  {
    id: 0,
    icon: <AiFillHtml5 />,
    name: 'HTML',
  },
  {
    id: 1,
    icon: <DiCss3 />,
    name: 'CSS',
  },
  {
    id: 2,
    icon: <AiFillGithub />,
    name: 'GitHub',
  },
  {
    id: 3,
    icon: <SiJavascript />,
    name: 'JavaScript',
  },
  {
    id: 0,
    icon: <SiReact />,
    name: 'React Js',
  },
]

const Landing = function Landing() {
  return (
    <div className="page-container">
      <Header />
      <div className="landing-main main">
        <div className="landing-hero">
          <div className="hero-text">
            <h1 className="landing-title title">
              Descubre productos unicos y compralos antes que nadie
            </h1>
            <p className="landing-subtitle subtitle">
              No pierdas la oportunidad de comprar a los precios mas bajos del
              mercado. <br />
              <br /> El tiempo de la oferta es limitado y una vez acabado no
              podras comprar el producto.{' '}
            </p>
            <Link className="landing-hero-button" to="/home">
              Ver Productos
            </Link>
          </div>
          <div className="hero-image-container">
            <img className="hero-image" src={HeroImage} alt="store" />
          </div>
        </div>

        <div className="landing-technologies">
          {TechnologiesData.map((t) => (
            <div key={t.id} className="landing-technologie">
              {t.icon}
              <p className="technologie-name">{t.name}</p>
            </div>
          ))}
        </div>

        <div className="landing-thanks">
          <div className="landing-texts">
            <p className="thanks-subtitle">Idea y diseño</p>
            <h3 className="thanks-title">
              Proyecto realizado para Make It Real Bootcamp Assesment I
              <br /> Y con el diseño base de AR Shakir
            </h3>
          </div>
          {/* <MdOutlinePersonPin/> Sobre mí */}
          <div className="landing-buttons">
            <a
              className="thanks-button"
              href="https://makeitreal.camp/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="thanks-button-image"
                src={MKR}
                alt="Make It Real"
              />{' '}
              <p> Make It Real</p>
            </a>
            <a
              className="thanks-button"
              href="https://www.arshakir.com/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="thanks-button-image"
                src={Ar}
                alt="Make It Real"
              />{' '}
              <p>AR Shakir</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Landing
