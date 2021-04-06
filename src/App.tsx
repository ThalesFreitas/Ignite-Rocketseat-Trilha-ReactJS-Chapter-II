import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';

//Modal.setAppElement => configuração só para acessibilidade
Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

  return (
    <TransactionsProvider>
    {/* Header onOpenNewTransactionModal=> passa uma função para que o elemento filho
    Header possa controlar o estado do elemento pai App */}
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
     <NewTransactionModal 
     isOpen={isNewTransactionModalOpen}
    onRequestClose={handleCloseNewTransactionModal}
    />
      <GlobalStyle/>
      </TransactionsProvider>
  );
}

