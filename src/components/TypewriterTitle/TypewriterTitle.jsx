import React, { useState, useEffect, useRef } from 'react'
import './TypewriterTitle.css'

const TypewriterTitle = ({ title, highlight, speed = 100, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef(null)
  
  // Combinar texto completo para el efecto
  const fullText = `${title} ${highlight}`

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsTyping(true)
            setHasAnimated(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (!isTyping) return

    let timeout
    let currentIndex = 0

    const startTyping = () => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1))
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
  }, [isTyping, fullText, speed, delay])

  // Separar el texto para aplicar el estilo al highlight
  const titlePart = displayText.slice(0, title.length + 1)
  const highlightPart = displayText.slice(title.length + 1)

  return (
    <h2 className="section-title typewriter-title" ref={containerRef}>
      {titlePart}
      <span>{highlightPart}</span>
      <span className={`cursor ${isTyping ? 'blink' : 'hide'}`}>|</span>
    </h2>
  )
}

export default TypewriterTitle