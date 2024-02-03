import React from 'react'
import Popup from 'reactjs-popup'
import './GenericPopup.css'

export default function GenericPopup({ open, onClose, title, children}) {

    return (
        <Popup open={open} position="center center" modal>
            <div className="popup">
                <div className="popup-titlebar">
                    <h2>{title}</h2>
                    <button onClick={onClose}>&times;</button>
                </div>
                <hr />
                {children}
            </div>
        </Popup>
    )
}
