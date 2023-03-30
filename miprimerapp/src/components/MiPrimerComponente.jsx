import React from 'react';

function MiPrimerComponente() {

let valor = "variable de JS";
let suma = 25+50;

var objectoConEstilos = {color:"blue", border:"solid", backgroundColor:"yellow"};

    return(

        <div style={objectoConEstilos}>
            <p>{valor}</p>           
            <h3>este es el resultado de la suma= {suma} </h3>
            <p>mas etiquetas</p>
        </div>
        
    );
    
}

export default  MiPrimerComponente;