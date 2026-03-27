import React from 'react'
import { SiPhp, SiLaravel, SiDart, SiFlutter, SiJavascript, SiGit, SiMysql } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'PHP', icon: SiPhp, color: '#777BB4', level: 85 },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', level: 80 },
    { name: 'Dart', icon: SiDart, color: '#00B4AB', level: 75 },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B', level: 70 },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 80 },
    { name: 'Git', icon: SiGit, color: '#F05032', level: 75 },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 70 }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skills.map(skill => {
            const Icon = skill.icon
            return (
              <div key={skill.name} className="skill-card">
                <Icon style={{ color: skill.color, fontSize: '3rem' }} />
                <h3>{skill.name}</h3>
                <div className="progress"><div style={{ width: `${skill.level}%` }}></div></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
