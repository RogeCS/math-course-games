import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <div className="footer__container">
    <div className="footer-wrap">
      <div className="footer-links-container">
        <section className="footer-links-wrapper">
          <div className="footer-link-items">
            <h2 className="footer-link-title">Sobre nosotros</h2>
            <Link className="footer-link" to="/">
              Testimonios
            </Link>
            <Link className="footer-link" to="/">
              Objetivo
            </Link>
            <Link className="footer-link" to="/">
              Forma parte
            </Link>
            <Link className="footer-link" to="/">
              Privacidad
            </Link>
            <Link className="footer-link" to="/">
              Ingresa
            </Link>
          </div>
          <div className="footer-link-items">
            <h2 className="footer-link-title">Extra</h2>
            <Link className="footer-link" to="/">
              Videos
            </Link>
            <Link className="footer-link" to="/">
              Testimonios
            </Link>
            <Link className="footer-link" to="/">
              Tutoriales
            </Link>
            <Link className="footer-link" to="/">
              Dona
            </Link>
          </div>
        </section>
        <section className="footer-links-wrapper">
          <div className="footer-link-items">
            <h2 className="footer-link-title">Contáctanos</h2>
            <Link className="footer-link" to="/">
              Contacto
            </Link>
            <Link className="footer-link" to="/">
              Sopporte
            </Link>
            <Link className="footer-link" to="/">
              Carreras
            </Link>
            <Link className="footer-link" to="/">
              FAQ
            </Link>
            <Link className="footer-link" to="/">
              Proyectos
            </Link>
          </div>
          <div className="footer-link-items">
            <h2 className="footer-link-title">Redes sociales</h2>
            <Link className="footer-link" to="/">
              Facebook
            </Link>
            <Link className="footer-link" to="/">
              Instagram
            </Link>
            <Link className="footer-link" to="/">
              Youtube
            </Link>
            <Link className="footer-link" to="/">
              Twitter
            </Link>
          </div>
        </section>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <Logo dark={0} />
          <div className="website-rights">
            RCS {new Date().getFullYear()} todos los derechos reservados
          </div>
          <div className="social-icons">
            <a
              href="/"
              className="social-icon-link"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="/"
              className="social-icon-link"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="/"
              className="social-icon-link"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </a>
            <a
              href="/"
              className="social-icon-link"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="/"
              className="social-icon-link"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
);
export default Footer;
