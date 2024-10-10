import React from 'react';
import './BulleCalOut.css';

const BulleCalOut = ({ calories }) => {
  return (
    <div className="bulle-cal-out">
      <h2>Cal Out</h2>
      <div className="calories">{calories}</div>
    </div>
  );
};

export default BulleCalOut;
