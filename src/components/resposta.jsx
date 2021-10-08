import React from "react";
import { Card} from "react-bootstrap"
import "../styles/resposta.css"

function RetornaDados({ events }) {
    if (!events || events.length === 0) {
        return null;
    }
    return (
        <Card border="secondary" bg="light" className="w-50 m-auto mt-5 mb-5">
            <Card.Header as="h4" className="text-center">Cálculo da Renda</Card.Header>
            <Card.Body>
                <h5>Nome do titular</h5>
                <p>Nome do fulano</p>
                <h5>Endereço</h5>
                <ul className="list-group">
                    {events.map(item => 
                    <li className="list-group-item" key={item.nome}>
                        <span>CEP: {item.cep}</span>                        
                        <span>Logradouro: {item.logradouro}</span>
                        <span>Bairro: {item.bairro}</span>
                        <span>Cidade: {item.localidade}</span>
                        <span>UF: {item.uf}</span>
                    </li>
                    )}    
                </ul> 
                <h5>Valor da renda per capita</h5>
                <p>Valor da renda</p>                 
            </Card.Body>
        </Card>
    )
}

export default RetornaDados