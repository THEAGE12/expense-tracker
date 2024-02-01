import React from 'react';

const BalanceComponents = ({ transactions }) => {
  const balance = transactions.reduce((total, transaction) => total + transaction.amount, 0).toFixed(2);

  const balanceStyle = {
    container: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    heading: {
      fontSize: '1.5rem',
      margin: '0',
    },
    amount: {
      fontSize: '2.5rem',
      margin: '0',
    },
  };

  return (
    <div style={balanceStyle.container}>
      <h3 style={balanceStyle.heading}>Your Balance</h3>
      <h1 style={balanceStyle.amount}>₹{balance}</h1>
    </div>
  );
};

export default BalanceComponents;