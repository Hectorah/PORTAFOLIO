import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <p>Soy un desarrollador con <strong>TSU en Informática</strong> y más de 3 años de experiencia. Actualmente en <strong>KLKSISTEMAS</strong>.</p>
          <p>Mi stack: <strong>PHP/Laravel</strong> para backend y <strong>Dart/Flutter</strong> para apps móviles.</p>
          <p>Siempre en <strong>aprendizaje continuo</strong> y compartiendo conocimiento.</p>
          <div className="highlights">
            <div><span className="number">+3</span><span>Años</span></div>
            <div><span className="number">+15</span><span>Proyectos</span></div>
            <div><span className="number">100%</span><span>Compromiso</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
