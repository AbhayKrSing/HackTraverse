import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Fetch from "./Fetch";
import { animateScroll as scroll } from 'react-scroll';
import Modal from "../Modal/Modal";
import spinner from "../Image/loadingspinner.gif"
import EditModal from "../Modal/EditModal";
const Card = ({ LoginUser }) => {
    const Inputref = useRef()
    const Modelref = useRef()
    const EditModalref = useRef()
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [currentImageUrl, setcurrentImageUrl] = useState('')
    const [imageUrls, setimageUrls] = useState([])
    const [currentText, setcurrentText] = useState([])
    const [currentblob, setcurrentblob] = useState()
    const [loading, setloading] = useState(true)
    const [editmodalcurrenttext, seteditmodalcurrenttext] = useState('')
    const handleResize = () => {
        setScreenWidth(window.innerWidth)
    }
    useEffect(() => {  //for tracking screen width.
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        // eslint-disable-next-line 
    }, []);
    useEffect(() => {
        if (LoginUser) { //Initially Login User null rahta hai.
            console.log(LoginUser)
        }
        // eslint-disable-next-line
    }, [LoginUser])

    const openInput = () => {
        Inputref.current.click()
    }
    const captureFile = (e) => {
        const imageFile = e.target.files[0];
        if (imageFile) {
            setcurrentblob(imageFile)
            Modelref.current.click()
            const objectURL = URL.createObjectURL(imageFile);
            setcurrentImageUrl(objectURL)
        }
    }


    return (

        <>
            {loading ? <img src={spinner} alt="" srcSet="" width={300} style={{ margin: 'auto', display: 'block' }} /> :
                <div id="main-container">

                    {imageUrls.map((element, index) => {  //imageUrls ko modify karna padega docRef.id ko isme dalne ke liye.
                        return (<Fetch screenWidth={screenWidth} key={index} Url={element} num={index} Text={currentText[index].datatext} docId={currentText[index].docId} EditModalref={EditModalref} seteditmodalcurrenttext={seteditmodalcurrenttext} editmodalcurrenttext={editmodalcurrenttext} />)  //Abhi karna hai currentText[index]
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
                                borderRadius: '50%',
                                background: 'linear-gradient(45deg, #FF6B6B, #FF8E53)',
                                border: 'none',
                                color: 'white',
                                padding: '10px 20px',
                                fontSize: '25px',
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
                </div>}
            <Modal currentImageUrl={currentImageUrl} imageUrls={imageUrls} setimageUrls={setimageUrls} scroll={scroll} currentText={currentText} setcurrentText={setcurrentText} LoginUser={LoginUser} currentblob={currentblob} setcurrentblob={setcurrentblob} setloading={setloading}> <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={Modelref}>
                Launch demo modal
            </button>
            </Modal>


            <EditModal editmodalcurrenttext={editmodalcurrenttext} seteditmodalcurrenttext={seteditmodalcurrenttext}>
                <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal1" ref={EditModalref} editmodalcurrenttext={editmodalcurrenttext}>
                    Launch demo modal
                </button>
            </EditModal>

        </>

    );
};

export default Card;
