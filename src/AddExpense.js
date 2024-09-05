import React, { useState } from 'react';

const AddExpense = ({ addExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    if (name && amount) {
      addExpense({ name, amount: parseFloat(amount) });
      setName('');
      setAmount('');
    }
  };

  return (
    <div>
      <h3>Add Expense</h3>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Expense name"
      />
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount"
      />
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default AddExpense;
