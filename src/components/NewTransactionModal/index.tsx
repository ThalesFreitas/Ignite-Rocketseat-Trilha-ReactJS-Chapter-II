import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';


import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { FormEvent, useState, useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const {createTransaction} = useContext(TransactionsContext);


    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const [type, setType] = useState('deposit');

   async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        
        //passa os dados para a função que esta em TransactionsContext
       await createTransaction({
            title,
            amount,
            category,
            type,
        })
        //limpa os campos do modal
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        
        //fecha o modal
        onRequestClose();
    }


    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button 
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>

            <input 
            placeholder="Título"
            value={title}
            // onChange => executa toda vez que o valor do input for alterado
            onChange={event => setTitle(event.target.value)}
            />

            <input 
             type="number"
             placeholder="Valor"
             value={amount}
             onChange={event => setAmount(Number(event.target.value))}
             />

             <TransactionTypeContainer>
                <RadioBox
                type="button"
                onClick={() => {setType('deposit');}}
                isActive={type === 'deposit'}
                activeColor="green"
                >
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
                </RadioBox>

                <RadioBox 
                type="button"
                onClick={() => {setType('withdraw');}}
                isActive={type === 'withdraw'}
                activeColor="red"
                >
                <img src={outcomeImg} alt="Saída" />
                <span>Saída</span>
                </RadioBox>
             </TransactionTypeContainer>

            <input 
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">
                Cadastrar
            </button>

            </Container>
          
        </Modal>
    )
}

