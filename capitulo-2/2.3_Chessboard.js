// realizar un tablero de ajedrez de 8 x 8.

let tablero = "";
for(cont = 0; cont < 64; cont++ ) {
    // para el salto de linea cada 8.
    if (tablero.length % 8 == 0) {
        tablero = tablero.concat("\n");
    }
    
    // para intercalar caracteres.
    if (cont % 2 == 0) {
        tablero = tablero.concat("#");
    } else {
        tablero = tablero.concat(" ");
    }
}
console.log(tablero);