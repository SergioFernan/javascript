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
