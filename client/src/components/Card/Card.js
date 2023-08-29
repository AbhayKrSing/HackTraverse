import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Fetch from "./Fetch";
import { animateScroll as scroll } from 'react-scroll';
const Card = () => {
    const Inputref = useRef()
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [imageUrls, setimageUrls] = useState([])
    const handleResize = () => {
        setScreenWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const openInput = () => {
        Inputref.current.click()
    }
    const captureFile = (e) => {
        const imageFile = e.target.files[0];
        if (imageFile) {
            const objectURL = URL.createObjectURL(imageFile);
            setimageUrls([...imageUrls, objectURL]);
            scroll.scrollTo(document.body.scrollHeight)   //for scrolling to scroll height
        }
    }


    return (
        <>
            <div id="main-container">

                {imageUrls.map((element, index) => {
                    return (<Fetch screenWidth={screenWidth} key={index} Url={element} num={index} />)
                })}
                <div style={{
                    margin: '10px 30px 10px 30px',
                    display: 'grid',
                    gridTemplateColumns: `${screenWidth < 768 ? '1fr' : 'repeat(3,1fr)'}`, /* Use a single column on smaller screens */
                    gap: '20px', /* Add gap between grid items */
                }}>
                    <div></div>
                    <motion.div
                        className="card"
                        style={{
                            width: '70%', /* Make the card width 100% for smaller screens */
                            height: '200px',
                            display: 'flex', /* Use flex for centering content */
                            justifySelf: "center"
                        }}
                        initial={{ translateX: "-300px", scale: 1 }}
                        animate={{ translateX: 0, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                        }}
                    >
                        <button style={{
                            borderRadius: '50px',
                            background: 'linear-gradient(45deg, #FF6B6B, #FF8E53)',
                            border: 'none',
                            color: 'white',
                            padding: '10px 20px',
                            fontSize: '30px',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                            cursor: 'pointer',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            outline: 'none',
                            textTransform: 'uppercase'
                        }} className="sexy-button" onClick={openInput}>
                            +
                        </button>
                        <input type="file" accept="image/*, video/*" capture="camera" style={{ display: 'none' }} ref={Inputref} onChange={captureFile} />
                    </motion.div >
                </div >
            </div>


        </>

    );
};

export default Card;
