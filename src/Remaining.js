import React from 'react';

const Remaining = ({ budget, expenses }) => {
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remaining = budget - totalExpenses;

  return (
    <div>
      <h3>Remaining Balance: ${remaining.toFixed(2)}</h3>
    </div>
  );
};

export default Remaining;
