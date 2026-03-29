import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ERP Empresarial',
      desc: 'Sistema de gestión integral con módulos de inventario, facturación y reportes.',
      tags: ['Laravel', 'PHP', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600'
    },
    {
      id: 2,
      title: 'Delivery App',
      desc: 'Aplicación móvil multiplataforma para gestión de pedidos y entregas en tiempo real.',
      tags: ['Flutter', 'Dart', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600'
    },
    {
      id: 3,
      title: 'E-commerce',
      desc: 'Tienda online completa con carrito, pagos y panel de administración.',
      tags: ['Laravel', 'Vue', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Mis <span>Proyectos</span></h2>
        <div className="projects-grid">
          {projects.map(p => (
            <div key={p.id} className="project-card">
              <div className="project-img-wrapper">
                <img src={p.image} alt={p.title} />
                <div className="project-overlay" />
              </div>
              <div className="card-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="links">
                  <a href="#"><FaGithub /> Código</a>
                  <a href="#"><FaExternalLinkAlt /> Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
