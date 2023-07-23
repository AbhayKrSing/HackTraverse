import React, { useEffect, useState } from 'react'

const Card = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setSelectedMedia(fileURL);
        }
    };
    useEffect(() => {
        console.log(selectedMedia)
    }, [selectedMedia])
    return (
        <div className="card" id="card" style={{ margin: 'auto', padding: '6rem' }}>
            <div className="content" id="content" style={{ height: '100%' }}>
                {selectedMedia ? (
                    <>
                        {selectedMedia.startsWith('image/') ? (
                            <img src={selectedMedia} alt="Selected Img" className="media" />
                        ) : (
                            <video src={selectedMedia} controls className="media" />
                        )}
                    </>
                ) : (
                    <span className="plus">+</span>
                )}
                <input type="file" accept="image/*, video/*" id="file-input" onChange={handleFileInputChange} />
            </div>
        </div>
    )
}

export default Card
