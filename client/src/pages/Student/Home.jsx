import React from 'react'
import Hero from '../../components/Student/Hero'
import Companies from '../../components/Student/Companies'
import './Home.css'
import CoursesSection from '../../components/Student/CoursesSection'
import TestimonialsSection from '../../components/Student/TestimonialsSection'
const Home = () => {
    return (
        <div className='home-section'>
            <Hero />
            <Companies />
            <CoursesSection />
            <TestimonialsSection />
        </div>
    )
}

export default Home
