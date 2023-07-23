import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AnimateCheckIcon from '../AnimateCheckIcon'
import { auth, CreateUserWithEmailAndPassword } from '../Firebase'
const SignUp = () => {
    const [credentials, setcredentials] = useState({ email: '', password: '', cpassword: '' })
    const [matching, setmatching] = useState(false)
    const navigate = useNavigate()
    const signup = async (e) => {
        try {
            e.preventDefault()
            const signUpUser = await CreateUserWithEmailAndPassword(auth, credentials.email, credentials.password);
            console.log(signUpUser)
            navigate('/home')
        } catch (error) {
            console.log(error.message)
        }
    }
    const handlechange = (e) => {
        const { name, value } = e.target
        setcredentials({ ...credentials, [name]: value })
    }
    useEffect(() => { //for matching password we need to perform side effects.
        if (credentials.password.length > 0 && credentials.password === credentials.cpassword) {
            setmatching(true)
        }
        else {
            setmatching(false)
        }
    }, [credentials])

    return (
        <div className="signup-container">
            <div className="signup-section" style={{ maxWidth: '400px', width: '400px' }}>
                <h2>Sign Up</h2>
                <div>
                    <form className="signup-form" onSubmit={signup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={handlechange} required />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={handlechange} required />
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" id="cpassword" name="cpassword" onChange={handlechange} required />
                        <span style={{ width: '20px' }}>
                            <AnimateCheckIcon isVisible={matching} />
                        </span>
                        <button type="submit" className="signup-button" >Sign Up</button>
                        <div>Already have Account ?? <Link to="/login">Login</Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
