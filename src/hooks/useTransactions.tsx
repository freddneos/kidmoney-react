import { ReactNode, useEffect, useState, useContext } from 'react';
import { createContext } from 'react'
import { api } from '../services/api'

export interface ITransaction {
    id: number
    amount: number
    title: string
    category: string
    type: string
    date: string
}

type TransactionInput = Omit<ITransaction, 'id' | 'date'>

interface ITransactionsProviderProps {
    children: ReactNode
}

interface ITransactionContextData {
    transactions: ITransaction[]
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<ITransactionContextData>({} as ITransactionContextData)
export function TransactionsProvider({ children }: ITransactionsProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then((response) => { setTransactions(response.data.transactions) })
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', { ...transactionInput, date: new Date() });
        const { transaction } = response.data
        setTransactions([
            ...transactions,
            transaction
        ])
    }
    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>

    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)
    return context;

}