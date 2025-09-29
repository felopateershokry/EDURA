import React from 'react'
import { Link } from 'react-router-dom'
import './CoursesSection.css'
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';
// import CourseCard from './CourseCard';

const CoursesSection = () => {

    const {allCourses} = useContext(AppContext);

    return (
        <div className="learn-section">
            <h2>Learn from the best</h2>
            <p>Explore our top courses and start your learning journey today!</p>

            <div className="courses-grid">
                {allCourses.slice(0, 4).map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>



            <Link to="/course-list" onClick={() => scrollTo(0, 0)}>Show all courses</Link>
        </div>
    )
}

export default CoursesSection
