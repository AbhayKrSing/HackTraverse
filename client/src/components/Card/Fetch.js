import { motion } from 'framer-motion'
import React from 'react'

const Fetch = ({ screenWidth, Url, num }) => {
    return (
        <>

            <div style={{
                margin: '10px 30px 10px 30px',
                display: 'grid',
                gridTemplateColumns: `${screenWidth < 768 ? '1fr' : '1fr 1fr 1fr'}`, /* Use a single column on smaller screens */
                gap: '20px', /* Add gap between grid items */
            }}>
                <div id={screenWidth < 768 ? '' : num % 2 !== 0 ? 'div-left' : ''} style={{ height: screenWidth < 768 ? '' : '200px', textAlign: 'end', overflow: 'visible', }}>{num % 2 !== 0 ? 'LEFT LEFT dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. One way to make a div look sexy and interactive is to use CSS animations to create a dynamic background that responds to the mouse movement. For example, you can use a gradient color and a radial blur filter to create a smooth and shiny effect, and then use the mousemove event to change the position of the filter based on the cursor position. This will make the div look like a glossy button that follows the mouse. You can also add some text-shadow and transition effects to make the text more attractive. Here is an example of how you can achieve this effect with HTML and CSS:' : ''}</div>
                <motion.div
                    className="card"
                    style={{
                        width: '70%', /* Make the card width 100% for smaller screens */
                        height: '200px',
                        display: 'flex', /* Use flex for centering content */
                        justifySelf: "center",
                        overflow: 'hidden'
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
                <div id={screenWidth < 768 ? '' : num % 2 !== 0 ? '' : 'div-right'} style={{ height: screenWidth < 768 ? '' : '200px', textAlign: 'start', overflow: 'visible', }}>{num % 2 !== 0 ? '' : 'RIGHT RIGHT dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. One way to make a div look sexy and interactive is to use CSS animations to create a dynamic background that responds to the mouse movement. For example, you can use a gradient color and a radial blur filter to create a smooth and shiny effect, and then use the mousemove event to change the position of the filter based on the cursor position. This will make the div look like a glossy button that follows the mouse. You can also add some text-shadow and transition effects to make the text more attractive. Here is an example of how you can achieve this effect with HTML and CSS:'}</div>
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
