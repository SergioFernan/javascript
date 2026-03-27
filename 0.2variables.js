let precio = Number(prompt(`cuanto fue el precio total`));
let numeroDePersonas = Number(prompt(`cuantas personas comieron`));
let PersonaQueMasComio = prompt(`la persona que mas comio es`)
let PersonaQueMenosComio = prompt(`la persona que menos comio es`)
normal = precio / (numeroDePersonas + 1)
nombreDeMuertoDeHambre = (precio / (numeroDePersonas + 1)) / 2

let partes = numeroDePersonas + 1;
let pagoNormal = precio / partes;
let pagoDoble = pagoNormal * 2;
let pagoMenos = pagoNormal * 0.5;



console.log(` pago de cada persona ${pagoNormal.toFixed(2)}`);
console.log(`${PersonaQueMasComio} que comio mas paga ${pagoDoble.toFixed(2)}`);
console.log(`${PersonaQueMenosComio} que comio menos paga ${pagoMenos.toFixed(2)}`);
