import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignOut, auth } from '../Firebase';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()
    const logout = async () => {
        try {
            await SignOut(auth)
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="logo">
                    HackTransverse
                </Link>
            </div>
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>
            <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <Link to="/" className="logout-button" onClick={logout}>Logout</Link>
                </li>
                <li>
                    <Link to="/">Get Started</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
