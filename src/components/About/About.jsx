import React from 'react'
import TypewriterTitle from '../TypewriterTitle/TypewriterTitle'
import { aboutData } from '../../data/portfolioData'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <TypewriterTitle title="Sobre" highlight="Mí" />
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
