// Ejercicio página 38.
// Escribir un loop que llame a 7 console.log y que retorne o muestre un triangulo.

// solución 1
let caracter = "";  
for(contador=0; contador<7; contador++) {
    caracter = caracter.concat("#"); 
    console.log(caracter);
}

// solución 2
let caracterDos = "";  
while(caracterDos.length < 7) {
    caracterDos = caracterDos.concat("#"); 
    console.log(caracterDos);
}