import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Educator/Navbar'
import './Educator.css'
import Sidebar from '../../components/Educator/Sidebar'
import Footer from '../../components/Educator/Footer'
const Educator = () => {
    return (
        <div className='educator-container'>
            <Navbar />
            <div className="educator-content">
                <Sidebar />
                <div className="educator-main-content">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Educator
