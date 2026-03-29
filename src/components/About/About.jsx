import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">Sobre <span>Mí</span></h2>
        <div className="about-content">
          <p>Soy un desarrollador con <strong>TSU en Informática</strong> y más de 3 años de experiencia construyendo soluciones reales. Actualmente formo parte del equipo de <strong>KLKSISTEMAS</strong>.</p>
          <p>Mi stack principal es <strong>PHP/Laravel</strong> para backend y <strong>Dart/Flutter</strong> para aplicaciones móviles. Me apasiona escribir código limpio y crear experiencias de usuario fluidas.</p>
          <p>Siempre en <strong>aprendizaje continuo</strong>, explorando nuevas tecnologías y compartiendo conocimiento con la comunidad.</p>
          <div className="highlights">
            <div className="highlight-card">
              <span className="number">+3</span>
              <span className="highlight-label">Años exp.</span>
            </div>
            <div className="highlight-card">
              <span className="number">+15</span>
              <span className="highlight-label">Proyectos</span>
            </div>
            <div className="highlight-card">
              <span className="number">100%</span>
              <span className="highlight-label">Compromiso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
