import React, { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaLock, FaInfoCircle } from 'react-icons/fa'
import { projectsData } from '../../data/portfolioData'
import './Projects.css'

// Componente de carrusel automático
const ImageCarousel = ({ images, title, type }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000) // Cambia cada 3 segundos

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="project-carousel">
      <div className="carousel-images">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} - ${idx + 1}`}
            className={idx === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      {type === 'private' && (
        <span className="project-badge private"><FaLock /> Privado</span>
      )}
      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, idx) => (
            <span key={idx} className={idx === currentIndex ? 'active' : ''} />
          ))}
        </div>
      )}
    </div>
  )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const closeModal = () => setSelectedProject(null)

  const getProjectLinks = (project) => {
    if (project.type === 'private') {
      return (
        <button className="project-btn private" onClick={() => setSelectedProject(project)}>
          <FaLock /> Privado
        </button>
      )
    }
    return (
      <>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-btn github">
            <FaGithub /> Código
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-btn demo">
            <FaExternalLinkAlt /> Demo
          </a>
        )}
      </>
    )
  }

  const getProjectImages = (project) => {
    if (project.images && project.images.length > 0) {
      return project.images
    }
    return [project.image]
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Mis <span>Proyectos</span></h2>
        <div className="projects-grid">
          {projectsData.map(p => (
            <div key={p.id} className="project-card">
              <ImageCarousel images={getProjectImages(p)} title={p.title} type={p.type} />
              <div className="card-content">
                <div className="project-header">
                  <h3>{p.title}</h3>
                  <span className="project-year">{p.year}</span>
                </div>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="links">
                  {getProjectLinks(p)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para proyectos privados */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <span className="project-type"><FaLock /> Proyecto Privado</span>
            </div>
            <div className="modal-body">
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-meta">
                <p><strong>Empresa:</strong> {selectedProject.company}</p>
                <p><strong>Año:</strong> {selectedProject.year}</p>
              </div>
              <h4>Tecnologías</h4>
              <div className="modal-tags">
                {selectedProject.tags.map(t => <span key={t} className="modal-tag">{t}</span>)}
              </div>
              <h4>Detalles del Proyecto</h4>
              <ul className="modal-details">
                {selectedProject.details.map((detail, idx) => (
                  <li key={idx}><FaInfoCircle /> {detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
