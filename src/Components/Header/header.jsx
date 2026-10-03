import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import profileImage from '../../Assets/profileimage.png'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import PortfolioContent from '../PortfolioContent/PortfolioContent'

const Header = () => {
  const heroRef = useRef(null)
  const [showArrow, setShowArrow] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowArrow(entry.isIntersecting),
      { threshold: 0.25 }
    )

    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <header>

      {/* ---------------- Photo, name and intro section ------------------ */}
      <section ref={heroRef}>
        <div className="container">
          <img src={profileImage} className='profile_image' alt="A K M Tasfiq Abedin"/>
          <div className="text_container">
            <h4 className='text suffix_text_profile_name'>Hello, I'm</h4>
            <h1 className='text profile_name'> A K M TASFIQ ABEDIN</h1>
            <h4 className='text suffix_text_profile_name'>Industrial Engineer, Data Analyst, Programmer, LEAN Practitioner, AI Practitioner</h4>
          </div>
          <div className='quote_container'>
            <p className='quote_1'>Only You Can Decide <span className='high_priority'>What You Want To BE</span></p>
          </div>
          {showArrow && <a href="#impact" className='downArrow' aria-label="Go to results" onClick={() => setShowArrow(false)}><BsFillArrowDownCircleFill/></a>}
          {/* <CTA/> */}
          <div className='design'>
            <div id="column_1"></div>
            <div id="column_2"></div>
            <div id="column_3"></div>
          </div>
        </div>
      </section>

      <PortfolioContent />
    </header>
  )
}

export default Header

