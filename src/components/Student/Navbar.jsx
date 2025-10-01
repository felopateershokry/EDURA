import React, { useContext } from 'react'
import { assets } from './../../assets/assets';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const {navigate, isEducator} = useContext(AppContext);

    const location = useLocation();

    const isCoursePage = location.pathname.startsWith('/course/');
    const isHomePage = location.pathname === '/';


    const { openSignIn } = useClerk();
    const { user } = useUser();


    return (
        <div className={`navbar-container ${isHomePage || isCoursePage ? "cyan-bg" : "white-bg"}`}>
            <img onClick={()=> navigate('/')} src={assets.logo} alt="Logo" className="navbar-logo" />

        <div className="navbar-links">
            <div className="navbar-links-group">
                {user && 
                <>
                    <button onClick={()=>{ navigate('/educator') }} className='become link-style-btn'>{ isEducator ? 'Educator Dashboard' : 'Become Educator' }</button> | <Link to="/my-enrollments" className='become link-style-btn'>My Enrollments</Link>
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
                        <button onClick={()=>{ navigate('/educator') }} className='become link-style-btn'>{ isEducator ? 'Educator Dashboard' : 'Become Educator' }</button> | <Link to="/my-enrollments" className='become link-style-btn'>My Enrollments</Link>
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
