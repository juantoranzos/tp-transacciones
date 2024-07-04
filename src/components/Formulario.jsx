import React, {  useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NewTransaction } from '../slice/transactionSlice';

export const Formulario = ({ actionType }) => {  // Asegúrate de pasar actionType como prop
    const date = new Date();
    const today = date.toLocaleDateString().split("/");
    const day = today[0].length > 1 ? today[0] : `0${today[0]}`;
    const month = today[1].length > 1 ? today[1] : `0${today[1]}`;
    const fechaInicial = `${today[2]}-${month}-${day}`;
    const cat = ["Selecciona una categoria", "Alimentos", "Transporte", "Contabilidad", "Empleados"];
    const tipo = ["Selecciona un tipo", "Ingreso", "Pago"];
    const [fecha, setFecha] = useState(fechaInicial);
    const [descripcion, setDescripcion] = useState("");
    const [monto, setMonto] = useState("");
    const [categoria, setCategoria] = useState("");
    const [type, setType] = useState("");
    const dispatch = useDispatch();
   
 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fecha || !descripcion || !monto || !categoria || !type) {
            alert("Por favor rellene todos los campos");
            return;
        }

        let transaction = {
            fecha,
            descripcion,
            monto,
            categoria,
            type
        };
        if (actionType === "new") {
            transaction.id = Math.floor(Math.random() * 1000);
            dispatch(NewTransaction(transaction));
            console.log(transaction);
            alert("Transacción Creada");
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit} className='shadow rounded p-3'>
                <Form.Group className="mb-3">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control name='fecha' min={fechaInicial} value={fecha} onChange={(e) => setFecha(e.target.value)} type="date" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control name='descripcion' onChange={(e) => setDescripcion(e.target.value)} as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Monto</Form.Label>
                    <Form.Control name='monto' onChange={(e) => setMonto(e.target.value)} type='number' rows={3} />
                </Form.Group>

                <Form.Select name='categoria' value={categoria} onChange={(e) => setCategoria(e.target.value)} className="mb-4">
                    {cat.map((item, index) => <option key={index}>{item}</option>)}
                </Form.Select>
                <Form.Select name='type' value={type} onChange={(e) => setType(e.target.value)} className="mb-4">
                    {tipo.map((item, index) => <option key={index}>{item}</option>)}
                </Form.Select>
                <div className='d-grid gap-2'>
                    <button type='submit'>{actionType} Transacción</button>
                </div>
            </Form>
        </Container>
    );
};
