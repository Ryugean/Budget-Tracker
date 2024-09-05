import React, { useState } from 'react';

const Budget = ({ setBudget }) => {
  const [budget, setBudgetAmount] = useState('');

  const handleBudgetChange = (e) => {
    setBudgetAmount(e.target.value);
  };

  const handleBudgetSubmit = () => {
    setBudget(parseFloat(budget));
  };

  return (
    <div>
      <h3>Set Budget</h3>
      <input 
        type="number" 
        value={budget} 
        onChange={handleBudgetChange} 
        placeholder="Enter budget..."
      />
      <button onClick={handleBudgetSubmit}>Set Budget</button>
    </div>
  );
};

export default Budget;
