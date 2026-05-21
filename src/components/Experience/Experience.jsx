import React from 'react'
import TypewriterTitle from '../TypewriterTitle/TypewriterTitle'
import { experienceData } from '../../data/portfolioData'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <TypewriterTitle title="Experiencia" highlight="Laboral" />
        <div className="timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot" />
              <div className="exp-card">
                <div className="exp-header">
                  <h3>{exp.position}</h3>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-company"><a href="https://www.klk.com.ve" target="_blank" rel="noreferrer" class="company-link">{exp.company}</a></p>
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
