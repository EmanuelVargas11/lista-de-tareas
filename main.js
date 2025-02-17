const formularioTareas = document.querySelector('#formulario-tareas');
const inputIngresarTarea = document.querySelector('.input-ingresar-tarea');
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea');
const listaTareas = document.querySelector('.lista-tareas');
const alerta = document.querySelector('.div');



formularioTareas.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputIngresarTarea.value === '') {
        alerta.classList.add('alert-danger');
        alerta.classList.add('alert');
        alerta.innerText = 'Debes ingresar una tarea';        

    }else{
        alerta.classList.remove('alert-danger');
        alerta.innerText = '';

    }
    console.log(inputIngresarTarea.value); 
    
    })



