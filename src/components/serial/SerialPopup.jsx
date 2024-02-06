import React, { useState } from 'react'
import GenericPopup from '../popup/GenericPopup'
import { useKey } from '../../hooks/useKey';
import './SerialPopup.css';
import SerialItem from './SerialItem';

export default function SerialPopup({status, websocketRef}) {

  const [open, setOpen] = useState(false);
  useKey("KeyS", "shift", () => {setOpen(!open)});

  // Check if we are connected to serial
  let buttonState = status.rn2483_radio.connected ? 'connected' : 'disconnected';

  const refreshSerialPorts = () => {
    websocketRef.current.send(`serial update`);
  }

  const disconnect = () => {
    if(!status.rn2483_radio.connected) {
      return;
    }
    websocketRef.current.send(`serial rn2483_radio disconnect`);
    // After disconnect refresh the serial list
    refreshSerialPorts();
  }

  const connect = (name) => {
    websocketRef.current.send(`serial rn2483_radio connect ${name}`);
  }

  // Setup list of availible ports
  let ports = <></>;
  if(status.serial !== undefined && status.serial.available_ports !== undefined) {
    ports = status.serial.available_ports.map((portName) => 
    <SerialItem name={portName} active={status.rn2483_radio.connected_port === portName} connectFunc={connect} /> 
    );
  }

  return (
    <div>
      <p className="serial-button" id={buttonState} onClick={() => {setOpen(!open)}}>Serial</p>
      <GenericPopup open={open} onClose={() => {setOpen(false)}} title="Serial Connections">
        <div className='serial-button-bar'>
          <button onClick={refreshSerialPorts}>Refresh</button>
          <button onClick={disconnect}>Disconnect</button>
        </div>
        <div className='serial-connection-list'>
          {ports}
        </div>
      </GenericPopup>
    </div>
  )
}
