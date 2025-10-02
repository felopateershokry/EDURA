import React, { useContext, useEffect, useState } from "react";
import "./Player.css";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";

const Player = () => {

    const { enrolledCourses, calculateChapterTime } = useContext(AppContext); 
    const { courseID } = useParams();
    const [courseData, setCourseData] = useState();
    const [openSections, setOpenSections] = useState({});
    const [playerData, setPlayerData] = useState(null);

    const toggleSection = (index) => { 
        setOpenSections((prev) => (
            {...prev, [index]: !prev[index]}
        ))
    }

        const getCourseData = () => {
            enrolledCourses.map((course) => {
                if (course._id === courseID) {
                    setCourseData(course);
                }
            });
        }
        useEffect(() => {
            getCourseData();
        }, [ ]);


    return (
        <>
        <div className="player-container">
  {/* Left */}
            <div className="player-left">
                <h2 className="course-structure-title">Course Structure</h2>
            <div className="course-structure-list">
                {courseData?.courseContent.map((chapter, index) => (
                <div key={index} className="chapter">
                    <div
                    className="chapter-header"
                    onClick={() => toggleSection(index)}
                    >
                    <div className="chapter-title">
                        <img
                        src={assets.down_arrow_icon}
                        alt="arrow"
                        className={`arrow-icon ${
                            openSections[index] ? "open" : ""
                        }`}
                        />
                        <p>{chapter.chapterTitle}</p>
                    </div>
                    <p className="chapter-meta">
                        {chapter.chapterContent.length} Lectures -{" "}
                        {calculateChapterTime(chapter)}
                    </p>
                    </div>

                    <div
                    className={`chapter-content ${
                        openSections[index] ? "open" : ""
                    }`}
                    >
                    <ul>
                        {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className="lecture">
                            <img
                            src={false? assets.blue_tick_icon :assets.play_icon}
                            alt="play icon"
                            className="lecture-icon"
                            />
                            <div className="lecture-info">
                            <p>{lecture.lectureTitle}</p>
                            <div className="lecture-meta">
                                {lecture.lectureUrl && (
                                <p
                                    onClick={() =>
                                    setPlayerData({
                                        ...lecture, chapter: index + 1, lecture: i+1
                                    })
                                    }
                                    className="preview-link"
                                >
                                    Watch
                                </p>
                                )}
                                <p>
                                {humanizeDuration(
                                    lecture.lectureDuration * 60 * 1000,
                                    { units: ["h", "m"] }
                                )}
                                </p>
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
            {/* Right */}
            <div></div>
        </div>
        </>
    );
    };

export default Player;
