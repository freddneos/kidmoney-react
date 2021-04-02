import React from 'react';
import { Container } from './style'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'

//import incomeImg from '../../assets/income.svg'
//import outcomeImg from '../../assets/outcome.svg'

interface INewTransactionsModalProps {
    isOpen: boolean
    onRequestClose: () => void
}
export default function ModalNewTransaction(props: INewTransactionsModalProps) {
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
        >
            <button className="react-modal-close" onClick={props.onRequestClose}>
                <img src={closeImg} alt="fechar-modal" />
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>

                <input type="text" placeholder="Titulo" />
                <input type="number" placeholder="valor" />
                <input type="text" placeholder="Categoria" />
                <button type="submit">Registrar</button>

            </Container>

        </Modal>
    );
}
