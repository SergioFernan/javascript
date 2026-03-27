// mojto cuantos meses despues de 6 meses gana tanto dinero del 10% efectivo anual //


let monto = Number(prompt("ingrese el valor a depositar en el cdt"));
let montoA6Meses = monto * (4.98 / 100)
let montoAMes = monto * (0.83 / 100)
let montoAAno = monto * (10 / 100)
let total6 = montoA6Meses + monto
let total1 = montoAMes + monto
let total12 = montoAAno + monto
console.log(`su valor ahorrado en 6 meses es ${montoA6Meses} en total tendrias ${total6}`)
console.log(`su valor ahorrado en 1 mes es ${montoAMes} en total tendrias ${total1}`)
console.log(`su valor ahorrado en 12 meses es ${montoAAno} en total tendrias ${total12}`)
