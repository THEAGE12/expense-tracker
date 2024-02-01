import React from 'react';

const Transaction = ({ transaction, onDelete }) => {
  const { id, text, amount } = transaction;

  const transactionStyle = {
    listItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '1px solid #ccc',
    },
    text: {
      flex: '1',
      marginRight: '10px',
    },
    amount: {
      color: amount < 0 ? '#e74c3c' : '#2ecc71',
    },
    button: {
      backgroundColor: '#3498db',
      color: '#fff',
      padding: '8px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <li style={transactionStyle.listItem} className={amount < 0 ? 'expense' : 'income'}>
      <span style={transactionStyle.text}>{text}</span>
      <span style={transactionStyle.amount}>₹{amount.toFixed(2)}</span>
      <button style={transactionStyle.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Transaction;