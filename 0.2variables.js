let numeroMes = Number(prompt("Ingrese el número del mes (1-12):"));

switch (numeroMes) {
    case 1:
        alert(` Es enero Verano`);
        break;
    case 2:
        alert(` Es febrero Verano`);
        break;
    case 3:
        alert(` Es marzo Verano`);
        break;
    case 4:
        alert(` Es abril Otoño`);
        break;
    case 5:
        alert(` Es mayo Otoño`);
        break;
    case 6:
        alert(` Es junio Otoño`);
        break;
    case 7:
        alert(` Es julio Invierno`);
        break;
    case 8:
        alert(` Es agosto Invierno`);
        break;
    case 9:
        alert(` Es septiembre Invierno`);
        break;
    case 10:
        alert(` Es octubre Primavera`);
        break;
    case 11:
        alert(` Es noviembre Primavera`);
        break;
    case 12:
        alert(` Es diciembre Primavera`);
        break;
    default:
        alert(` Número de mes inválido. Por favor, ingrese un número entre 1 y 12.`);
}   