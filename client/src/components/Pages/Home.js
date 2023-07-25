import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../../Card/Card'
import Distingusiher from '../Distinguisher'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Firebase'
import { onAuthStateChanged } from 'firebase/auth'

const Home = ({ setLoginUser, LoginUser }) => {
    const navigate = useNavigate()
    const [filedata, setfiledata] = useState([])
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
            <Card LoginUser={LoginUser} setLoginUser={setLoginUser} />

            {filedata.map((element) => {
                return (<div>
                    <div style={{ display: 'none' }}>
                        <Distingusiher />
                    </div>
                    <Card LoginUser={LoginUser} setLoginUser={setLoginUser} />
                </div>)
            })}

        </div>
    )
}

export default Home
