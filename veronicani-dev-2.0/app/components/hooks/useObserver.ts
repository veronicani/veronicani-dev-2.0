'use client';

import { useEffect, useState } from "react";

// Refer to: https://javascript.plainenglish.io/how-to-activate-links-on-scroll-in-nextjs-ec6b23370b70

/** useObserver: Updates the active section on scroll position.
 * Returns the href of the active section.
 */
const useObserver = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  useEffect(() => {
    const about = document.getElementById('about')
    const projects = document.getElementById('projects')
    const experience = document.getElementById('experience')
    const contact = document.getElementById('contact')
    
    const sections = [about, projects, experience, contact]
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'about') {
            setActiveSection('#about');
          } else if (entry.target.id === 'projects') {
            setActiveSection('#projects');
          } else if (entry.target.id === 'experience') {
            setActiveSection('#experience');
          } else if (entry.target.id === 'contact') {
            setActiveSection('#contact');
          }
        }
      })
    }, observerOptions)
  
    sections.forEach(section => {
      section && observer.observe(section)
    })

  }, [])

  return activeSection;
};

export default useObserver;