import React, { useState } from 'react'

const ItemCount = ({stock,initial, onAdd}) => {    
    const [count, setCount] = useState(initial)
    const [disp,setDisp]=useState(stock)    

    function sumar() {
        if (count < stock){
            setCount(count + 1)
        }                 
    }

    function restar() {
        if (count > 1) {
            setCount(count - 1)            
        }
    }

    function agregar() {
    if(count <= disp){
        onAdd(count)
        setDisp(disp - count)

    }else{
        console.log("en item count, no hay stock")
    }
       
    }

    return (
        <div>
            <button onClick={restar}>-</button>
            {count}
            <button onClick={sumar}>+</button>
            <button onClick={agregar}>Agregar</button>
        </div>
    )
}

export default ItemCount