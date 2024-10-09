import React from 'react';
import './BulleTot.css';

const BulleTot = ({ balance }) => {
  return (
    <div className="bulletot">
    <h2>Balance</h2>
      <div className="balance">{ balance }</div>
    </div>
  );
};

export default BulleTot;
