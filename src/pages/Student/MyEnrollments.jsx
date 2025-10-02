import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Line } from "rc-progress";
import Footer from "../../components/Student/Footer";
import "./MyEnrollments.css";

const MyEnrollments = () => {
    const { enrolledCourses, calculateCourseDuration, navigate } =
        useContext(AppContext);

    const [progressArray, setProgressArray] = useState([
        { lectureCompleted: 2, totalLectures: 4 },
        { lectureCompleted: 1, totalLectures: 5 },
        { lectureCompleted: 6, totalLectures: 6 },
        { lectureCompleted: 0, totalLectures: 3 },
        { lectureCompleted: 5, totalLectures: 8 },
        { lectureCompleted: 4, totalLectures: 10 },
        { lectureCompleted: 7, totalLectures: 12 },
        { lectureCompleted: 6, totalLectures: 9 },
        { lectureCompleted: 8, totalLectures: 15 },
        { lectureCompleted: 9, totalLectures: 14 },
        { lectureCompleted: 2, totalLectures: 7 },
        { lectureCompleted: 10, totalLectures: 10 },
        { lectureCompleted: 0, totalLectures: 6 },
        { lectureCompleted: 12, totalLectures: 16 },
    ]);

    return (
        <>
        <div className="enrollments-container">
            <h1 className="enrollments-title">My Enrollments</h1>
            <table className="enrollments-table">
            <thead className="table-head">
                <tr>
                <th className="table-th">Course</th>
                <th className="table-th">Duration</th>
                <th className="table-th">Completed</th>
                <th className="table-th">Status</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {enrolledCourses.map((course, index) => (
                <tr key={index} className="table-row">
                    <td className="table-course">
                    <img
                        src={course.courseThumbnail}
                        alt=""
                        className="course-thumbnail"
                    />
                    <div className="course-info">
                        <p className="course-title">{course.courseTitle}</p>
                        <Line
                        strokeWidth={2}
                        percent={
                            progressArray[index]
                            ? (progressArray[index].lectureCompleted /
                                progressArray[index].totalLectures) *
                                100
                            : 0
                        }
                        className={
                            progressArray[index] &&
                            (progressArray[index].lectureCompleted ===
                            progressArray[index].totalLectures
                            ? "progress-bar completed-progress"
                            : "progress-bar ongoing-progress")
                        }
                        />
                    </div>
                    </td>
                    <td className="table-td">{calculateCourseDuration(course)}</td>
                    <td className="table-td">
                    {progressArray[index] &&
                        `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`}{" "}
                    <span>Lectures</span>
                    </td>
                    <td className="table-td">
                    <button
                        onClick={() => navigate("/player/" + course._id)}
                        className={
                        progressArray[index] &&
                        (progressArray[index].lectureCompleted ===
                        progressArray[index].totalLectures
                            ? "status-btn completed"
                            : "status-btn ongoing")
                        }
                    >
                        {progressArray[index] &&
                        progressArray[index].lectureCompleted ===
                        progressArray[index].totalLectures
                        ? "Completed"
                        : "On Going"}
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        <Footer />
        </>
    );
};

export default MyEnrollments;
