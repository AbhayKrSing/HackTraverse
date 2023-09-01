import React, { useRef, useState, useEffect } from 'react'
import MinimumwordsChecker from '../MinimumwordsChecker'
import { db, storage } from '../Firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { collection, addDoc, getDocs } from "firebase/firestore";
const Modal = ({ children, currentImageUrl, imageUrls, setimageUrls, scroll, currentText, setcurrentText, LoginUser, currentblob }) => {
    const closeref = useRef()
    const inputref = useRef()
    const [condition, setcondition] = useState(false)
    const [textLength, settextLength] = useState(0)
    const date = new Date()
    const SaveChanges = async () => {
        try {
            if (inputref.current.value && LoginUser) {
                const storageRef = ref(storage, LoginUser.uid + '/' + currentblob.name + '(' + date.getTime() + ')'); //To upload file(blob) on filebase
                await uploadBytes(storageRef, currentblob)
                console.log('File uploaded successfully')


                let inputStr = inputref.current.value        //uploading user's input data(text)
                inputStr = inputStr.replace(/\s+/g, ' ');
                const docRef = await addDoc(collection(db, LoginUser.uid), {
                    data: inputStr,
                    timeCreated: date.getTime()
                });
                console.log("Document written with ID: ", docRef.id);
                setcurrentText([...currentText, inputStr])
                setimageUrls([...imageUrls, currentImageUrl]);
                closeref.current.click()
                scroll.scrollTo(document.body.scrollHeight)   //for scrolling to scroll height
                inputref.current.value = null
            }
            else {
                alert('Write Something about your journey')
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    const handlechange = (e) => {
        let str = e.target.value;
        str = str.replace(/\s+/g, '');
        settextLength(str.length)
        if (str.length > 100) {
            setcondition(true)
        }
        else {
            setcondition(false)
        }
    }
    useEffect(() => {
        //1.Now for getting all user's blob and file and render it on web page
        const getfile = async () => {
            if (LoginUser) {
                const folderRef = ref(storage, LoginUser.uid);

                // List all files in the folder
                listAll(folderRef)
                    .then(async (res) => {
                        let ItemArray = res.items;
                        console.log(ItemArray)
                        let urlArray = []
                        //Sorting of ItemArray according to time created.
                        ItemArray.sort((element1, element2) => {
                            let input_string = element1.name
                            const num1 = Number(input_string.substring(input_string.lastIndexOf("(") + 1, input_string.lastIndexOf(")")))
                            input_string = element2.name
                            const num2 = Number(input_string.substring(input_string.lastIndexOf("(") + 1, input_string.lastIndexOf(")")))
                            return num1 - num2
                        })
                        for (let element of ItemArray) {
                            const url = await getDownloadURL(element)  //yaha galti ho rhi thi await ka use nhi kiya tha.
                            urlArray.push(url)
                        }
                        setimageUrls([...urlArray])
                    }).catch((error) => {
                        console.log(error.message)
                    })
            }

        }


        //2.for getting all user's text data
        const getdata = async () => {
            if (LoginUser) {
                const colRef = collection(db, LoginUser.uid);
                getDocs(colRef).then((querySnapshot) => {
                    let textArray = []
                    const Snapshot = querySnapshot.docs;
                    for (let doc of Snapshot) {
                        const datatext = doc.data().data
                        const timeCreated = doc.data().timeCreated
                        textArray.push({ datatext, timeCreated })
                    }
                    textArray.sort((a, b) => {
                        return a.timeCreated - b.timeCreated
                    })
                    textArray = textArray.map((element) => {
                        return element.datatext
                    })
                    setcurrentText([...textArray])

                    return 1;
                }).catch((error) => {
                    console.log(error.message)
                });
            }
        }
        const fn = async () => {
            await Promise.all[getfile(), getdata()]  //fir ispe kaam karna hai
            console.log('done')
        }
        fn()
        // eslint-disable-next-line
    }, [LoginUser])

    return (
        <div>
            {children}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Write few Lines about it</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={currentImageUrl} alt="" width={'100%'} />
                        </div>
                        <div className="mb-3 mx-auto" style={{ width: '95%', position: 'relative' }}>
                            <label htmlFor="exampleInputtext" className="form-label">
                                Write Something about it here
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleInputtext"
                                aria-describedby="emailHelp"
                                ref={inputref}
                                onChange={handlechange}
                            />
                            <MinimumwordsChecker textLength={textLength} condition={condition} />
                            <button
                                type="button"
                                className="btn btn-primary mt-4"
                                onClick={SaveChanges}
                                disabled={condition}

                            >
                                Save changes
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary d-none"
                                data-bs-dismiss="modal"
                                ref={closeref}
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
