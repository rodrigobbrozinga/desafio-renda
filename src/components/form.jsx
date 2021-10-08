import { Form, Button, Card } from "react-bootstrap";

const Formulario = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="nome">
                <Form.Label>Nome (Opcional)</Form.Label>
                <Form.Control type="text" placeholder="Insira o nome" />                
            </Form.Group>

            <Form.Group className="mb-3" controlId="CEP">
                <Form.Label>CEP</Form.Label>
                <Form.Control type="text" placeholder="CEP" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="renda">
                <Form.Label>Renda Mensal</Form.Label>
                <Form.Control type="text" placeholder="Insira a renda mensal" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dependentes">
                <Form.Label>Número de dependentes</Form.Label>
                <Form.Control type="number" placeholder="Insira o número de dependentes" required />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    )
}

export default Formulario