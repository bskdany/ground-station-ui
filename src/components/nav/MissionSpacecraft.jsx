import React from "react";
import styled from 'styled-components'

export default function MissionSpacecraft({ mission_name, deployment_status }) {

  return (
    <MissionDataContainer>
      <p style={{ fontWeight: 200, fontSize: "0.6rem" }}>MISSION NAME</p>
      <strong style={{ fontWeight: 400 }}>{mission_name} | {deployment_status}</strong>
    </MissionDataContainer>
  );
}


const MissionDataContainer = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
`