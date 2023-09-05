import React, { useRef } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../Firebase'
const EditModal = ({ children, editmodalcurrenttext, seteditmodalcurrenttext, LoginUser, docId_forupdate, array, setarray }) => {
    const closeref = useRef()
    const handlechange = (e) => {
        seteditmodalcurrenttext(e.target.value)
    }
    const updatedata = async () => {
        try {
            if (docId_forupdate) {
                const washingtonRef = doc(db, LoginUser.uid, docId_forupdate);
                await updateDoc(washingtonRef, {
                    data: editmodalcurrenttext
                })
                array = array.map((element) => {
                    if (element.docId === docId_forupdate) {
                        return ({
                            datatext: editmodalcurrenttext,
                            docId: element.docId,
                            timeCreated: element.timeCreated
                        })
                    }
                    else {
                        return element
                    }
                })
                setarray(array)
                closeref.current.click()
            }
            else {
                throw Error('docref id not present')
            }

        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>


            {children}
            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel1">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <textarea name="edit" id="" style={{ width: '100%' }} value={editmodalcurrenttext} onChange={handlechange} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal" ref={closeref}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={updatedata}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditModal
