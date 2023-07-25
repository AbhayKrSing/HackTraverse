import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../../Card/Card'
import Distingusiher from '../Distinguisher'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Firebase'
import { onAuthStateChanged } from 'firebase/auth'

const Home = ({ setLoginUser, LoginUser }) => {
    const navigate = useNavigate()
    const [filearray, setfilearray] = useState([1])
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

            {filearray.map((element, i) => {
                return (<div key={i}>
                    <div style={{ display: `${i > 0 ? 'block' : 'none'}` }}>
                        <Distingusiher />
                    </div>
                    <Card LoginUser={LoginUser} setLoginUser={setLoginUser} filearray={filearray} setfilearray={setfilearray} element={element} />
                </div>)
            })}

        </div>
    )
}

export default Home
