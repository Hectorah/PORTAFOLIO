import React from 'react'
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-code-snippets">
        <span className="code-snippet">{'const dev = new HectorHernandez();'}</span>
        <span className="code-snippet">{'Route::get(\'/api/projects\', [ProjectController::class, \'index\']);'}</span>
        <span className="code-snippet">{'flutter build apk --release'}</span>
        <span className="code-snippet">{'SELECT * FROM projects WHERE status = "active";'}</span>
        <span className="code-snippet">{'git commit -m "feat: new feature"'}</span>
        <span className="code-snippet">{'class AppController extends Controller {'}</span>
        <span className="code-snippet">{'Widget build(BuildContext context) => Scaffold(...);'}</span>
        <span className="code-snippet">{'php artisan make:model Project -mcr'}</span>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="badge">🇻🇪 Venezuela | Programador Full Stack</div>
          <h1 className="hero-title">
            <span className="greeting">Hola, soy</span>
            <span className="name">Hector Hernandez</span>
            <span className="role">TSU en Informática | Desarrollador Full Stack</span>
          </h1>
          <p className="hero-description">
            Actualmente formo parte del equipo de <strong>KLKSISTEMAS</strong>. Especializado en <strong>PHP, Laravel, Dart y Flutter</strong>.
          </p>
          <div className="hero-cta">
            <button onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary">
              Ver mis proyectos <FaArrowDown />
            </button>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Contactarme
            </a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/tuusuario" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank"><FaLinkedin /></a>
            <a href="https://twitter.com/tuusuario" target="_blank"><FaTwitter /></a>
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
