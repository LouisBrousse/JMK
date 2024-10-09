import React from 'react';
import './BulleCalIn.css'; // Fichier CSS pour styliser BulleCalIn

const BulleCalIn = ({ calories }) => {
  return (
    <div className="bulle-cal-in">
      <h2>Cal In</h2>
      <div className="calories">{calories}</div>
    </div>
  );
};

export default BulleCalIn;
