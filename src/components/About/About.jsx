import React from 'react'
import { aboutData } from '../../data/portfolioData'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">Sobre <span>Mí</span></h2>
        <div className="about-content">
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
          <div className="highlights">
            {aboutData.highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <span className="number">{highlight.number}</span>
                <span className="highlight-label">{highlight.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
