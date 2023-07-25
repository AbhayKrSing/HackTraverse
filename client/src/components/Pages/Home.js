import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Card from '../Card/Card'
const Home = ({ setLoginUser, LoginUser }) => {
    const navigate = useNavigate()
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoginUser(user);
            }
            else {
                navigate('/login');
            }
        })
        return (() => {
            unsuscribe()
        })
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <Navbar />
            <h1 style={{ textAlign: 'center' }}>Add your journey videos & images here</h1>
            <Card />
        </div>
    )
}

export default Home
