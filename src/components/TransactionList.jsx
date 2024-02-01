import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions, onDelete }) => {
  const transactionListStyle = {
    historyHeading: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    list: {
      listStyle: 'none',
      padding: '0',
    },
  };

  return (
    <>
      <h3 style={transactionListStyle.historyHeading}>History</h3>
      <ul style={transactionListStyle.list} className="transaction-list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;