import { uploadBytes, ref } from 'firebase/storage';
import React, { useState } from 'react'
import { storage } from '../components/Firebase';

const Card = ({ LoginUser, setfilearray, filearray, element }) => {

    const [selectedMedia, setSelectedMedia] = useState(null);
    const [files, setfiles] = useState({})
    const handleFileInputChange = async (event) => {
        const filedata = event.target.files[0];
        setfiles(filedata)
        if (filedata) {
            const fileURL = URL.createObjectURL(filedata);
            setSelectedMedia(fileURL);
            setfilearray([...filearray, filearray[filearray.length - 1] + 1])
        }
        //To add file in firebase's Store.
        try {
            const storageRef = ref(storage, LoginUser.uid + "(" + filedata.name + ")")
            uploadBytes(storageRef, filedata).then((snapshot) => {
                console.log('Uploaded a blob or file!', snapshot);
            })
        } catch (e) {
            console.error("Error adding document: ", e);
        }


    };
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
                <input type="file" accept="image/*, video/*" id={"file-input" + element} onChange={handleFileInputChange} />
            </div>
        </div>
    )
}

export default Card
