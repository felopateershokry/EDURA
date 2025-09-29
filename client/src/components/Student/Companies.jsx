import React from 'react'
import { assets } from '../../assets/assets'
import './Companies.css'

const Companies = () => {
    return (
        <div className="trusted-section">
            <p>Trusted by learners from</p>
            <div className="trusted-logos">
                <img src={assets.microsoft_logo} alt="microsoft logo" />
                <img src={assets.walmart_logo} alt="walmart logo" />
                <img src={assets.accenture_logo} alt="accenture logo" />
                <img src={assets.adobe_logo} alt="adobe logo" />
                <img src={assets.paypal_logo} alt="paypal logo" />
            </div>
        </div>

    )
}

export default Companies
