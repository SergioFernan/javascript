let tipo = prompt("en que vas a medir, en ml o en cm")
if(tipo == "ml"){
    let ml = Number(prompt("ingrese los milimetros"));
    if(ml <= 0){
        console.log("no es numero valido para medir")
    }
    else{
    let cm = ml / 10
    console.log("su medida en cm es" , cm)
    }
}
else if(tipo == "cm"){
     let cm = parseFloat(prompt("ingrese el valor en cm"));
     if(cm <= 0){
        console.log("no es numero valido para medir")
     }
     else{
     let ml = cm * 10
     console.log("su medida en milimetros es" , ml)
     }
}
else{
     console.log("el caracter no es correcto")
}

