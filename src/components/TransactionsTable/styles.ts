import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;

        // border-spacing => espaçamento entre os items
        border-spacing: 0 0.5rem;

        //cabeçalho da tabela
        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        //corpo da tabela
        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            //&:first-child => quando o td e o primeiro filho vou colocar a cor tal
            &:first-child {
                color: var(--text-title);
            }

            //&.deposit => se minha classe do td for do tipo deposit vou mudar a cor
            &.deposit {
                color: var(--green);
            }

            //&.deposit => se minha classe do td for do tipo withdraw vou mudar a cor
            &.withdraw {
                color: var(--red);
            }
        }

    }

`;