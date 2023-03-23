
function miPrimeraFuncion(){
    //comportamiento de la función 

    console.log("hola desde mi primera Funcion");
}

function sumarNumero(numero1,numero2){

    return numero1+numero2;
}

function modificarTitulo(){
    
    let tr = document.getElementById("titulo").innerHTML;

   document.getElementById("titulo").innerHTML +=  " Un nuevo titulo"  ;

   document.getElementById("miDiv").innerHTML += `<h1 id="miTitulo"> este es  un nuevo h1 </h1>`;

}

function imprimirFrutas(){

    let  arregloDefrutas = ["Manzana","Pera","Sandía","Guayaba","Mango", "Naranja","Melón"];

    arregloDefrutas.map((fruta)=>{
       
        document.getElementById("contedorFrutas").innerHTML += `<li>${fruta}</li>`;
        
    });
}
function imprimirCoches(){

    let listaDeCoches = [
                        {
                            marca:"Ford",
                            color:"rojo",
                            modelo:"Fiesta",
                            Placas:"XVN2467",
                            anio:"2020"
                        },
                        {
                            marca:"Volkswagen",
                            color:"blanco",
                            modelo:"Polo",
                            Placas:"XVN2487",
                            anio:"2023"
                        },
                        {
                            marca:"Toyota",
                            color:"negro",
                            modelo:"Corolla",
                            Placas:"XVN--123",
                            anio:"2019"
                        },
                        {
                            marca:"Ford",
                            color:"rojo",
                            modelo:"Focus",
                            Placas:"123-abc",
                            anio:"2018"
                        },];
    
    listaDeCoches.map((coche)=>{

        document.getElementById("contenedorCoches").innerHTML += `<li>
        <div style = "border-style: solid; border-radius: 3px;">
            <p>Marca:  ${coche.marca}</p>
            <p>Color: ${coche.color}</p>
            <p>Modelo:  ${coche.modelo}</p>
            <p>Placas: ${coche.Placas}</p>
            <p>Año: ${coche.anio}</p>
        </div>
        </li>`;

    });

}

// var requestOptions = {
//     method: 'GET'
//   };
  

// fetch("https://rickandmortyapi.com/api/character", requestOptions)
//   .then(response => response.text())
//   .then((result) => {
//       datos =  JSON.parse(result);
//       datos.results.map((item) => {
//           console.log(item.name);
//       });
  
//   })
//   .catch(error => console.log('error', error));

function llamarAPI(){

    var requestOption ={
        method: 'GET'
    };

    fetch("https://rickandmortyapi.com/api/character",requestOption)
    .then(response => response.text())
    .then((result)=>{
        let info = JSON.parse(result);
        
        console.log(info);

        info.results.map((objecto)=>{
            document.getElementById("contendorPersonajes").innerHTML += `
            <li> nombre: ${objecto.name} status:${objecto.status} Especie: ${objecto.species} </li>
            
            
            ` 
            //console.log(objecto.name);
        });
        

    })
    .catch(error=> console.log(error));

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

    // if(valorActual%2 == 0)
    //     console.log("es par --");
    // else
    //     console.log("es impar--");
    

} );

arreglo.map((item)=>{

  //  condicion logica ? esto hago si es True : esto hago si es False ; 
    //item % 2 == 0 ? console.log("es par") : console.log("no es par");

});

// hacer un arreglo de objetos que


//modificarTitulo();

// imprimirFrutas();
// imprimirCoches();

llamarAPI();

