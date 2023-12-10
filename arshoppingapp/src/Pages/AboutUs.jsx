import React from 'react'
import './CSS/AboutUs.css'
import logo_big from '../Components/Assets/logo_big.png'

const AboutUs = () => {
  return (
    <div>
    <div class="about-section">
        <h1>About Us</h1>
        <div class='about-intro'>
          <h2>At CloudRetail, we understand that the future of online retail lies in seamlessly blending the virtual and physical worlds. That's why we have crafted a cutting-edge cloud-based e-commerce solution that leverages the power of Augmented Reality (AR) to redefine the way consumers engage with products.</h2>
          <p>Find out about us and our team</p>
        </div>
    </div>
    <div class="row">
        <div class="column">
            <div class="card">
                <div class="container">
                <h2>E Aziz</h2>
                <center><img src={logo_big}/></center>
                <p class="title">CEO & Founder</p>
                <p>BSc (Hons) Computer Science</p>
                <p>MSc Software Engineering with Cloud Computing</p>
                <p>eaziz@cloudretail.com</p>
                <p><button class="button">Contact</button></p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs