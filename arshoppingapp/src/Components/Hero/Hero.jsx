import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left-side">
            <h2>New Products</h2>
            <div>
                <div className="hand-icon-hero">
                    <p>Browse</p>
                    <img src={hand_icon} alt='' />
                </div>
                <p>All Our</p>
                <p>Products</p>
            </div>
        </div>
        <div className="hero-right-side">
            <img src={hero_image} alt='' />
        </div>
    </div>
  )
}

export default Hero
