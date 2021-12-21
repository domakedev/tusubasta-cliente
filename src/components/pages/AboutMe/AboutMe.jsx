import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import './AboutMe.css'

// Icons and Images
import Message from '../../../assets/images/message.svg'
import GitHub from '../../../assets/images/github.svg'
import Email from '../../../assets/images/email.svg'
import Portfolio from '../../../assets/images/portfolio.svg'
import Me from '../../../assets/images/cesar-web.svg'

const AboutMe = function AboutMe() {
  return (
    <div className="page-container">
      <Header />
      <div className="about-main main">
        <h1 className="about-title title">¿Te ha gustado este proyecto?</h1>
        <p className="about-subtitle subtitle">
          Lo hice con mucho cariño y pasión <br />
          <br /> Gracias por llegar hasta aquí <br />
          <br /> Este soy yo
        </p>
        <div className="about-card">
          <div className="me-card-image-container">
            <img className="me-card-image" src={Me} alt="Autor" />
            <div className="card-image-background" />
            <button disabled type="button" className="card-principal-button">
              <img src={Portfolio} alt="" /> Mi Portafolio
            </button>
            <div className="card-secondary-buttons">
              <div className="circular-lines">
                <div className="circular-line circular-line__1" />
                <div className="circular-line circular-line__2" />
                <div className="circular-line circular-line__3" />
                <div className="circular-line circular-line__4" />
                <button
                  type="button"
                  className="card-secondary-button card-secondary-button__email"
                  onClick={() => {
                    navigator.clipboard.writeText('sarcansino@gmail.com')
                    // eslint-disable-next-line no-alert
                    alert('Email copiado')
                  }}
                >
                  <img src={Email} alt="" />
                </button>
                <a
                  href="https://github.com/domakedev"
                  className="card-secondary-button card-secondary-button__github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={GitHub} alt="" />
                </a>
                <a
                  href="https://wa.link/z2lnq3"
                  className="card-secondary-button card-secondary-button__message"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Message} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="me-card-data">
            <p className="me-data-intro">
              Ing. Electrónico y desarrollador web fullstack
            </p>
            <h2 className="me-data-title title">César Guevara Cabrera</h2>
            <div className="me-data-block">
              <h3 className="me-data-subtitle">Un poco sobre mi:</h3>
              <p className="me-data-description">
                Hola, soy un apasionado por la tecnología y su desarrollo.
                Actualmente me encuentro en el Bootcamp de Make It Real para
                desarrollar aplicaciones web con el stack MERN de Javascript.{' '}
                <br />
                <br />
                Me he dedicado a: Pre-Venta para equipamiento de TI,
                mantenimiento de equipos de Rayos X de seguridad en penales y
                aeropuertos, mantenimiento de diversos equipos de TI y de
                energía (UPS y transformadores).
              </p>
            </div>
            <div className="me-data-block">
              <h3 className="me-data-subtitle">
                Mis aprendizajes en Make It Real:
              </h3>
              <p className="me-data-description">
                Mejorar mi trabajo en equipo desarrollando esta capacidad usando
                una metodologia Agil: Scrum y control de versiones Git & GitHub.
                En el frontend: conocer React a profundidad. En el backend:
                Aprender como funciona y se desarrolla el backend.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutMe
