import React from 'react'
import "./ItemListContainer.css";
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {

  function onAdd(cantidad){
    console.log("la cantidad de item count es " + cantidad)
  }


  return (
    <div>
        <p className='parrafo'>{greeting}</p>
        <ItemCount stock ={5} initial={1} onAdd={onAdd} />

    </div>
  )
}

export default ItemListContainer