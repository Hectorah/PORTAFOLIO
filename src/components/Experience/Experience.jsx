import React from 'react'
import { experienceData } from '../../data/portfolioData'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experiencia <span>Laboral</span></h2>
        <div className="timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot" />
              <div className="exp-card">
                <div className="exp-header">
                  <h3>{exp.position}</h3>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-company">{exp.company}</p>
                <ul>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
