import { useState } from 'react';
import { useKey } from "../../hooks/useKey";
import Popup from "reactjs-popup"
import ReplayItem from "./ReplayItem";
import "./ReplayPopup.css";
import GenericPopup from '../popup/GenericPopup';

export default function ReplayPopup({status, websocketRef}) {
    // Setup list of replays
    let replays = <></>;
    if(status.mission_list !== undefined) {
        replays = status.mission_list.map((mission) => (
        <ReplayItem name={mission.name} key={mission.key} websocketRef={websocketRef} />
        ));
    }
    // Check if we are currently playing the replay and set the button color accordingly
    let buttonState = status.status === 1 ? 'playing' : 'stopped';
    
    // Get the status icon for the replay status
    let buttonText = "Replay ";
    if (status.status === 1) {
        // Playing
        buttonText += "\u23F5";
    } else {
        // Stopped / Finished / No Replay Loaded
        buttonText += "\u23F9";
    }

    // Setup open state to have keybind
    const [open, setOpen] = useState(false);
    useKey("KeyR", "shift", () => {setOpen(!open)});
    return (
        <div>
            <p className="replay-button" id={buttonState} onClick={() => {setOpen(!open)}}>{buttonText}</p>
            <GenericPopup open={open} onClose={() => {setOpen(false)}} title="Replays" >
                <div className="replay-popup-replaylist">
                    {replays}
                </div>
            </GenericPopup>
        </div>
    );
}