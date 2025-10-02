import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <footer className="footer-container">
      <div className="footer-left">
        <img src={assets.logo} alt="logo" className="footer-logo" />
        <div className="footer-divider"></div>
        <p className="footer-text">
          © {new Date().getFullYear()} Felopateer Shokry. All rights reserved.
        </p>
      </div>
      <div className="footer-right">
        <a href="#">
          <img src={assets.facebook_icon} alt="Facebook" />
        </a>
        <a href="#">
          <img src={assets.twitter_icon} alt="Twitter" />
        </a>
        <a href="#">
          <img src={assets.instagram_icon} alt="Instagram" />
        </a>
      </div>
    </footer>
    )
}

export default Footer
