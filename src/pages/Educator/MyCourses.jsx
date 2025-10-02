import React, { useContext, useEffect, useState } from 'react'
import './MyCourses.css'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/Student/Loading';

const MyCourses = () => {

    const [courses, setCourses] = useState(null);
    const { currency, allCourses } = useContext(AppContext);

    const fetchEducatorCourses = async () => {
        setCourses(allCourses);
    };

    useEffect(() => {
        fetchEducatorCourses();
    }, [allCourses]);

    return courses ? (
        <div className='mycourses-container'>
            <div className='mycourses-wrapper'>
                <h2 className='mycourses-title'>My Courses</h2>
                <div className='mycourses-table-wrapper'>
                    <table className='mycourses-table'>
                        <thead className='mycourses-thead'>
                            <tr>
                                <th>All Courses</th>
                                <th>Earnings</th>
                                <th>Students</th>
                                <th>Published On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course.id} className='mycourses-tr'>
                                    <td className='mycourses-td-course'>
                                        <img src={course.courseThumbnail} alt="" className='mycourses-course-img' />
                                        <span className='mycourses-course-title'>{course.courseTitle}</span>
                                    </td>
                                    <td className='mycourses-td'>{currency} {Math.floor(course.coursePrice - (course.discount * course.coursePrice) / 100)}</td>
                                    <td className='mycourses-td'>{course.enrolledStudents.length}</td>
                                    <td className='mycourses-td'>
                                        {new Date(course.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    ) : <Loading />
}

export default MyCourses;
