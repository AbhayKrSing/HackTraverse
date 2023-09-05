import { motion } from 'framer-motion'
import React from 'react'

const Fetch = ({ screenWidth, Url, num, Text, docId, EditModalref, seteditmodalcurrenttext, setdocId_forupdate }) => {
    const handledivleft = (e) => {
        seteditmodalcurrenttext(e.target.innerText)
        EditModalref.current.click();
        setdocId_forupdate(docId);

    }
    const handledivright = (e) => {
        seteditmodalcurrenttext(e.target.innerText)
        EditModalref.current.click()
        setdocId_forupdate(docId);
    }
    return (
        <>

            <div style={{
                margin: '10px 30px 10px 30px',
                display: 'grid',
                gridTemplateColumns: `${screenWidth < 768 ? '1fr' : '1fr 1fr 1fr'}`,
                gap: '20px',
            }}>
                <motion.div id={screenWidth < 768 ? '' : num % 2 !== 0 ? 'div-left' : ''} style={{ height: screenWidth < 768 ? '' : '200px', textAlign: 'end', fontSize: '40px', fontStyle: 'italic', overflow: 'visible', order: screenWidth < 768 && num !== 0 ? 1 : 0, pointerEvents: num % 2 === 0 ? 'none' : '' }}
                    whileHover={{ scale: 1.1, }}
                    whileTap={{ scale: 0.9, opacity: 0.5 }}
                    onClick={handledivleft} >{num % 2 !== 0 ? Text : ''}
                </motion.div>


                <motion.div
                    className="card"
                    style={{
                        width: '70%', /* Make the card width 100% for smaller screens */
                        height: '200px',
                        display: 'flex', /* Use flex for centering content */
                        justifySelf: "center",
                        overflow: 'hidden',
                        order: screenWidth < 768 && num !== 0 ? -1 : 0
                    }}
                    initial={{ translateX: "300px", scale: 1 }}
                    animate={{ translateX: 0, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    <img src={Url} alt="img" srcSet="" width={"100%"} />
                </motion.div >



                <motion.div id={screenWidth < 768 ? '' : num % 2 !== 0 ? '' : 'div-right'} style={{ height: screenWidth < 768 ? '' : '200px', textAlign: 'start', overflow: 'visible', fontSize: '35px', fontStyle: 'italic', pointerEvents: num % 2 !== 0 ? 'none' : '' }}
                    whileHover={{ scale: 1.1, }}
                    whileTap={{ scale: 0.9, opacity: 0.5 }}
                    onClick={handledivright}>{num % 2 !== 0 ? '' : Text}</motion.div>
            </div >
            {/* for vertical line */}
            <div style={{ display: screenWidth < 768 ? 'none' : 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '2px', height: '100px', backgroundColor: '#FF6B6B', animation: 'pulse 1.5s infinite alternate' }}></div>
                <style>
                    {`
          @keyframes pulse {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0.5;
            }
          }
        `}
                </style>
            </div>
        </>
    )
}

export default Fetch
