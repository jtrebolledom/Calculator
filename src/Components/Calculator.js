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
 
            <div  className="calculator">{/*screen of calculator  */}
              <input type="text"   className="screen"   value={result} ref={inputRef}   onChange={handleChange}/>
            </div>
             
            <div   className="keys">{/*bottons calculator*/}
              <button value="+" onClick={handleClick} type="button">+</button>
              <button value="-" onClick={handleClick} type="button">-</button>   
              <button value="*" onClick={handleClick} type="button">&times;</button>        
              <button value="/" onClick={handleClick} type="button">&divide;</button>        
              
              <button value="7" onClick={handleClick} type="button">7</button>
              <button value="8" onClick={handleClick} type="button">8</button>
              <button value="9" onClick={handleClick} type="button">9</button>
              <button value="4" onClick={handleClick} type="button">4</button>
              <button value="5" onClick={handleClick} type="button">5</button>
              <button value="6" onClick={handleClick} type="button">6</button>
              <button value="1" onClick={handleClick} type="button">1</button>
              <button value="2" onClick={handleClick} type="button">2</button>
              <button value="3" onClick={handleClick} type="button">3</button>
              <button value="0" onClick={handleClick} type="button">0</button>
              <button value="." onClick={handleClick} type="button">.</button>
              
              <button  id="clear" onClick={clear} type="button" >AC</button>
              <button id="result" onClick={calculate} type="button">=</button>
           </div>

    );
  }
  export default Calculator;
