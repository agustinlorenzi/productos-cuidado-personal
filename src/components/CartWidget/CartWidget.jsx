import React from 'react'
import { BiCartAlt } from "react-icons/bi";
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className='carrito'>
            <span className='circulo'>1</span>
            <h2><BiCartAlt className='simboloCarrito' /></h2>
        </div>
    )
}

export default CartWidget



