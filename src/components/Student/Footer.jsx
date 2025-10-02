import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer-student">
            <div className="footer-content">
                <div className="footer-col">
                    <Link to="/">
                        <img src={assets.logo_dark} alt="logo" />
                    </Link>
                    <p className="footer-description">
                        Edura The Ultimate Gaming Learning Experience
                    </p>
                </div>

                <div className="footer-col">
                    <h2 className="footer-heading">Company</h2>
                    <ul className="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Privacy policy</a></li>
                    </ul>
                </div>

                <div className="footer-col newsletter">
                    <h2 className="footer-heading">Subscribe to our newsletter</h2>
                    <p className="newsletter-text">
                        The latest courses and resources sent to your inbox weekly
                    </p>
                    <div className="newsletter-form">
                        <input
                        type="email"
                        placeholder="Enter your email"
                        className="newsletter-input"
                        />
                        <button className="newsletter-btn">Subscribe</button>
                    </div>
                </div>
            </div>

            <p className="footer-copy">
                © {new Date().getFullYear()} Felopateer Shokry. All rights reserved.
            </p>
</footer>

    )
}

export default Footer
