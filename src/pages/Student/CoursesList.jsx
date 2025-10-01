import React, { useContext, useState ,useEffect } from 'react'
import { AppContext } from './../../context/AppContext';
import SearchBar from './../../components/Student/SearchBar';
import { useParams } from 'react-router-dom';
import CourseCard from './../../components/Student/CourseCard';
import './CoursesList.css'
import { assets } from '../../assets/assets';
import Footer from '../../components/Student/Footer';
const CoursesList = () => {

    const { navigate, allCourses } = useContext(AppContext)
    const { input } = useParams();
    const [filteredCourses, setFilteredCourses] = useState([]);
    
    useEffect(() => {
        if (allCourses && allCourses.length > 0) {
            const tempCourses = allCourses.slice();

            input ? 
                setFilteredCourses(
                    tempCourses.filter(
                        item => item.courseTitle.toLowerCase().includes(input.toLowerCase()) ||
                            item.courseDescription.toLowerCase().includes(input.toLowerCase())
                    )
                )
                : setFilteredCourses(tempCourses);
        }
    }
    , [allCourses, input]);

    return (
        <>
            <div className="course-list-container">
                <div className="course-list-header">
                    <div>
                        <h1 className="course-list-title">
                            Course List
                        </h1>
                        <p className="course-list-breadcrumb">
                            <span className="breadcrumb-home" onClick={() => navigate('/')}>Home</span> / <span>Course List</span>
                        </p>
                    </div>
                    <SearchBar data={input} />
                </div>
                {
                    input && <div className="search-info">
                        <p>{input}</p>
                        <img src={assets.cross_icon} alt="" className='cross' onClick={() => navigate('/course-list')}/>
                    </div>
                }
                <div className="course-list-grid">
                    {filteredCourses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CoursesList
