let numeros = [2,3,6,7,3,6,8,9,4,5,6,7]
let pares = []
let impares = []

for (i=0;i<numeros.length;i++){
    posicionInicial = numeros[i]
    if (posicionInicial % 2 === 0){
        pares.push(posicionInicial) 
    }
    else{
        impares.push(posicionInicial)
    }
}

console.log(pares)
console.log(impares)