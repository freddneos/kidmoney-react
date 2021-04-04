import React, { useState } from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import ModalNewTransaction from './components/ModalNewTransaction'
import { TransactionsProvider } from "./hooks/useTransactions";


import { GlobalStyle } from './styles/global';


export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onNewTransactionModalOpen={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />

      <ModalNewTransaction
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}

