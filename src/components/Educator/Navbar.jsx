import React from 'react'
import {assets, dummyEducatorData} from '../../assets/assets'
import './Navbar.css'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const educatorData = dummyEducatorData;

    const { user } = useUser();


    return (
        <div className="navbar-container">
            <Link to="/">
                <img src={assets.logo} alt="logo" className="logo-img" />
            </Link>
            <div className="navbar-right">
                <p>Hi! {user ? user.fullName : 'Developers'}</p>
                {user ? <UserButton /> :
                <img src={assets.profile_img} className="profile-img" />
                }
            </div>
        </div>

    );
}

export default Navbar
