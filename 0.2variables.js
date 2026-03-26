let tipo = prompt("en que vas a medir, en f o en c")
if(tipo == "f"){
    let farenheid = Number(prompt("ingrese los farenheid"));
    if(farenheid <= 0){
        console.log("no es numero valido para medir")
    }
    else{
    let grados = (farenheid - 32) / 1.88
    console.log("su medida en grados es" , grados)
    }
}
else if(tipo == "c"){
     let grados = parseFloat(prompt("ingrese el valor en grados"));
     if(grados <= 0){
        console.log("no es numero valido para medir")
     }
     else{
     let farenheid = (grados * 1.8) +32
     console.log("su medida en farenheid es" , farenheid)
     }
}
else{
     console.log("el caracter no es correcto")
}






