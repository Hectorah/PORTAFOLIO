import React from 'react'
import { SiPhp, SiLaravel, SiDart, SiFlutter, SiJavascript, SiGit, SiMysql } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'PHP', icon: SiPhp, color: '#a78bfa' },
    { name: 'Laravel', icon: SiLaravel, color: '#f87171' },
    { name: 'Dart', icon: SiDart, color: '#34d399' },
    { name: 'Flutter', icon: SiFlutter, color: '#60a5fa' },
    { name: 'JavaScript', icon: SiJavascript, color: '#fbbf24' },
    { name: 'Git', icon: SiGit, color: '#fb923c' },
    { name: 'MySQL', icon: SiMysql, color: '#38bdf8' }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Mis <span>Habilidades</span></h2>
        <div className="skills-grid">
          {skills.map(skill => {
            const Icon = skill.icon
            return (
              <div key={skill.name} className="skill-card">
                <div className="skill-icon">
                  <Icon style={{ color: skill.color }} />
                </div>
                <h3>{skill.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
