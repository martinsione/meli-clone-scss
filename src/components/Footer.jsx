import { useState } from "react"
import { Link } from "react-router-dom"

import arrowImg from "../assets/images/arrow.png"

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenSection = () => {
    setIsOpen(!isOpen)
  }
  return (
    <footer>
      <div className="footer__more-info">
        <p>
          <span onClick={handleOpenSection}>
            Más información{" "}
            <img
              src={arrowImg}
              alt="arrow"
              className={"footer__arrow " + (isOpen ? "open" : "")}
            />
          </span>
        </p>
        <div
          className={
            "footer__hidden-section-ctn " + (isOpen ? "open" : "close")
          }
        >
          <div className="footer__hidden-section">
            <p className="footer__hidden-section-title">Acerca de</p>
            <ul>
              <li>
                <Link to="">Mercado Libre</Link>
              </li>
              <li>
                <Link to="">Investor relations</Link>
              </li>
              <li>
                <Link to="">Tendencias</Link>
              </li>
              <li>
                <Link to="">Sustentabilidad</Link>
              </li>
            </ul>
          </div>
          <div className="footer__hidden-section">
            <p className="footer__hidden-section-title">Otros sitios</p>
            <ul>
              <li>
                <Link to="">Developers</Link>
              </li>
              <li>
                <Link to="">Mercado Pago</Link>
              </li>
              <li>
                <Link to="">Mercado Ads</Link>
              </li>
              <li>
                <Link to="">Mercado Envíos</Link>
              </li>
            </ul>
          </div>
          <div className="footer__hidden-section">
            <p className="footer__hidden-section-title">Ayuda</p>
            <ul>
              <li>
                <Link to="">Comprar</Link>
              </li>
              <li>
                <Link to="">Vender</Link>
              </li>
              <li>
                <Link to="">Resulucion de problemas</Link>
              </li>
              <li>
                <Link to="">Centro de seguridad</Link>
              </li>
            </ul>
          </div>
          <div className="footer__hidden-section">
            <p className="footer__hidden-section-title">Redes sociales</p>
            <ul>
              <li>
                <Link to="">Twitter</Link>
              </li>
              <li>
                <Link to="">Facebook</Link>
              </li>
              <li>
                <Link to="">Youtube</Link>
              </li>
            </ul>
          </div>
          <div className="footer__hidden-section">
            <p className="footer__hidden-section-title">Mi cuenta</p>
            <ul>
              <li>
                <Link to="">Ingresa</Link>
              </li>
              <li>
                <Link to="">Vender</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__info">
        <ul>
          <li>
            <Link to="">Trabaja con nosotros</Link>
          </li>
          <li>
            <Link to="">Términos y condiciones</Link>
          </li>
          <li>
            <Link to="">Cómo cuidamos tu privacidad</Link>
          </li>
          <li>
            <Link to="">Ayuda</Link>
          </li>
        </ul>
        <p className="footer__copyright">
          Copyright © 1999-2022 DeRemate.com de Uruguay S.R.L.
        </p>
        <p className="footer__tel">Tel: +598 2624 0238</p>
      </div>
    </footer>
  )
}
