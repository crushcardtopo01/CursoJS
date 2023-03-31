//import { useState } from "react";
import React, { useState } from "react";

function Clicker(){

    //let estado = 0;


    let  [estado,setEstado] = useState(0);

    


    let function2 = ()=>{
        console.log("esta es una arrow function");
        
        setEstado(2);
    };



    function mensaje(){
        console.log("otro mensaje optrto");
    }

    return (
        <div>
            <button onClick={function2}> Este es un mensaje desde Function2</button>
            <button onClick={mensaje}> Este es desde una function</button>
            <button onClick={()=>{console.log("mensaje nuevo")}}> Este es desde Arrow</button>
            <p>este es el valor del estado: {estado}</p>

            <button onClick={()=>{setEstado(estado+1)}} >Click me!</button>


            <div style={{backgroundColor: estado<10 ? "green":"red",width:"100px",height:"100px", marginLeft:"50%"}}></div>
        </div>
    );
}

export default Clicker;