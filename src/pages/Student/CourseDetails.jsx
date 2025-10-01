import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './../../context/AppContext';
import Loading from '../../components/Student/Loading';
import { assets } from '../../assets/assets';
import humanizeDuration from 'humanize-duration';
import './CourseDetails.css'
import Footer from '../../components/Student/Footer';
import CourseCard from './../../components/Student/CourseCard';
const CourseDetails = () => {

    const { id } = useParams();
    
    const [courseData, setCourseData] = useState();
    const [openSections, setOpenSections] = useState({});
    const [isAlreadyEnrolled, setisAlreadyEnrolled] = useState(false);

    const { allCourses, calculatRating, calculateChapterTime, calculateCourseDuration, calculateNoOfLectures, currency} = useContext(AppContext);
    
    const fetchCourseData = async () => { 
        const findCourse = allCourses.find(course => course._id === id)
        setCourseData(findCourse);
    }
    useEffect(() => {
            fetchCourseData();
    }, []);

    const toggleSection = (index) => { 
        setOpenSections((prev) => (
            {...prev, [index]: !prev[index]}
        ))
    }

    return courseData ? (
        <>
        <div className="course-details-container">
            <div className="course-details-bg"></div>

    {/* Left Section */}
            <div className="course-details-left">
                <h1 className="course-details-title">{courseData?.courseTitle}</h1>
                <p
                    className="course-details-description"
                    dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}
                ></p>

        {/* Rating */}
                <div className="course-details-rating">
                    <p>{calculatRating(courseData)}</p>
                    <div className="rating-stars">
                        {[...Array(5)].map((_, index) => (
                            <img
                                src={ index < Math.floor(calculatRating(courseData)) ? assets.star : assets.star_blank }
                                key={index}
                            />
                        ))}
                    </div>
                    <p className="rating-count">({courseData.courseRatings.length})</p>
                    <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'Students': 'Student'}</p>
                </div>

                <p className="course-details-author">
                    Course by <span className="author-link">Felopateer Shokry</span>
                </p>

                {/* Course Structure */}
                <div className="course-structure">
                    <h2>Course Structure</h2>
                    <div className="course-structure-list">
                        {courseData.courseContent.map((chapter, index) => (
                            <div key={index} className="chapter">
                                <div
                                    className="chapter-header"
                                    onClick={() => toggleSection(index)}
                                >
                                    <div className="chapter-title">
                                        <img src={assets.down_arrow_icon} alt="arrow" className={`arrow-icon ${openSections[index] ? 'open' : ''}`}/>
                                        <p>{chapter.chapterTitle}</p>
                                    </div>
                                    <p className="chapter-meta">
                                        {chapter.chapterContent.length} Lectures - {calculateChapterTime(chapter)}
                                    </p>
                                </div>

                                <div className={`chapter-content ${openSections[index] ? 'open' : ''}`}>
                                    <ul>
                                        {chapter.chapterContent.map((lecture, i) => (
                                            <li key={i} className="lecture">
                                                <img src={assets.play_icon} alt="play icon" className="lecture-icon" />
                                                <div className="lecture-info">
                                                    <p>{lecture.lectureTitle}</p>
                                                    <div className="lecture-meta">
                                                        {lecture.isPreviewFree && <p className="preview-link">Preview</p>}
                                                        <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h','m']})}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="course-description-section">
                    <h3 className="course-description-title">Course Description</h3>
                    <p
                        className="course-description-text rich-text"
                        dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}
                    ></p>
                </div>

            </div>

            {/* Right Section */}
            <div className="course-right">
                <img src={courseData.courseThumbnail} alt="" />
                <div className='course-right-content'>
                    <div className='course-time-left'>
                        {/* <img className='clock-icon' src={assets.time_left_clock_icon} alt="time_left_clock_icon" /> */}
                        <p><span className='highlight'>5 days </span>left at this price</p>
                    </div>

                    <div className='course-price'>
                        <p className='current-price'>{currency}{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}</p>
                        <p className='original-price'>{currency}{courseData.coursePrice}</p>
                        <p className='discount'>{courseData.discount}% off</p>
                    </div>

                    <div className='course-stats'>
                        <div className='stat'>
                            <img src={assets.star} alt="star" />
                            <p>{calculatRating(courseData)}</p>
                        </div>
                        <div className='divider'></div>
                        <div className='stat'>
                            <img src={assets.time_clock_icon} alt="clock" />
                            <p>{calculateCourseDuration(courseData)}</p>
                        </div>
                        <div className='divider'></div>
                        <div className='stat'>
                            <img src={assets.lesson_icon} alt="lesson" />
                            <p>{calculateNoOfLectures(courseData)} Lessons</p>
                        </div>
                    </div>

                    <button className='enroll'>{isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}</button>

                    <div className='course-benefits'>
                        <p className='benefits-title'>What's in the Course?</p>
                        <ul className='benefits-list'>
                            <li>Lifetime access with free updates.</li>
                            <li>Step-by-step, hands-on project guidance.</li>
                            <li>Downloadable resources and source code.</li>
                            <li>Quizzes to test your knowledge.</li>
                            <li>Certificate of completion.</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </>
    ) : <Loading />;
}

export default CourseDetails
