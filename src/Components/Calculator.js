import React, {useState, useRef} from "react";//import vars of hook


function Calculator() {//function Principal
    const [result, setResult] = useState("");// def vars state 
    const [result1, setResult1] = useState("");
    const inputRef = useRef(0);
    var tempo;
     

    function handleChange(e) {//handle change state of input
      setResult({value: e.target.value});
    }
    

 
    return ( /*return this value*/

        <div >
              {/*screen of calculator  */}
            <div>
              <input type="text"   value={result} ref={inputRef}   onChange={handleChange}/>
            </div>
             
            </div>

    );
  }
  export default Calculator;
