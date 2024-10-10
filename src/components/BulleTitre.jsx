import React from 'react';
import './BulleTitre.css'; 
const BulleTitre = ({ title }) => {
  return (
    <div className="bulletitre-button">
      {title}
    </div>
  );
};

export default BulleTitre;
