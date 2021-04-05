import { useContext} from "react";

import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";


export function TransactionsTable(){
  const {transactions }= useContext(TransactionsContext);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                   
                   {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.title}</td>

                        <td className={transaction.type}>
                            {new Intl.NumberFormat('pt-BR', {
                                // formatação em moeda
                                style: 'currency',
                                // tipo de moeda brasileira R$
                                currency: 'BRL'         
                            }).format(transaction.amount)}
                            </td>

                        <td>{transaction.category}</td>
                        
                        <td>
                        {new Intl.DateTimeFormat('pt-BR').format(
                            new Date(transaction.createdAt)
                        )} 
                        </td>
                    </tr>   
                   ))}

                </tbody>

            </table>
        </Container>
    );
}