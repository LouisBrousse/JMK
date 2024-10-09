import React from 'react';
import './Bulle1.css'; // Style générique pour Bulle1

const Bulle1 = ({ children }) => {
  return (
    <div className="bulle1">
      {children} {/* Contenu dynamique à l'intérieur de la bulle */}
    </div>
  );
};

export default Bulle1;
