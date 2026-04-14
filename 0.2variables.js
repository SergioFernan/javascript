let button1 = document.getElementById(`btn1`);
let button2 = document.getElementById(`btn2`);
let button3 = document.getElementById(`btn3`);

button1.addEventListener(`click`, () => {
    let options = [`piedra`, `papel`, `tijera`];
let azar = Math.floor(Math.random() * 3);
let computer = options[azar];
let player = prompt(`Elige: 
    1. piedra
    2. papel
    3. tijera`);
if (player === computer) {
    console.log(`Empate!`);
} else if (player === `piedra`) {
    if (computer === `papel`) {
        console.log(`Perdiste!`);
    } else {
        console.log(`Ganaste!`);
    }
} else if (player === `papel`) {
    if (computer === `tijera`) {
        console.log(`Perdiste!`);
    } else {
        console.log(`Ganaste!`);
    }
} else if (player === `tijera`) {
    if (computer === `piedra`) {
        console.log(`Perdiste!`);
    } else {
        console.log(`Ganaste!`);
    }
} else {
    console.log(`Opción no válida!`);
}
});
button2.addEventListener(`click`, () => {
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
});
button3.addEventListener(`click`, () => {
    let dataYear = [2024, 2026, 3000, 2100] 

for (i=0; i < dataYear.length; i++) {
((dataYear[i] % 4 === 0 && dataYear[i] % 100 !== 0) || (dataYear[i] % 400 === 0))
  ? console.log(`${dataYear[i]} es bisiesto`)
  : console.log(`${dataYear[i]} no es un año bisiesto`);

}
});