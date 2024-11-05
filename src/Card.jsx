// src/Card.jsx
import React from 'react';
import './Card.css'; // Import the CSS for styling

const Card = ({image, title, description }) => {
  return (
    <div className="card">
        <img src= {image} alt="" height='100px' width='100px' />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
