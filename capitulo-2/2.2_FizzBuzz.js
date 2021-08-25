// Escribir por consola del 1 al 100. 
// Divisibles por 3 que diga Fizz y divicible por 5 que diga Buzz.
// Divisibles por 3 y 5 que diga FizzBuzz.


//  solución 1
for (contador = 1; contador < 101; contador++) {
    if (contador % 3 == 0 && contador % 5 == 0) {
        console.log(contador + " - FizzBuzz");
    } else if (contador % 3 == 0) {
        console.log(contador + " - Fizz");
    } else if (contador % 5 == 0) {
        console.log(contador + " - Buzz");
    } else {
        console.log(contador);
    }
}