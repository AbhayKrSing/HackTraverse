import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div>
            <header>
                <h1>Hack Transverse</h1>
                <p>Your Hacker Journey Companion</p>
            </header>
            <div className="container">
                <div className="hero-section">
                    <h2 style={{ padding: '30px', color: 'black' }}>Welcome to HackTransverse!</h2>
                    <p>Hacktransverse is a platform that allows you to document and share your hacking journey with the world. Whether you're a beginner exploring the world of hacking or an experienced hacker mastering advanced techniques, Hacktransverse is here to help you keep track of your progress and inspire others in the hacker community.</p>
                    <Link to="/login" className="cta-button" >Get Started</Link>
                </div>
                <div className="features-section">
                    <h2>Features</h2>
                    <ul>
                        <li>Track Your Progress: Add entries for each milestone and accomplishment in your hacker journey.</li>
                        <li>Multimedia Support: Upload photos and videos to showcase your hacking experiences.</li>
                        <li>Community Interaction: Engage with a vibrant community of hackers, share knowledge, and receive feedback.</li>
                        <li>Privacy Control: Choose whether to keep your entries private or share them publicly with the community.</li>
                        <li>Educational Resources: Access a wide range of tutorials, articles, and tools to enhance your skills.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
