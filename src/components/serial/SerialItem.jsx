import React from 'react'

export default function SerialItem({name, active, connectFunc}) {
    
  return (
    <button id={active ? "connected" : name} onClick={()=>{connectFunc(name)}}>
        {name}
    </button>
  )
}
