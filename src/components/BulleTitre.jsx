import React from 'react';
import './BulleTitre.css'; // Fichier CSS pour styliser Bulletitre

const BulleTitre = ({ title }) => {
  return (
    <div className="bulletitre-button">
      {title}
    </div>
  );
};

export default BulleTitre;
