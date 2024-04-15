import React from 'react'
import './banner.css'
import video from '../assets/banner-kiska-video.mp4'


function Banner() {
  return (
    <div className='banner'>
      <div className="banner-video">
        <video src={video} autoPlay loop muted></video>
      </div>
      <div className="banner-content">
        <p>DESIGNING DESIRE</p>
        <h1>Unleash the power of brand
            <br/>
            and design
        </h1>
      </div>
        <a href='#talktous' id='#talktous' className='talk-to-us'>
            Talk to us
        </a>
      
    </div>
  )
}

export default Banner
