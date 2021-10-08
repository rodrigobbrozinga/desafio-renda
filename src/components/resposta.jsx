import React from "react";
import { Card} from "react-bootstrap"

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
                <p>Endereço completo</p> 
                <h5>Valor da renda per capita</h5>
                <p>Valor da renda</p>                 
            </Card.Body>
        </Card>
    )
}

export default RetornaDados