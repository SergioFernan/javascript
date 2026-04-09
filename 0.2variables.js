const estudiantes = [
  { nombre: "Ana", nota: 4.5, descripcion: "Participa mucho en clase" },
  { nombre: "Luis", nota: 3.5, descripcion: "Entrega tareas a tiempo" },
  { nombre: "Carla", nota: 2.4, descripcion: "Habla mucho en clase" },
  { nombre: "Mateo", nota: 1.2, descripcion: "Necesita reforzar matematicas y es parcero de Carla" },
  { nombre: "Sofia", nota: 4.1, descripcion: "Muy buena comprension lectora" }
];

let max = estudiantes[0].nota;
let min = estudiantes[0].nota;
let mejorEstudiante = estudiantes[0];

for (let i = 0; i < estudiantes.length; i++) {
  const estudiante = estudiantes[i];
  console.log(`Nombre: ${estudiante.nombre}, Nota: ${estudiante.nota}, Descripción: ${estudiante.descripcion}`);

  if (estudiante.nota > max) {
    max = estudiante.nota;
  }
  else if (estudiante.nota < min) {
    min = estudiante.nota;
  }
    if (estudiante.nota >= 4.5) {
    console.log("paso con promedio alto");
  } else if (estudiante.nota >= 3.5) {
    console.log("paso, buen trabajo");
  } else {
    console.log("perdio la materia");
  }
}

for (let i = 1; i < estudiantes.length; i++) {
  if (estudiantes[i].nota > mejorEstudiante.nota) {
    mejorEstudiante = estudiantes[i];
  }
}

console.log(`La nota mas alta es: ${max}`);
console.log(`La nota mas baja es: ${min}`);
console.log("Estudiante:", mejorEstudiante.nombre);

