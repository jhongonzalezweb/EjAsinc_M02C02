function myFunction() {
    let edadJubilacionMujer = prompt("Coloque la edad de los mujeres");
    let edadJubilacionHombre = prompt("Coloque la edad de los hombres");
    
if(edadJubilacionMujer >= 60 && edadJubilacionHombre >= 65) {

    document.getElementById("demo").innerHTML = "Ambos tienen la edad para Jubilarse";

} else if(edadJubilacionMujer < 60 && edadJubilacionHombre >= 65) {

    document.getElementById("demo").innerHTML = "Los Hombre si tienen la edad para Jubilarse, las mujeres no";

} else if(edadJubilacionMujer >= 60 && edadJubilacionHombre < 65) {

    document.getElementById("demo").innerHTML = "Las mujeres si tienen la edad para jubilarse, los hombres no"

} else {

    document.getElementById("demo").innerHTML = "Ninguno de los dos generos tienen la edad para jubilarse";

}

}

// Par o impar.


function myFunctionPar() {
    let numero = prompt("Coloque Un numero");

    if (numero%2 == 0) {
        document.getElementById("demo2").innerHTML = "Es Par";
    } else {
        document.getElementById("demo2").innerHTML = "Es Impar";
    }

}


// @jhonwebdesing
