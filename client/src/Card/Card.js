import { uploadBytes, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { storage } from '../components/Firebase';

const Card = ({ LoginUser, setLoginUser }) => {

    const [selectedMedia, setSelectedMedia] = useState(null);
    const [files, setfiles] = useState({})
    const handleFileInputChange = async (event) => {
        const file = event.target.files[0];
        setfiles(file)
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setSelectedMedia(fileURL);
        }
        //To add file in firebase's Store.
        try {
            const storageRef = ref(storage, LoginUser.uid + "(" + file.name + ")")
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!', snapshot);
            })
        } catch (e) {
            console.error("Error adding document: ", e);
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
