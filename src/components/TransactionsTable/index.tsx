import React, { useState, useEffect } from 'react';
import { Container } from './style'
import { api } from '../../services/api'

interface ITransaction {
    id: number
    amount: number;
    title: string;
    category: string;
    date: Date
}
export default function TransactionsTable() {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    useEffect(() => {
        api.get<ITransaction[]>('transactions')
            .then((response) => setTransactions(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Descricao</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className="deposit">K${transaction.amount}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.date}</td>
                            </tr>
                        )
                    })}
                    {/* <tr>
                        <td>Arrumou a cama</td>
                        <td className="deposit">K$10,00</td>
                        <td>Tarefas de casa</td>
                        <td>02/07/2021</td>
                    </tr>
                    <tr>
                        <td>Jogou lixo fora</td>
                        <td className="deposit">K$10,00</td>
                        <td>Tarefas de casa</td>
                        <td>02/01/2021</td>
                    </tr>
                    <tr>
                        <td>Brigou com irmao</td>
                        <td className="withdraw">K$15,00 -</td>
                        <td>Desobediencia</td>
                        <td>01/04/2021</td>
                    </tr> */}
                </tbody>
            </table>
        </Container>
    );
}
