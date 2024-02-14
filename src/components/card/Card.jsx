import React from "react";
import "./Card.css";

function Card({ title, bodyComponent }) {
  // const [newWindow, setNewWindow] = useState(null);
  // const [container, setContainer] = useState(null);

  // useEffect(() => {
  //   if (newWindow) {
  //     // Create a container div for our React component
  //     const container = newWindow.document.createElement("div");
  //     newWindow.document.body.appendChild(container);
  //     setContainer(container);

  //     // Clean up the new window on close
  //     const onBeforeUnload = () => {
  //       ReactDOM.unmountComponentAtNode(container);
  //       setNewWindow(null);
  //     };
  //     newWindow.addEventListener("beforeunload", onBeforeUnload);

  //     return () => {
  //       newWindow.removeEventListener("beforeunload", onBeforeUnload);
  //       newWindow.close();
  //     };
  //   }
  // }, [newWindow]);

  // const openInNewWindow = () => {
  //   // Open a new window
  //   const newWindow = window.open("", "_blank");
  //   setNewWindow(newWindow);
  // };

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-header" style={{ justifyContent: "flex-end" }}>
          {/* Temporarily disabled while we test performance */}
          {/* <button className="open-button" onClick={openInNewWindow}>
            open
          </button> */}
        </div>
        <div className="card-body">{bodyComponent}</div>
      </div>

      {/* {container && createPortal(bodyComponent, container)} */}
    </div>
  );
}

export default Card;
