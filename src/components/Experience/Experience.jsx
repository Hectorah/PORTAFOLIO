import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experiencia <span>Laboral</span></h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="exp-card">
              <div className="exp-header">
                <h3>Desarrollador Full Stack</h3>
                <span className="exp-period">2022 — Presente</span>
              </div>
              <p className="exp-company">KLKSISTEMAS</p>
              <ul>
                <li>Desarrollo y mantenimiento de sistemas web con Laravel y PHP</li>
                <li>Creación de aplicaciones móviles multiplataforma con Flutter</li>
                <li>Diseño e implementación de APIs RESTful</li>
                <li>Gestión de bases de datos MySQL y optimización de consultas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
