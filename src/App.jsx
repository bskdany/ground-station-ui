import "./App.css";
import '../node_modules/react-grid-layout/css/styles.css'

// Hooks
import { useWebsocket } from "./hooks/useWebsocket";

// Components
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import { NavLink } from "react-router-dom";
import Controls from "./components/controls/Controls";

// Pages
import Home from "./pages/home/Home";
import Replays from "./pages/replays/Replays";
import Map from "./pages/map/Map";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation";

function App() {
  // Websocket data
  const [websocketRef, status, replayStatus] = useWebsocket(
    "ws://localhost:33845/websocket",
    false
  );

  // Current pageS
  return (
    <AppWrapper>
      {/* <Navbar version={status.version} org={status.org} status={status.status}>
        <NavLink
          className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/replays"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Replays
        </NavLink>
        <NavLink to="/Map"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        >Map</NavLink>
      </Navbar> */}
      <Navigation />

      {/* <Controls websocketRef={websocketRef} /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/replays"
          element={
            <Replays
              websocketRef={websocketRef}
              missions={replayStatus.mission_list}
            />
          }
        />
        <Route path="/Map" element={<Map />} />
      </Routes>

      <div id="footer">Developed by Matteo Golin</div>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  
`
