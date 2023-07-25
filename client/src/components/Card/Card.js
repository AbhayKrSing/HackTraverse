import React, { useRef, useState } from 'react'

const Card = ({ element }) => {
    const Inputref = useRef()
    const [imageurl, setimageurl] = useState(null)
    const [videourl, setvideourl] = useState('')
    const openinput = () => {
        Inputref.current.click()
    }
    const handlechange = (e) => {
        const file = e.target.files[0]
        renderImage(file) //for rendering image or video.


    }
    const renderImage = (data) => {
        const url = URL.createObjectURL(data)
        if (data.type.startsWith('image')) {
            setimageurl(url)
        }
        else if (data.type.startsWith('video')) {
            setvideourl(url)
            document.getElementById('inputvideo').style.display = 'block'
        }
        document.getElementById('plus').style.display = 'none'
    }
    return (
        <>
            <div className="card">
                <div className="plus" onClick={openinput} id='plus'>+</div>
                <input type="file" accept='video/*,image/*' style={{ display: 'none' }} ref={Inputref} onChange={handlechange} />

                {imageurl ? (<img src={imageurl} alt="img" srcSet="" width={'90%'} height={'90%'} style={{ borderRadius: '10px' }} id='inputimg' />) :
                    (<video src={videourl} width={'90%'} height={'90%'} style={{ borderRadius: '10px', display: 'none' }} id='inputvideo' controls></video>)}
            </div>
        </>
    )
}

export default Card
