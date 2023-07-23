import React, { useEffect, useState } from 'react'

const Card = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [files, setfiles] = useState({})
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        setfiles(file)
        console.log(file)
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setSelectedMedia(fileURL);
        }
    };
    useEffect(() => {
        console.log(selectedMedia)
    }, [selectedMedia])
    return (
        <div className="card" id="card" style={{ padding: '10px', margin: 'auto' }}>
            <div className="content" id="content">
                {selectedMedia ? (
                    <>
                        {files.type.startsWith('image/') ? (
                            <img src={selectedMedia} alt="Selected" className="media" />
                        ) : (
                            <video src={selectedMedia} controls className="media" />
                        )}
                    </>
                ) : (
                    <label htmlFor="file-input" className="plus">+</label>
                )}
                <input type="file" accept="image/*, video/*" id="file-input" onChange={handleFileInputChange} />
            </div>
        </div>
    )
}

export default Card
