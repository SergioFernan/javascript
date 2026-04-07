let operacion = Number(prompt(`ingrese la operacion que desea realizar
    1. suma
    2. resta
    3. multiplicacion
    4. division`))

if (operacion <= 0 || operacion > 4 ) {
    console.log(`operacion no valida`)
} 
else if (operacion === (1 || "suma")) {
    let numero1 = Number(prompt(`ingrese el primer numero`))
    let numero2 = Number(prompt(`ingrese el segundo numero`))
    console.log(`el resultado es ${numero1 + numero2}`)
}
else if (operacion === (2 || "resta")) {
    let numero1 = Number(prompt(`ingrese el primer numero`))
    let numero2 = Number(prompt(`ingrese el segundo numero`))
    console.log(`el resultado es ${numero1 - numero2}`)
}
else if (operacion === (3 || "multiplicacion")){
    let numero1 = Number(prompt(`ingrese el primer numero`))
    let numero2 = Number(prompt(`ingrese el segundo numero`))
    console.log(`el resultado es ${numero1 * numero2}`)
}
else if (operacion === (4 || "division")) {
    let numero1 = Number(prompt(`ingrese el primer numero`))
    let numero2 = Number(prompt(`ingrese el segundo numero`))
    console.log(`el resultado es ${numero1 / numero2}`)
}

