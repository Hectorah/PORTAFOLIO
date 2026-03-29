import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Hablemos <span>Juntos</span></h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>¿Tienes un proyecto en mente?</h3>
            <p>Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar sobre tecnología.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-item-icon"><FaEnvelope /></span>
                hectorher149@gmail.com
              </div>
              <div className="contact-item">
                <span className="contact-item-icon"><FaMapMarkerAlt /></span>
                Venezuela
              </div>
            </div>
            <div className="social">
              <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input id="name" type="text" placeholder="Tu nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="tu@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" rows="5" placeholder="Cuéntame sobre tu proyecto..." />
            </div>
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
        <div className="footer">© 2026 Hector Hernandez — Desarrollador Full Stack</div>
      </div>
    </section>
  )
}

export default Contact
