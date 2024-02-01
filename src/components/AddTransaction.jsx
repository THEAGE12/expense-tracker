import React, { useState } from 'react';

const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const transactionStyle = {
    container: {
      maxWidth: '300px',
      margin: '0 auto',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#fff',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '10px',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: '#4caf50',
      color: '#fff',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  const handleAddTransaction = () => {
    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount, 
    };

    onAdd(newTransaction);

    // Clear input fields
    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Transaction</h3>
      <div style={transactionStyle.container}>
        <label style={transactionStyle.label} htmlFor="text">
          Text
        </label>
        <input
          style={transactionStyle.input}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />

        <label style={transactionStyle.label} htmlFor="amount">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input
          style={transactionStyle.input}
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />

        <button style={transactionStyle.button} onClick={handleAddTransaction}>
          Add Transaction
        </button>
      </div>
    </>
  );
};

export default AddTransaction;