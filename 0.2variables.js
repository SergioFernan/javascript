let palabras = [
  "manzana",
  "perro",
  "casa",
  "montana",
  "rio enfurecido",
  "libro",
  "computadora",
  "musica",
  "sol",
  "ciudad"
];
let max = []
let invertido = []
let min = palabras[0]

for (i = 0; i < palabras.length; i++) {
    let palabra = palabras[i]
    console.log(`la palabra ${palabra} tiene ${palabra.length} caracteres` )
    if (palabra.length > max.length) {
        max = palabra;
    }
    else if (palabra.length < min.length) {
        min = palabra;
    }
}

console.log(`la palabra con más caracteres es: ${max}`)
console.log(`la palabra con menos caracteres es: ${min}`)

for (i = palabras.length - 1; i >= 0; i--) {
    let palabra = palabras[i]
    invertido.push(palabra)
}

console.log(`el array invertido es: ${invertido}`)
