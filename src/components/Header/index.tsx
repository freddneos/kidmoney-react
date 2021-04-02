import React from 'react';
import { Container, Content , Logo } from './style'
import logoImg from '../../assets/logo.png'
export default function Header() {
    return (
        <Container>
            <Content>
                <Logo src={logoImg} alt="kid-money" />
                <button type="button">Nova Transacao</button>
            </Content>
        </Container>
    );
}
