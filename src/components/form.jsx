import React, {useState} from 'react';
import { Form, Button, Card } from "react-bootstrap";
import RetornaDados from './resposta';

const Formulario = () => {
    const [events, setEvents] = useState([]);

    const convertToArray = (obj) => {
        const arr = [obj];
        return arr;
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        fetch(`http://localhost:3001/?nome=${data.nome}&cep=${data.cep}&renda=${data.renda}&dependentes=${data.dependentes}`)
            .then(response => response.json())
            .then(data => {
                const array = convertToArray(data);
                console.log(array);
                setEvents(array);
            })
            .catch(error => console.error);
    }

    return (
        <>
            <Card border="secondary" bg="light" className="w-50 m-auto mt-5">
                <Card.Body>
                    <Card.Title className="text-center">Insira os dados a seguir para calcular a renda per capita da sua família</Card.Title>
                    <Card.Text>
                        <Form onSubmit={submitHandler}>                
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Nome (Opcional)</Form.Label>                                
                                <input type="text" name="nome" className="form-control" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="CEP">
                                <Form.Label>CEP</Form.Label>
                                <input type="text" name="cep" placeholder="Insira o cep" className="form-control" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="renda">
                                <Form.Label>Renda Mensal</Form.Label>
                                <input type="text" name="renda" placeholder="Insira a renda mensal" className="form-control" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="dependentes">
                                <Form.Label>Número de dependentes</Form.Label>
                                <input type="text" name="dependentes" placeholder="Insira o número de dependentes" className="form-control" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Calcular</Button>
                        </Form>
                    </Card.Text>                    
                </Card.Body>
            </Card>
            <RetornaDados events={events}/>

        </>
    )
}

export default Formulario