import React from 'react';
import { Container } from './style'
import Summary from '../Summary'
import TransactionsTable from '../TransactionsTable'

export default function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}
