import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css";

const Item = ({prod}) => {
    return (
        <div className='item'>

            <Card className="card">
                <Card.Img style={{ height: '18rem' }} variant="top" src={prod.foto} />
                <Card.Body style={{ height: '19rem', margin: "1rem", paddingTop: "2rem" }} className='cardBody'>
                    <Card.Text>Codigo: {prod.id}.</Card.Text>
                    <Card.Title className='nombreArticulo'>{prod.nombre}</Card.Title>
                    <Card.Text>$ {prod.precio}</Card.Text>
                    <Card.Text>Stock: {prod.stock}</Card.Text>
                    <Button variant="primary">Ver Más</Button>
                </Card.Body>
            </Card>


        </div>
    )
}

export default Item