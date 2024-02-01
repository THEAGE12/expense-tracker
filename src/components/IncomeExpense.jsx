import React from 'react';

const IncomeExpense = ({ transactions }) => {
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((total, transaction) => total + transaction.amount, 0)
    .toFixed(2);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((total, transaction) => total + transaction.amount, 0)
    .toFixed(2);

  const incomeExpenseStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
  };

  const sectionStyle = {
    textAlign: 'center',
  };

  const amountStyle = {
    color: '#555',
  };

  return (
    <div style={incomeExpenseStyle} className="income-expense">
      <div style={sectionStyle}>
        <h3>Income</h3>
        <p style={amountStyle}>₹{income}</p>
      </div>
      <div style={sectionStyle}>
        <h3>Expense</h3>
        <p style={amountStyle}>₹{Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;