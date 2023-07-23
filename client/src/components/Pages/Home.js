import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../../Card/Card'
import Distingusiher from '../Distinguisher'
const Home = () => {
    return (
        <div>
            <Navbar />
            <h1 style={{ textAlign: 'center' }}>Add your journey videos & images here</h1>
            <Card></Card>
            <Distingusiher></Distingusiher>
            <Card></Card>
            <Distingusiher></Distingusiher>

        </div>
    )
}

export default Home
