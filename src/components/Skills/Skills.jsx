import React from 'react'
import TypewriterTitle from '../TypewriterTitle/TypewriterTitle'
import { SiPhp, SiLaravel, SiDart, SiFlutter, SiJavascript, SiGit, SiMysql, SiReact, SiNodedotjs, SiSqlite } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'PHP', icon: SiPhp, color: '#a78bfa' },
    { name: 'Laravel', icon: SiLaravel, color: '#f87171' },
    { name: 'JavaScript', icon: SiJavascript, color: '#fbbf24' },
    { name: 'React', icon: SiReact, color: '#61dafb' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Dart', icon: SiDart, color: '#34d399' },
    { name: 'Flutter', icon: SiFlutter, color: '#60a5fa' },
    { name: 'MySQL', icon: SiMysql, color: '#38bdf8' },
    { name: 'SQLite', icon: SiSqlite, color: '#003b57' },
    { name: 'Git', icon: SiGit, color: '#fb923c' }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <TypewriterTitle title="Mis" highlight="Habilidades" />
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
