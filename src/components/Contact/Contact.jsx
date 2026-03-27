import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p><FaEnvelope /> hectorher149@gmail.com</p>
            <p><FaMapMarkerAlt /> Venezuela</p>
            <div className="social">
              <a href="https://github.com/tuusuario"><FaGithub /></a>
              <a href="https://linkedin.com/in/tuusuario"><FaLinkedin /></a>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            <textarea rows="4" placeholder="Mensaje"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="footer">© 2026 Hector Hernandez - Desarrollador Full Stack</div>
      </div>
    </section>
  )
}

export default Contact
