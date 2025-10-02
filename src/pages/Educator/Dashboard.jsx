import React, { useContext, useEffect, useState } from 'react'
import './Dashboard.css'
import { AppContext } from '../../context/AppContext';
import { assets, dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/Student/Loading';

const Dashboard = () => {

    const {currency} = useContext(AppContext); 

    const [dashboardData, setDashboardData] = useState(null);

    const fetchDashboardData = async () => {
        setDashboardData(dummyDashboardData);
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    return dashboardData ? (
      <div className="dashboard-container">
        <div className="dashboard-stats-wrapper">
          <div className="dashboard-card">
            <img
              src={assets.patients_icon}
              alt=""
              className="dashboard-card-icon"
            />
            <div>
              <p className="dashboard-card-value">
                {dashboardData.enrolledStudentsData.length}
              </p>
              <p className="dashboard-card-label">Total Enrolments</p>
            </div>
          </div>
          <div className="dashboard-card">
            <img
              src={assets.appointments_icon}
              alt=""
              className="dashboard-card-icon"
            />
            <div>
              <p className="dashboard-card-value">
                {dashboardData.totalCourses}
              </p>
              <p className="dashboard-card-label">Total Courses</p>
            </div>
          </div>
          <div className="dashboard-card">
            <img
              src={assets.earning_icon}
              alt=""
              className="dashboard-card-icon"
            />
            <div>
              <p className="dashboard-card-value">
                {currency} {dashboardData.totalEarnings}
              </p>
              <p className="dashboard-card-label">Total Earnings</p>
            </div>
          </div>
        </div>
        <div className="dashboard-latest-wrapper">
          <h2 className="dashboard-latest-title">Latest Enrolments</h2>
          <div className="dashboard-table-wrapper">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th className="dashboard-th-index">#</th>
                  <th>Student Name</th>
                  <th>Course Title</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.enrolledStudentsData.map((item, index) => (
                  <tr key={index} className="dashboard-tr">
                    <td className="dashboard-td-index">{index + 1}</td>
                    <td className="dashboard-td-student">
                      <img
                        src={item.student.imageUrl}
                        alt=""
                        className="dashboard-student-img"
                      />
                      <span className="dashboard-student-name">
                        {item.student.name}
                      </span>
                    </td>
                    <td className="dashboard-td-course">{item.courseTitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ) : (
      <Loading />
    );
}

export default Dashboard
