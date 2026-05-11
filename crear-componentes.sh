#!/bin/bash

# ============================================
# SCRIPT: Crear todos los componentes del portafolio
# ============================================

echo "🚀 Creando todos los componentes del portafolio..."

# Crear estructura de carpetas
mkdir -p src/components/Navbar
mkdir -p src/components/Hero
mkdir -p src/components/About
mkdir -p src/components/Skills
mkdir -p src/components/Projects
mkdir -p src/components/Experience
mkdir -p src/components/Contact
mkdir -p src/assets/images

# ============================================
# 1. NAVBAR
# ============================================
cat > src/components/Navbar/Navbar.jsx << 'NAVBARJSX'
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Contacto', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')}>
            <span className="name">JD</span>
            <span className="title">Dev</span>
          </a>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
NAVBARJSX

cat > src/components/Navbar/Navbar.css << 'NAVBARCSS'
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(250, 249, 248, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
.navbar.scrolled {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: rgba(250, 249, 248, 0.98);
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo a {
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}
.name {
  color: #6a8c6a;
  transition: color 0.3s ease;
}
.name:hover {
  color: #8ba888;
}
.title {
  color: #2d2d2a;
  font-weight: 500;
}
.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-link {
  text-decoration: none;
  color: #2d2d2a;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}
.nav-link:hover {
  color: #6a8c6a;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #6a8c6a;
  transition: width 0.3s ease;
}
.nav-link:hover::after {
  width: 100%;
}
.menu-button {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #2d2d2a;
}
.menu-button:hover {
  color: #6a8c6a;
}
@media (max-width: 768px) {
  .nav-container {
    padding: 0.8rem 1.5rem;
  }
  .menu-button {
    display: block;
  }
  .nav-links {
    position: fixed;
    top: 60px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: rgba(250, 249, 248, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transition: left 0.3s ease;
    z-index: 999;
  }
  .nav-links.active {
    left: 0;
  }
  .nav-link {
    font-size: 1.2rem;
  }
}
NAVBARCSS

# ============================================
# 2. HERO
# ============================================
cat > src/components/Hero/Hero.jsx << 'HEROJSX'
import React from 'react'
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="badge">🇻🇪 Venezuela | Programador Full Stack</div>
          <h1 className="hero-title">
            <span className="greeting">Hola, soy</span>
            <span className="name">Hector Hernandez</span>
            <span className="role">TSU en Informática | Desarrollador Full Stack</span>
          </h1>
          <p className="hero-description">
            Actualmente formo parte del equipo de <strong>KLKSISTEMAS</strong>, una empresa venezolana 
            sólida en el mercado. Especializado en <strong>PHP, Laravel, Dart y Flutter</strong>, 
            construyendo soluciones robustas y escalables.
          </p>
          <div className="hero-cta">
            <button onClick={handleScrollToProjects} className="btn btn-primary">
              Ver mis proyectos <FaArrowDown className="btn-icon" />
            </button>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>Contactarme</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/tuusuario" target="_blank" className="social-link"><FaGithub /></a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank" className="social-link"><FaLinkedin /></a>
            <a href="https://twitter.com/tuusuario" target="_blank" className="social-link"><FaTwitter /></a>
          </div>
          <div className="tech-stack">
            <span className="tech-badge">PHP</span>
            <span className="tech-badge">Laravel</span>
            <span className="tech-badge">Dart</span>
            <span className="tech-badge">Flutter</span>
            <span className="tech-badge">JavaScript</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
HEROJSX

cat > src/components/Hero/Hero.css << 'HEROCSS'
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #faf9f8 0%, #f5f3f0 100%);
  padding: 6rem 2rem 4rem;
}
.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
.badge {
  display: inline-block;
  background-color: rgba(107, 140, 107, 0.1);
  color: #6a8c6a;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}
.hero-title {
  margin-bottom: 1.5rem;
}
.greeting {
  display: block;
  font-size: 1.2rem;
  color: #6a8c6a;
}
.name {
  display: block;
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #2d2d2a, #6a8c6a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.role {
  display: block;
  font-size: 1.5rem;
  color: #6a6a66;
}
.hero-description {
  font-size: 1.1rem;
  color: #4a4a46;
  line-height: 1.8;
  margin-bottom: 2rem;
}
.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}
.btn-primary {
  background-color: #6a8c6a;
  color: white;
}
.btn-primary:hover {
  background-color: #8ba888;
  transform: translateY(-2px);
}
.btn-secondary {
  background-color: transparent;
  color: #6a8c6a;
  border: 2px solid #6a8c6a;
}
.btn-secondary:hover {
  background-color: rgba(107, 140, 107, 0.1);
  transform: translateY(-2px);
}
.hero-social {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2rem;
}
.social-link {
  color: #6a8c6a;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}
.social-link:hover {
  color: #8ba888;
  transform: translateY(-3px);
}
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
}
.tech-badge {
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  color: #6a8c6a;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}
.tech-badge:hover {
  transform: translateY(-2px);
}
@media (max-width: 768px) {
  .hero { padding: 5rem 1.5rem 3rem; }
  .name { font-size: 2.5rem; }
  .role { font-size: 1.2rem; }
  .hero-cta { flex-direction: column; align-items: center; }
  .btn { width: 100%; max-width: 250px; justify-content: center; }
}
HEROCSS

# ============================================
# 3. ABOUT
# ============================================
cat > src/components/About/About.jsx << 'ABOUTJSX'
import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Soy un desarrollador apasionado con <strong>TSU en Informática</strong> y más de 3 años de experiencia construyendo aplicaciones web y móviles. Actualmente, formo parte del equipo de <strong>KLKSISTEMAS</strong>, una empresa venezolana con sólida trayectoria.</p>
            <p>Mi stack principal incluye <strong>PHP con Laravel</strong> para el backend, y <strong>Dart con Flutter</strong> para aplicaciones móviles multiplataforma.</p>
            <p>Creo firmemente en el <strong>aprendizaje continuo</strong> y en compartir conocimiento con la comunidad.</p>
            <div className="highlights">
              <div className="highlight-item"><span className="highlight-number">+3</span><span className="highlight-label">Años de experiencia</span></div>
              <div className="highlight-item"><span className="highlight-number">+15</span><span className="highlight-label">Proyectos entregados</span></div>
              <div className="highlight-item"><span className="highlight-number">100%</span><span className="highlight-label">Compromiso</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
ABOUTJSX

cat > src/components/About/About.css << 'ABOUTCSS'
.about {
  padding: 5rem 2rem;
  background-color: white;
}
.about-container {
  max-width: 1200px;
  margin: 0 auto;
}
.section-title {
  font-size: 2.5rem;
  color: #2d2d2a;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  width: 100%;
}
.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #6a8c6a;
}
.about-content {
  max-width: 800px;
  margin: 0 auto;
}
.about-text p {
  font-size: 1.1rem;
  color: #4a4a46;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}
.about-text strong {
  color: #6a8c6a;
}
.highlights {
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  gap: 2rem;
  flex-wrap: wrap;
}
.highlight-item {
  text-align: center;
  flex: 1;
  min-width: 120px;
}
.highlight-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #6a8c6a;
}
.highlight-label {
  font-size: 1rem;
  color: #6a6a66;
}
@media (max-width: 768px) {
  .about { padding: 3rem 1.5rem; }
  .section-title { font-size: 2rem; }
}
ABOUTCSS

# ============================================
# 4. SKILLS
# ============================================
cat > src/components/Skills/Skills.jsx << 'SKILLSJSX'
import React from 'react'
import { SiPhp, SiLaravel, SiDart, SiFlutter, SiJavascript, SiGit, SiMysql, SiHtml5, SiCss3, SiReact, SiNodedotjs } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'PHP', icon: SiPhp, color: '#777BB4', level: 85 },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', level: 80 },
    { name: 'Dart', icon: SiDart, color: '#00B4AB', level: 75 },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B', level: 70 },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 80 },
    { name: 'React', icon: SiReact, color: '#61DAFB', level: 75 },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 70 },
    { name: 'Git', icon: SiGit, color: '#F05032', level: 75 },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 70 },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 90 },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', level: 85 }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Habilidades Técnicas</h2>
        <p className="section-subtitle">Tecnologías que domino y utilizo en mi día a día</p>
        <div className="skills-grid">
          {skills.map((skill) => {
            const IconComponent = skill.icon
            return (
              <div key={skill.name} className="skill-card">
                <div className="icon-wrapper"><IconComponent className="skill-icon" style={{ color: skill.color }} /></div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="progress-bar"><div className="progress-fill" style={{ width: `${skill.level}%` }}></div></div>
                <span className="level-text">{skill.level}%</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
SKILLSJSX

cat > src/components/Skills/Skills.css << 'SKILLSCSS'
.skills {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #faf9f8 0%, #ffffff 100%);
}
.skills-container {
  max-width: 1200px;
  margin: 0 auto;
}
.section-subtitle {
  text-align: center;
  color: #6a6a66;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
.skill-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}
.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
.skill-icon {
  font-size: 3rem;
  transition: transform 0.3s ease;
}
.skill-card:hover .skill-icon {
  transform: scale(1.1);
}
.skill-name {
  font-size: 1.2rem;
  color: #2d2d2a;
  margin: 1rem 0;
}
.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #6a8c6a, #8ba888);
  border-radius: 4px;
  transition: width 1s ease;
}
.level-text {
  font-size: 0.85rem;
  color: #6a6a66;
  display: block;
  margin-top: 0.5rem;
}
@media (max-width: 768px) {
  .skills { padding: 3rem 1.5rem; }
  .skills-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); }
}
SKILLSCSS

# ============================================
# 5. PROJECTS
# ============================================
cat > src/components/Projects/Projects.jsx << 'PROJECTSJSX'
import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    { id: 1, title: 'Sistema de Gestión Empresarial', description: 'ERP completo con Laravel y MySQL para gestión de inventario, ventas y recursos humanos.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500', tags: ['Laravel', 'PHP', 'MySQL'], github: '#', demo: '#', category: 'web' },
    { id: 2, title: 'App Móvil de Delivery', description: 'Aplicación móvil multiplataforma con Flutter para pedidos de comida.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500', tags: ['Flutter', 'Dart', 'Firebase'], github: '#', demo: '#', category: 'mobile' },
    { id: 3, title: 'E-commerce Platform', description: 'Plataforma de comercio electrónico con carrito de compras y pasarela de pagos.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500', tags: ['Laravel', 'Vue.js', 'PayPal'], github: '#', demo: '#', category: 'web' },
    { id: 4, title: 'App de Finanzas Personales', description: 'Control de gastos, presupuestos y metas financieras con gráficos.', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500', tags: ['Flutter', 'Dart', 'SQLite'], github: '#', demo: '#', category: 'mobile' },
    { id: 5, title: 'API REST para Red Social', description: 'API escalable con autenticación JWT, posts y sistema de likes.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500', tags: ['Laravel', 'JWT', 'PostgreSQL'], github: '#', demo: '#', category: 'backend' },
    { id: 6, title: 'Dashboard Administrativo', description: 'Panel de control con gráficos en tiempo real y gestión de usuarios.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500', tags: ['React', 'Laravel', 'Chart.js'], github: '#', demo: '#', category: 'web' }
  ]

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Móvil' },
    { id: 'backend', name: 'Backend' }
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Mis Proyectos</h2>
        <p className="section-subtitle">Algunos de los proyectos que he desarrollado</p>
        <div className="filter-buttons">
          {categories.map(cat => (
            <button key={cat.id} className={`filter-btn ${filter === cat.id ? 'active' : ''}`} onClick={() => setFilter(cat.id)}>
              {cat.name}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="card-image">
                <img src={project.image} alt={project.title} />
                <div className="card-overlay">
                  <div className="card-links">
                    <a href={project.github} target="_blank"><FaGithub /> Código</a>
                    <a href={project.demo} target="_blank"><FaExternalLinkAlt /> Demo</a>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
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
PROJECTSJSX

cat > src/components/Projects/Projects.css << 'PROJECTSCSS'
.projects {
  padding: 5rem 2rem;
  background-color: white;
}
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
}
.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}
.filter-btn {
  padding: 0.6rem 1.5rem;
  background: transparent;
  border: 2px solid #e0e0e0;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}
.filter-btn:hover {
  border-color: #6a8c6a;
  color: #6a8c6a;
}
.filter-btn.active {
  background-color: #6a8c6a;
  border-color: #6a8c6a;
  color: white;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}
.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}
.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}
.card-image {
  position: relative;
  overflow: hidden;
  height: 200px;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.project-card:hover .card-image img {
  transform: scale(1.1);
}
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(107, 140, 107, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.project-card:hover .card-overlay {
  opacity: 1;
}
.card-links {
  display: flex;
  gap: 1rem;
}
.card-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: white;
  color: #6a8c6a;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
}
.card-links a:hover {
  background: #2d2d2a;
  color: white;
}
.card-content {
  padding: 1.5rem;
}
.card-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #2d2d2a;
}
.card-content p {
  color: #6a6a66;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tag {
  background: #f5f3f0;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  color: #6a8c6a;
}
@media (max-width: 768px) {
  .projects { padding: 3rem 1.5rem; }
  .projects-grid { grid-template-columns: 1fr; }
}
PROJECTSCSS

# ============================================
# 6. EXPERIENCE
# ============================================
cat > src/components/Experience/Experience.jsx << 'EXPERIENCEJSX'
import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    { id: 1, title: 'Desarrollador Full Stack', company: 'KLKSISTEMAS', location: 'Venezuela (Remoto)', period: '2022 - Presente', description: ['Desarrollo con Laravel y PHP', 'Apps móviles con Flutter', 'APIs RESTful'] },
    { id: 2, title: 'Desarrollador Web Junior', company: 'Agencia Digital Creativa', location: 'Venezuela', period: '2021 - 2022', description: ['Sitios web responsivos', 'Integración de CMS', 'Soporte técnico'] },
    { id: 3, title: 'Freelance Developer', company: 'Autónomo', location: 'Remoto', period: '2020 - Presente', description: ['Soluciones personalizadas', 'Asesoría técnica', 'Prototipos y MVPs'] }
  ]

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experiencia Profesional</h2>
        <p className="section-subtitle">Mi trayectoria en el mundo del desarrollo de software</p>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              {index !== experiences.length - 1 && <div className="timeline-line"></div>}
              <div className="timeline-content">
                <div className="exp-card">
                  <h3>{exp.title}</h3>
                  <div className="company"><FaBriefcase /> {exp.company}</div>
                  <div className="meta"><FaCalendarAlt /> {exp.period} | <FaMapMarkerAlt /> {exp.location}</div>
                  <ul>
                    {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
EXPERIENCEJSX

cat > src/components/Experience/Experience.css << 'EXPERIENCECSS'
.experience {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #faf9f8 0%, #ffffff 100%);
}
.experience-container {
  max-width: 800px;
  margin: 0 auto;
}
.timeline {
  position: relative;
  padding-left: 2rem;
}
.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}
.timeline-dot {
  position: absolute;
  left: -2rem;
  top: 0;
  width: 1rem;
  height: 1rem;
  background-color: #6a8c6a;
  border-radius: 50%;
  z-index: 2;
}
.timeline-line {
  position: absolute;
  left: -1.55rem;
  top: 1rem;
  width: 2px;
  height: calc(100% + 2rem);
  background: linear-gradient(to bottom, #6a8c6a, #d0e0d0);
}
.timeline-item:last-child .timeline-line {
  display: none;
}
.exp-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}
.exp-card:hover {
  transform: translateX(5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
.exp-card h3 {
  color: #2d2d2a;
  margin-bottom: 0.5rem;
}
.company {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6a8c6a;
  margin-bottom: 0.5rem;
}
.meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6a6a66;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}
.exp-card ul {
  list-style: none;
  padding: 0;
}
.exp-card li {
  color: #4a4a46;
  font-size: 0.9rem;
  padding-left: 1.2rem;
  position: relative;
  margin-bottom: 0.3rem;
}
.exp-card li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #6a8c6a;
}
@media (max-width: 768px) {
  .experience { padding: 3rem 1.5rem; }
  .timeline { padding-left: 1rem; }
  .timeline-dot { left: -1rem; }
  .timeline-line { left: -0.55rem; }
}
EXPERIENCECSS

# ============================================
# 7. CONTACT
# ============================================
cat > src/components/Contact/Contact.jsx << 'CONTACTJSX'
import React, { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <p>Estoy siempre interesado en escuchar sobre nuevos proyectos y oportunidades.</p>
            <div className="contact-list">
              <div><FaEnvelope /> jesus.diaz@email.com</div>
              <div><FaPhone /> +58 412 1234567</div>
              <div><FaMapMarkerAlt /> Venezuela</div>
            </div>
            <div className="social-links">
              <a href="https://github.com/tuusuario" target="_blank"><FaGithub /></a>
              <a href="https://linkedin.com/in/tuusuario" target="_blank"><FaLinkedin /></a>
              <a href="https://twitter.com/tuusuario" target="_blank"><FaTwitter /></a>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Tu nombre" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              <input type="email" name="email" placeholder="Tu correo" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              <textarea name="message" placeholder="Tu mensaje" rows="5" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : <><FaPaperPlane /> Enviar Mensaje</>}
              </button>
              {status === 'success' && <div className="success-msg">¡Mensaje enviado con éxito!</div>}
            </form>
          </div>
        </div>
        <div className="footer">© 2024 Hector Hernandez - Desarrollador Full Stack</div>
      </div>
    </section>
  )
}

export default Contact
CONTACTJSX

cat > src/components/Contact/Contact.css << 'CONTACTCSS'
.contact {
  padding: 5rem 2rem;
  background-color: white;
}
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
}
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}
.contact-info {
  background: #faf9f8;
  padding: 2rem;
  border-radius: 16px;
}
.contact-info h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2d2d2a;
}
.contact-info p {
  color: #6a6a66;
  margin-bottom: 2rem;
}
.contact-list div {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #4a4a46;
}
.contact-list svg {
  color: #6a8c6a;
}
.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}
.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  color: #6a8c6a;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}
.social-links a:hover {
  background: #6a8c6a;
  color: white;
  transform: translateY(-3px);
}
.contact-form {
  background: #faf9f8;
  padding: 2rem;
  border-radius: 16px;
}
.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-form input, .contact-form textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}
.contact-form input:focus, .contact-form textarea:focus {
  outline: none;
  border-color: #6a8c6a;
}
.contact-form button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #6a8c6a;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}
.contact-form button:hover:not(:disabled) {
  background: #8ba888;
  transform: translateY(-2px);
}
.success-msg {
  margin-top: 1rem;
  padding: 0.8rem;
  background: #d4edda;
  color: #155724;
  border-radius: 8px;
  text-align: center;
}
.footer {
  text-align: center;
  padding-top: 3rem;
  border-top: 1px solid #e0e0e0;
  color: #6a6a66;
}
@media (max-width: 768px) {
  .contact { padding: 3rem 1.5rem; }
  .contact-content { grid-template-columns: 1fr; gap: 2rem; }
}
CONTACTCSS

echo ""
echo "========================================="
echo "✅ ¡TODOS LOS COMPONENTES CREADOS! ✅"
echo "========================================="
echo ""
echo "📁 Componentes creados:"
echo "   ✅ Navbar (JSX + CSS)"
echo "   ✅ Hero (JSX + CSS)"
echo "   ✅ About (JSX + CSS)"
echo "   ✅ Skills (JSX + CSS)"
echo "   ✅ Projects (JSX + CSS)"
echo "   ✅ Experience (JSX + CSS)"
echo "   ✅ Contact (JSX + CSS)"
echo ""
echo "🚀 Ahora inicia el servidor:"
echo "   npm run dev"
echo ""
echo "🌐 Abre: http://localhost:5173/"
echo ""

