import { useEffect } from "react";
import { api } from "../../services/api";
import {Container} from "./styles";

export function TransactionsTable(){
    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Web</td>
                        <td className="deposit">R$12000</td>
                        <td>Software</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Web</td>
                        <td className="withdraw"> - R$12000</td>
                        <td>Software</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Web</td>
                        <td>R$12000</td>
                        <td>Software</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}