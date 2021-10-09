import React from "react";
import { Card } from "react-bootstrap"
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
                <p className="list-group-item">{events.map(item => item.nome === "" ? "Nome não informado" : item.nome)}
                </p>
                <h5>Endereço</h5>
                <ul className="list-group mb-3">
                    {events.map(item =>
                        <li className="list-group-item" key={item.nome}>
                            <span>CEP: {item.result.cep}</span>
                            <span>Logradouro: {item.result.logradouro}</span>
                            <span>Bairro: {item.result.bairro}</span>
                            <span>Cidade: {item.result.localidade}</span>
                            <span>UF: {item.result.uf}</span>
                        </li>
                    )}
                </ul>
                <h5>Valor da renda per capita</h5>
                <p className="list-group-item">{events.map(item => item.rendaPerCapita)}</p>
            </Card.Body>
        </Card>
    )
}

export default RetornaDados