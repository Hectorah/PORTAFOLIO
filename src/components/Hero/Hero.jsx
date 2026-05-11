import React, { useState, useEffect } from 'react'
import { FaArrowDown, FaGithub } from 'react-icons/fa'
import { personalInfo } from '../../data/portfolioData'
import './Hero.css'

// Hook para efecto de máquina de escribir
const useTypewriter = (text, speed = 100, delay = 500) => {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout
    let currentIndex = 0

    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        currentIndex++
        timeout = setTimeout(startTyping, speed)
      } else {
        setIsTyping(false)
      }
    }

    const initialDelay = setTimeout(startTyping, delay)

    return () => {
      clearTimeout(timeout)
      clearTimeout(initialDelay)
    }
  }, [text, speed, delay])

  return { displayText, isTyping }
}

const Hero = () => {
  const { displayText, isTyping } = useTypewriter('Héctor Hernández', 120, 600)

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
          <div className="badge">🇻🇪 {personalInfo.location} | {personalInfo.title}</div>
          <h1 className="hero-title">
            <span className="greeting">Hola, soy</span>
            <span className="name typewriter">
              {displayText}
              <span className={`cursor ${isTyping ? 'blink' : ''}`}>|</span>
            </span>
            <span className="role">{personalInfo.degree} | {personalInfo.title}</span>
          </h1>
          <p className="hero-description">
            Actualmente formo parte del equipo de <strong>{personalInfo.company}</strong>. Especializado en <strong>PHP, Laravel, React, Node.js, Dart y Flutter</strong>.
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
            <a href={personalInfo.github} target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
          <div className="tech-stack">
            <span className="tech-badge">PHP</span>
            <span className="tech-badge">Laravel</span>
            <span className="tech-badge">React</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Flutter</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
