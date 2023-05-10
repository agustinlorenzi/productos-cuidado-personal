import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css";

const ItemList = ({prod}) => {
  return (
    <div className='ordenCard'><Item prod={prod}/></div>
  )
}

export default ItemList