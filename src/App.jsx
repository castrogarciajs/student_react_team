import { Screen } from "./components/Screen.jsx";
import { Button } from "./components/Button.jsx";
import { useState } from "react";
import { evaluate } from "mathjs";
import {saveACalculation} from "./firebase.js";

const App = () => {
  const [input, setInput] = useState("");

const addInput=val=>{
  setInput(input+val);
}

const evaluateResult=()=>{
    setInput(evaluate(input));
    saveACalculation(evaluate(input));
}
const delScreen=()=>{
  setInput("");
}
const delScreenCe=()=>{
  setInput(input.substring(0, input.length - 1))
}

  return (
    <>
      <div className="mainApp">
        <Screen  input={input} />
      <div style={{ width: "130px" }}>
        <Button addFunction={delScreen}>AC</Button>
        <Button addFunction={delScreenCe}>CE</Button>
        <Button addFunction={addInput}>%</Button>
        <Button addFunction={addInput}>/</Button>
        <Button addFunction={addInput}>7</Button>
        <Button addFunction={addInput}>8</Button>
        <Button addFunction={addInput}>9</Button>
        <Button addFunction={addInput}>*</Button>
        <Button addFunction={addInput}>4</Button>
        <Button addFunction={addInput}>5</Button>
        <Button addFunction={addInput}>6</Button>
        <Button addFunction={addInput}>-</Button>
        <Button addFunction={addInput}>1</Button>
        <Button addFunction={addInput}>2</Button>
        <Button addFunction={addInput}>3</Button>
        <Button addFunction={addInput}>+</Button>
        <Button addFunction={addInput}>0</Button>
        <Button addFunction={addInput}>.</Button>
        <Button addFunction={evaluateResult}>=</Button>
      </div>
      </div>    
    </>
  );
};
export default App;
