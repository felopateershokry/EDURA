import React from 'react'
import { assets } from './../../assets/assets';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {

    const isCourseListPage = location.pathname === '/course-list';


    const { openSignIn } = useClerk();
    const { user } = useUser();


    return (
        <div className={`navbar-container ${isCourseListPage ? "white-bg" : "cyan-bg"}`}>
            <img src={assets.logo} alt="Logo" className="navbar-logo" />

        <div className="navbar-links">
            <div className="navbar-links-group">
                {user && 
                <>
                <button className='become link-style-btn'>Become Educator</button> | <Link to="/my-enrollments" className='become link-style-btn'>My Enrollments</Link>
                </>}
            </div>
            { user ? <UserButton /> :
            <button className="create-btn" onClick={() => openSignIn()}>Create Account</button>
            }
        </div>
        {/* mobile */}
        <div className="navbar-mobile">
            <div className="navbar-links-group">
                {user && 
                <>
                <button className='become link-style-btn'>Become Educator</button> | <Link to="/my-enrollments" className='become link-style-btn'>My Enrollments</Link>
                </>}
            </div>
            {user ? <UserButton /> :
                <button className='become' onClick={() => openSignIn()}>
                    <img src={assets.user_icon} alt="User" />
                </button>
            }
        </div>
    </div>
    )
}

export default Navbar
