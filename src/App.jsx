import {Pantall} from "./componentes/Pantall";
import {BotonClear} from "./componentes/BotonClear";
import {Boton} from "./componentes/Boton";
import { guardaUnCalculo } from "./firebase"

import { useState } from "react";
import { evaluate} from "mathjs";

function App() {
    const [input, setInput] = useState('')

    const agregarInput = val => {
        setInput(input + val)
    }

    const calcularResultado = () =>{
        if(input){
            setInput(evaluate(input))
            guardaUnCalculo(evaluate(input))
        }else{
            alert("porfa ingrese valores para realizar ecuaciones")
        }
    }
  return (
    <div className="padre">
      <div className="contenedor">
        <Pantall input={input}/>

        <div className="fila">
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
            <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
