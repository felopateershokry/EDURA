import React from 'react'
import Hero from '../../components/Student/Hero'
import Companies from '../../components/Student/Companies'
import './Home.css'
import CoursesSection from '../../components/Student/CoursesSection'
import TestimonialsSection from '../../components/Student/TestimonialsSection'
import CallToAction from '../../components/Student/CallToAction'
import Footer from '../../components/Student/Footer'
const Home = () => {
    return (
        <div className='home-section'>
            <Hero />
            <Companies />
            <CoursesSection />
            <TestimonialsSection />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default Home
