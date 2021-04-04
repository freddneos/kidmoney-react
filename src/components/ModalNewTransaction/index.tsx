import React, { FormEvent, useState } from 'react';
import { Container, TransactionTypeContainer, RadioButton } from './style'
import Modal from 'react-modal'

import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
interface INewTransactionsModalProps {
    isOpen: boolean
    onRequestClose: () => void
}
export default function ModalNewTransaction(props: INewTransactionsModalProps) {
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
    const { createTransaction } = useTransactions()


    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        await createTransaction({
            title, amount, category, type
        })

        props.onRequestClose();
        setTitle('')
        setAmount(0)
        setCategory('')
        setType('')
    }
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
            ariaHideApp={false}
        >
            <button className="react-modal-close" onClick={props.onRequestClose}>
                <img src={closeImg} alt="fechar-modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input
                    type="text"
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioButton
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioButton>

                    <RadioButton
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioButton>
                </TransactionTypeContainer>

                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}

                />
                <button type="submit">Registrar</button>

            </Container>

        </Modal>
    );
}
