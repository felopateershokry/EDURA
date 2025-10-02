import React from 'react'
import { assets } from '../../assets/assets'
import './Hero.css'
import SearchBar from './SearchBar';

const Hero = () => {
    return (
        <div className="hero-section">
            <h1 className="hero-heading">
                Welcome to Edura
                <h2 className="hero-subheading">
                    The Ultimate Gaming Learning Experience
                </h2>
            </h1>
            
            <p className="hero-subtext">
                Learn through gaming! Master subjects with our retro Atari-style educational platform.</p>
            <SearchBar />
        </div>


    )
}

export default Hero
