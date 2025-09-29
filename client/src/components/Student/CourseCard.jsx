import React from 'react'
import { assets } from './../../assets/assets';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import './CourseCard.css'

const CourseCard = ({ course }) => {
    
    const { currency } = useContext(AppContext);
    const { calculatRating } = useContext(AppContext);

    return (
        <Link to={'/course/' + course._id} onClick={() => scrollTo(0, 0)} className="course-card">
            <img src={course.courseThumbnail} alt="" />
            <div className="card-body">
                <h3>{course.courseTitle}</h3>
                <p>Instructor: {course.educator.name}</p>
                <div className="rating">
                    <p>{calculatRating(course)}</p>
                    <div className="stars">
                        {[...Array(5)].map((_, index) => (
                            <img src={ index < Math.floor(calculatRating(course)) ? assets.star : assets.star_blank } key={index} />
                        ))}
                    </div>
                    <p>({course.courseRatings.length})</p>
                </div>
                <p className="price">
                {currency} {(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}
                </p>
            </div>
        </Link>

    )
}

export default CourseCard
