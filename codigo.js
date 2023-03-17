
function miPrimeraFuncion(){
    //comportamiento de la función 

    console.log("hola desde mi primera Funcion");
}

function sumarNumero(numero1,numero2){

    return numero1+numero2;
}

function modificarTitulo(){
    
   
    console.log("aqui va imprimir el elemento")
    
}

let variableComoFuncion = (parametro1,parametro2) => {

    console.log("Hola desde la arrow function !! ✌️");
    console.log(parametro1);
    console.log(parametro2);
};

// miPrimeraFuncion();
// let resultado = sumarNumero(20,50);
// console.log(resultado);
// variableComoFuncion(24,"hola");

// practicar ciclos par/impar
arreglo = [10,20,0,40,15,60,11,12,34,56,7,89,90,56];

arreglo.map((valorActual)=> {
    //todo lo que va a hacer

    if(valorActual%2 == 0)
        console.log("es par --");
    else
        console.log("es impar--");
    

} );

arreglo.map((item)=>{

  //  condicion logica ? esto hago si es True : esto hago si es False ; 
    item % 2 == 0 ? console.log("es par") : console.log("no es par");

});

console.log(document.getElementById('titulo').innerHTML);
modificarTitulo();



