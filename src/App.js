import React, { useState } from 'react';
import Header from './components/Header';
import BalanceComponent from './components/BalanceComponent';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import ChartComponent from './components/ChartComponent';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  return (
    <div className="App">
      <Header />
      <BalanceComponent transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      <AddTransaction onAdd={addTransaction} />
      <ChartComponent transactions={transactions} />
    </div>
  );
};

export default App;