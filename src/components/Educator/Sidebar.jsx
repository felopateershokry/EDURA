import React, { useContext } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { AppContext } from './../../context/AppContext';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const {isEducator} = useContext(AppContext);

    const menuItems = [
        { name: 'Dashboard', link: '/educator', icon: assets.home_icon },
        { name: 'My Courses', link: '/educator/my-courses', icon: assets.my_course_icon },
        { name: 'Students Enrolled', link: '/educator/student-enrolled', icon: assets.person_tick_icon },
        { name: 'Add Course', link: '/educator/add-course', icon: assets.add_icon },
    ];

    return isEducator && (
        <div className="sidebar-container">
            {menuItems.map((item, index) => (
                <NavLink
                key={index}
                to={item.link}
                end={item.link === '/educator'}
                className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
                >
                <img src={item.icon} alt={item.name} className="sidebar-icon" />
                <p className="sidebar-text">{item.name}</p>
                </NavLink>
            ))}
        </div>


    )
}

export default Sidebar
