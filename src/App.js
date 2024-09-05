import React, { useState } from 'react';
import Budget from './Budget';
import Remaining from './Remaining';
import ExpenseList from './ExpenseList';
import AddExpense from './AddExpense';
import './App.css';  // Import the CSS file

const App = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="container">
      <h1>Budget Tracker</h1>
      <Budget setBudget={setBudget} />
      <Remaining budget={budget} expenses={expenses} />
      <ExpenseList expenses={expenses} />
      <AddExpense addExpense={addExpense} />
    </div>
  );
};

export default App;
