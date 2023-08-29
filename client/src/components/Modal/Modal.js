import React, { useRef } from 'react'

const Modal = ({ children, currentImageUrl, imageUrls, setimageUrls, scroll, currentText, setcurrentText }) => {
    const closeref = useRef()
    const inputref = useRef()
    const SaveChanges = () => {
        if (inputref.current.value) {
            setcurrentText([...currentText, inputref.current.value])
            setimageUrls([...imageUrls, currentImageUrl]);
            closeref.current.click()
            scroll.scrollTo(document.body.scrollHeight)   //for scrolling to scroll height
            inputref.current.value = null
        }
        else {
            //use alert here (later)
        }
    }
    return (
        <div>
            {children}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Write few Lines about it</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={currentImageUrl} alt="" width={'100%'} />
                        </div>
                        <div className="mb-3 mx-auto" style={{ width: '95%' }} >
                            <label for="exampleInputEmail1" className="form-label">Write Something about it here</label>
                            <input type="text" className="form-control" id="exampleInputtext" aria-describedby="emailHelp" ref={inputref} />
                            <button type="button" class="btn btn-primary mt-4" onClick={SaveChanges}>Save changes</button>
                            <button type="button" class="btn btn-secondary d-none" data-bs-dismiss="modal" ref={closeref}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
