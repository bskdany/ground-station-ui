import React from "react";
import "./MissionSpacecraft.css";

export default function MissionSpacecraft({ mission_name, deployment_status }) {
  return (
    <div className="mission-data-container">
      <p style={{ fontWeight: 200, fontSize: "0.6rem" }}>MISSION NAME</p>
      <strong style={{ fontWeight: 400 }}>
        {mission_name} | {deployment_status}
      </strong>
    </div>
  );
}
