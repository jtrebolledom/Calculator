import React from "react";//import vars of hook
import "./App.css";//import css
import Calculator from "./Components/Calculator";

function App() {//function Principal
  
  return ( /*return this value*/
    <div className="calculator-app"> {/* div principal*/}
      <Calculator/>
    </div>
  );
}
export default App;
