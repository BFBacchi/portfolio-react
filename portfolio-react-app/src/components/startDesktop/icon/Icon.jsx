import React from 'react';
import './Icon.css';

const Icon = ({ onClick, image, name }) => {
  return (
    <div className="icon" onClick={onClick}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Icon;