import React from "react";
import styled from 'styled-components'

export default function MissionTimer({ mission_time }) {
  // Convert ms to HH:MM:SS
  let mission_duration;

  if (mission_time === -1) {
    mission_duration = "Waiting...";
  } else {
    mission_duration = new Date(mission_time).toISOString().slice(11, 19);
  }

  return (
    <MissionDataContainer>
      <p style={{ fontWeight: 200, fontSize: "0.6rem" }}>MISSON TIME</p>
      <strong style={{ fontWeight: 400 }}>{mission_duration}</strong>
    </MissionDataContainer>
  );
}

const MissionDataContainer = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
`
