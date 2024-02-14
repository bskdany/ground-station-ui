import "./App.css";
import "../node_modules/react-grid-layout/css/styles.css";

// Hooks
import { useWebsocket } from "./hooks/useWebsocket";

// Components
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import { NavLink } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Map from "./pages/map/Map";

function App() {
  // Websocket data
  const [websocketRef, status, replayStatus] = useWebsocket(
    "ws://localhost:33845/websocket",
    false
  );

  // Current pageS
  return (
    <div className="app-wrapper" id="App">
      <Navigation
        websocketRef={websocketRef}
        version={status.version}
        org={status.org}
        status={status.status}
        replayStatus={replayStatus}
      >
        <NavLink
          className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="/"
        >
          Home
        </NavLink>
        {/*<NavLink
          to="/replays"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Replays
        </NavLink>*/}
        <NavLink
          to="/Map"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Map
        </NavLink>
      </Navigation>
      {/* <Navigation /> */}

      {/* <Controls websocketRef={websocketRef} /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Map" element={<Map />} />
      </Routes>

      <div id="footer">Developed by Matteo Golin, Eshan Betrabet</div>
    </div>
  );
}

export default App;
