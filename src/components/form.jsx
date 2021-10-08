import { Form, Button, Card } from "react-bootstrap";

const Formulario = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);
        console.log("A renda per capita é de " + data.renda / (parseInt(data.dependentes) + 1));
    }

    return (
        <>
            <Card border="secondary" bg="light" className="w-50 m-auto mt-5">
                <Card.Header>Cálculo de renda per capita</Card.Header>
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


        </>
    )
}

export default Formulario