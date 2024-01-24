import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { OpenInNewWindowIcon } from '@radix-ui/react-icons';
import './Card.css';

function Card({ title, bodyComponent }) {
  const [newWindow, setNewWindow] = useState(null);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    if (newWindow) {
      // Create a container div for our React component
      const container = newWindow.document.createElement('div');
      newWindow.document.body.appendChild(container);
      setContainer(container);

      // Clean up the new window on close
      const onBeforeUnload = () => {
        ReactDOM.unmountComponentAtNode(container);
        setNewWindow(null);
      };
      newWindow.addEventListener('beforeunload', onBeforeUnload);

      return () => {
        newWindow.removeEventListener('beforeunload', onBeforeUnload);
        newWindow.close();
      };
    }
  }, [newWindow]);

  const openInNewWindow = () => {
    // Open a new window
    const newWindow = window.open('', '_blank');
    setNewWindow(newWindow);
  };

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-header" style={{ justifyContent: 'flex-end' }}>
          <StyledButton onClick={openInNewWindow}><OpenInNewWindowIcon /></StyledButton>
        </div>
        <div className="card-body">
          {bodyComponent}
        </div>
      </div>

      {/* Render the component in the new window */}
      {container && ReactDOM.createPortal(bodyComponent, container)}
    </div>
  );
}

export default Card;

const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: var(--primary);
  }
`;


