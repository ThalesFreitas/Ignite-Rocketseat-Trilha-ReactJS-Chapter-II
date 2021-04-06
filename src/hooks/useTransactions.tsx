import {createContext, useEffect, useState, ReactNode, useContext} from 'react';
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    //para resolver o erro, passamos um objeto vazio forçamos uma tipagem
    //no typescript, ou seja, enganando ele falando que esse objeto tem sim uma tipagem
    {} as TransactionsContextData
);

export function TransactionsProvider({children}:TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction []>([]);

    useEffect(() => {
       api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);


async function createTransaction(transactionInput:TransactionInput) {
   const response = await api.post('/transactions', {
       ...transactionInput,
        createdAt: new Date(),
    });
    //pega os dados da transação
   const {transaction} = response.data;
  
   //Coloca os dados da nova transação na listagem
   setTransactions([
        ...transactions,
        transaction,
    ]);
}

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}

