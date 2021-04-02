import React from 'react';
import { Container, Content, Logo } from './style'
import logoImg from '../../assets/logo.png'
interface IHeaderProps {
    onNewTransactionModalOpen: () => void;
}
export default function Header({ onNewTransactionModalOpen }: IHeaderProps) {
    return (
        <Container>
            <Content>
                <Logo src={logoImg} alt="kid-money" />
                <button onClick={onNewTransactionModalOpen} type="button">Nova Transacao</button>
            </Content>
        </Container>
    );
}
