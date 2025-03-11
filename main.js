import { agregarTarea } from './formulario.js';
const formularioTareas = document.querySelector('#formulario-tareas');
const ulTareas = document.querySelector('.ul-tareas');
const alerta = document.querySelector('#alert');



// evento submit del formulario para agregar tarea
agregarTarea(formularioTareas, ulTareas, alerta);
