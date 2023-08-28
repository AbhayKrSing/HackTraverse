import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Card = () => {
    const Inputref = useRef()
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
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
    return (

        <div style={{
            margin: '30px',
            display: 'grid',
            gridTemplateColumns: `${screenWidth < 768 ? '1fr' : '1fr 1fr 1fr'}`, /* Use a single column on smaller screens */
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
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
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
                <input type="file" accept="image/*, video/*" capture="camera" style={{ display: 'none' }} ref={Inputref} />

            </motion.div >
        </div >

    );
};

export default Card;
