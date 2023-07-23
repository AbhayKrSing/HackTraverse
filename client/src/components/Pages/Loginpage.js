import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignInWithEmailAndPassword, auth } from '../Firebase';
const Loginpage = () => {
    const emailref = useRef();
    const passwordref = useRef();
    const navigate = useNavigate()
    const login = async (e) => {

        try {
            e.preventDefault()
            const loginedUser = await SignInWithEmailAndPassword(auth, emailref.current.value, passwordref.current.value);
            console.log(loginedUser)
            navigate('/home')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div className="logincontainer">
                <div className="login-section" style={{ maxWidth: '400px', width: '400px' }}>
                    <h2>Login</h2>
                    <div>
                        <form className="login-form" onSubmit={login}>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="email" name="email" required ref={emailref} autoComplete='on' />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required ref={passwordref} autoComplete='on' />
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
