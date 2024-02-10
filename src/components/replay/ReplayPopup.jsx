import { useState } from 'react';
import { useKey } from "../../hooks/useKey";
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

    // Setup open state to have keybind
    const [open, setOpen] = useState(false);
    useKey("KeyR", "shift", () => {setOpen(!open)});
    return (
        <div>
            <p className="replay-button" id={buttonState} onClick={() => {setOpen(!open)}}>{status.status === 1 ? "REPLAY: PLAY" : "REPLAY:STOP"}</p>
            <GenericPopup open={open} onClose={() => {setOpen(false)}} title="Replays" >
                <div className="replay-popup-replaylist">
                    {replays}
                </div>
            </GenericPopup>
        </div>
    );
}