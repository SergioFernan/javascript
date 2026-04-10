let azar = Math.floor(Math.random() * 10) + 1;

let estado = true;



let numero = Number(prompt("Ingrese un numero del 1 al 10, tiene solo 6 intentos para adivinar el numero"));

if (numero === azar) {
  alert("Felicidades, adivinaste el numero");
  estado = false;
}


while (numero !== azar && estado) {    
    if (numero === azar) {
        alert(`Felicidades, adivinaste el numero`);
                estado = false;
                break;
    } else {
        alert("Intenta de nuevo");
        numero = Number(prompt("Ingrese un numero del 1 al 10, sigue intentando"));
        for (let i = 5; i > 0; i--) {
            if (numero === azar) {
                alert(`Felicidades, adivinaste el numero`);
                estado = false;
                break;
            } else {
                alert(`Te quedan ${i} intentos`);
                numero = Number(prompt(`Ingrese un numero del 1 al 10, sigue intentando`));
            }
            
        }
        alert(`El numero era ${azar}`);
            estado = false;
            break;
    }
}
