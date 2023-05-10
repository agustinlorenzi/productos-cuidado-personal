import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css";
import ItemCount from '../ItemCount/ItemCount';
import { getProductos } from '../Articulos/articulos';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProductos()
      .then(respuesta => setProductos(respuesta))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  function onAdd(cantidad) {
    console.log("la cantidad de item count es " + cantidad)
  }


  return (
    <div >
      <p className='parrafo'>{greeting}</p>
      <div className='control'>
      {loading ? "Cargando" : productos.map(prod=><div key={prod.id}>{<ItemList prod={prod}/>}</div>)}

      </div>
      
      {/* {loading ? <Loader /> : productos.map((prod => <div key={prod.id}>{<ItemList prod={prod} />}</div>))} */}

      <ItemCount stock={5} initial={1} onAdd={onAdd} />

    </div>
  )
}

export default ItemListContainer