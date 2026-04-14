
let dataYear = [2024, 2026, 3000, 2100] 

for (i=0; i < dataYear.length; i++) {
((dataYear[i] % 4 === 0 && dataYear[i] % 100 !== 0) || (dataYear[i] % 400 === 0))
  ? console.log(`${dataYear[i]} es bisiesto`)
  : console.log(`${dataYear[i]} no es un año bisiesto`);

}