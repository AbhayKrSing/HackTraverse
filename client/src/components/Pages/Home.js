import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { auth, storage } from '../Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { ref, listAll } from 'firebase/storage'
import Card from '../Card/Card'
const Home = ({ setLoginUser }) => {
    const [filearray, setfilearray] = useState([])
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
    useEffect(() => {
        let arr = []
        const listRef = ref(storage);
        listAll(listRef)
            .then((res) => {
                for (let element of res.items) {
                    arr.push(element._location.path_)
                }
                setfilearray([...arr])
            }).catch((error) => {
                console.log(error.message)
            });
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
