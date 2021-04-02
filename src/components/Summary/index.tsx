import React from 'react';
import { Container } from './style'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'


export default function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>K$1.100,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="saidas" />
                </header>
                <strong>K$700,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>K$700,00</strong>
            </div>
        </Container>
    );
}
