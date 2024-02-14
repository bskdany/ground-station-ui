import React from "react";
import "./Navigation.css";

// Components
import MissionTimer from "./MissionTimer";
import MissionSpacecraft from "./MissionSpacecraft";

// Utils
import ReplayPopup from "../replay/ReplayPopup";

export default function Navigation({
  websocketRef,
  version,
  org,
  status,
  replayStatus,
  children,
}) {
  // Convert connection status
  const connection = status.rn2483_radio.connected
    ? "connected"
    : "disconnected";

  // Handle deployment status
  const deployment = status.rocket.deployment_state_text
    ? status.rocket.deployment_state_text.toUpperCase()
    : "DNE";

  // Handle mission name
  const mission_name = status.mission ? status.mission.name : "";

  return (
    <nav>
      <div id="rocket-info">
        <div id="logo">
          <img
            src={require("../../assets/colour_logo.png")}
            alt="CuInSpace Logo"
          />
        </div>
        <div id="sub-info">
          {/* <div>
            <h1 id="org">{org}</h1>
            <p id="version">{`v${version}`}</p>
          </div> */}
          <MissionTimer mission_time={status.rocket.mission_time} />
          <MissionSpacecraft
            mission_name={mission_name}
            deployment_status={deployment}
          />
        </div>
        <p id="connection-status" className={connection}>
          {connection}
        </p>
        <ReplayPopup status={replayStatus} websocketRef={websocketRef} />
      </div>
      <div id="nav-links">{children}</div>
    </nav>
    // <div className="navigation-wrapper">
    //   <NavigationLeft>
    //     <p>rocket name</p>
    //   </NavigationLeft>
    //   <NavigationRight>
    //     <button>replay dropdown</button>
    //     <button>settings</button>
    //   </NavigationRight>
    // </div>
  );
}
