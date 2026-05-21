import React, { useState } from 'react'
import TypewriterTitle from '../TypewriterTitle/TypewriterTitle'
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaBriefcase, FaSpinner, FaCheck, FaExclamationTriangle } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { personalInfo } from '../../data/portfolioData'
import './Contact.css'

const FORMSPREE_URL = 'https://formspree.io/f/mnjwllkp'

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Nuevo mensaje de ${formState.name} - Portafolio`,
          _replyto: formState.email,
          _from_name: formState.name
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const getButtonContent = () => {
    switch (status) {
      case 'loading':
        return <><FaSpinner className="spinner" /> Enviando...</>
      case 'success':
        return <><FaCheck /> ¡Mensaje enviado!</>
      case 'error':
        return <><FaExclamationTriangle /> Error, intenta de nuevo</>
      default:
        return 'Enviar mensaje'
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <TypewriterTitle title="Hablemos" highlight="Juntos" />
        <div className="contact-content">
          <div className="contact-info">
            <h3>¿Tienes un proyecto en mente?</h3>
            <p>Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar sobre tecnología.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-item-icon"><FaEnvelope /></span>
                <div>
                  <div>{personalInfo.emailPersonal}</div>
                  <small style={{ color: '#94a3b8' }}>{personalInfo.emailWork}</small>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon"><FaMapMarkerAlt /></span>
                {personalInfo.location}
              </div>
              <div className="contact-item">
                <span className="contact-item-icon"><FaBriefcase /></span>
                <a href={personalInfo.companyUrl} target="_blank" rel="noreferrer" class="company-link">{personalInfo.company}</a>
              </div>
            </div>
            <div className="social">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href={`https://wa.me/${personalInfo.whatsapp.replace('+', '')}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input id="name" type="text" placeholder="Tu nombre" value={formState.name} onChange={handleChange} required disabled={status === 'loading'} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="tu@email.com" value={formState.email} onChange={handleChange} required disabled={status === 'loading'} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" rows="5" placeholder="Cuéntame sobre tu proyecto..." value={formState.message} onChange={handleChange} required disabled={status === 'loading'} />
            </div>
            <button type="submit" disabled={status === 'loading'} className={status}>
              {getButtonContent()}
            </button>
            {status === 'success' && (
              <p className="form-success">¡Gracias! Tu mensaje ha sido enviado. Te responderé pronto.</p>
            )}
            {status === 'error' && (
              <p className="form-error">Hubo un error al enviar. Por favor intenta de nuevo.</p>
            )}
          </form>
        </div>
        <div className="footer">© 2026 {personalInfo.name} — {personalInfo.title}</div>
      </div>
    </section>
  )
}

export default Contact
