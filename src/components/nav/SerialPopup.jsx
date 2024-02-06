import React from 'react'
import GenericPopup from '../popup/GenericPopup'

export default function SerialPopup({status, websocketRef}) {

  const [open, setOpen] = useState(false);
  useKey("KeyS", "shift", () => {setOpen(!open)});

  return (
    <div>
      <p className="serial-button" id={buttonState} onClick={() => {setOpen(!open)}}>Serial</p>
      <GenericPopup open={open} onClose={() => {setOpen(false)}} title="Serial Connections">

      </GenericPopup>
    </div>
  )
}
