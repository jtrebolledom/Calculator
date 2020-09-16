import React, {useState, useRef} from "react";//import vars of hook
import "./Calculator.css";//import css

function Calculator() {//function Principal
    const [result, setResult] = useState("");// def vars state 
    const [result1, setResult1] = useState("");
    const inputRef = useRef(0);
    var tempo;

    function handleClick(e) {// function for handle click in botton of calculator
      tempo=e.target.value; //this value take of botton selected
      setResult(result.concat(tempo)); //concate var "tempo" & "result"
    }    

    function handleChange(e) {//handle change state of input
      setResult({value: e.target.value});
    }
    
    function clear() {//function for clear valors in calculator
        setResult("");  //clear and set valor in zero
      }

    function calculate() {// function for calculate the valor in screen of calculator
        try { // structure try-Catch for control of errors
          setResult(eval(result).toString()); // transformate the valor in screen string  to numbers and resolve the expresion
         } catch (error) {
          setResult("Error"); // if error
        }
      }
    return ( /*return this value*/
      <div className="calculator">
            <div  className="calculator">{/*screen of calculator  */}
              <input type="text"   className="screen"   value={result} ref={inputRef} onChange={handleChange} placeholder='0'/>
            </div>
             
            <div className="keys">{/*bottons calculator*/}
              <button value="+" onClick={handleClick} type="button" className="btn btn-light">+</button>
              <button value="-" onClick={handleClick} type="button" className="btn btn-light">-</button>   
              <button value="*" onClick={handleClick} type="button" className="btn btn-light">&times;</button>        
              <button value="/" onClick={handleClick} type="button" className="btn btn-light">&divide;</button>        
              
              <button value="7" onClick={handleClick} type="button" className="btn btn-light">7</button>
              <button value="8" onClick={handleClick} type="button" className="btn btn-light">8</button>
              <button value="9" onClick={handleClick} type="button" className="btn btn-light">9</button>
              <button value="4" onClick={handleClick} type="button" className="btn btn-light">4</button>
              <button value="5" onClick={handleClick} type="button" className="btn btn-light">5</button>
              <button value="6" onClick={handleClick} type="button" className="btn btn-light">6</button>
              <button value="1" onClick={handleClick} type="button" className="btn btn-light">1</button>
              <button value="2" onClick={handleClick} type="button" className="btn btn-light">2</button>
              <button value="3" onClick={handleClick} type="button" className="btn btn-light">3</button>
              <button value="0" onClick={handleClick} type="button" className="btn btn-light">0</button>
              <button value="." onClick={handleClick} type="button" className="btn btn-light">.</button>
              
              <button  id="clear" onClick={clear} type="button" className="btn btn-danger btn-sm">AC</button>
              <button id="result" onClick={calculate} type="button" className="equal operator btn btn-primary">=</button>
           </div>
      </div>
    );
  }
  export default Calculator;
