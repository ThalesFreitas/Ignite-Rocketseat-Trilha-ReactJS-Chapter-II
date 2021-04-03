import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'


interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}
// Header({onOpenNewTransactionModal}: HeaderProps) => recebe uma propriedade
// e  repassa essa propriedade para o botão
export function Header({onOpenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>

            </Content>
        </Container>
    )
}

