import React from 'react';
import './window.css';

// Cerrar ventana
function closeWindow(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = 'none';
  }
}

const WindowComponent = ({ id, title, content }) => {
  return (
    <div id={id} className="window">
      <div className="title-bar">
        <span>{title}</span>
        <button onClick={() => closeWindow(id)}>X</button>
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default WindowComponent;