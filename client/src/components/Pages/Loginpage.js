import React from 'react'
import { Link } from 'react-router-dom'

const Loginpage = () => {
    return (
        <>
            <div className="logincontainer">
                <div className="login-section" style={{ maxWidth: '400px', width: '400px' }}>
                    <h2>Login</h2>
                    <div>
                        <form className="login-form" action="/login" method="POST">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" required />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                            <button type="submit" className="login-button">Login</button>
                            <div>Don't have Account ?? <Link to="/signup">SignUp</Link></div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginpage
