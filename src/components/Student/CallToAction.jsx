import React from 'react'
import { assets } from './../../assets/assets';
import './CallToAction.css'
const CallToAction = () => {
    return (
        <div className="cta-section">
            <h1 className="cta-title">Learn anything, anytime, anywhere</h1>
            <p className="cta-subtitle">
                flexible way to grow, explore, and gain knowledge without limits.
            </p>
            <div className="cta-buttons">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">
                Learn more <img src={assets.arrow_icon} alt="arrow" />
                </button>
            </div>
        </div>
    )
}

export default CallToAction
