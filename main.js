const formularioTareas = document.querySelector('#formulario-tareas');
const inputIngresarTarea = document.querySelector('.input-ingresar-tarea');
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea');
const listaTareas = document.querySelector('.lista-tareas');
const alerta = document.querySelector('.div');

let li = document.createElement('li');


formularioTareas.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    
    if (inputIngresarTarea.value === '') {
        alerta.classList.add('alert-danger');
        alerta.classList.add('alert');
        alerta.innerText = 'Debes ingresar una tarea';        
        
    }else{
        alerta.classList.remove('alert-danger');
        alerta.innerText = '';
    }
    // console.log(inputIngresarTarea.value);
    
    let datosIngresados = inputIngresarTarea.value;
    agregarTarea(datosIngresados);
    
})



function agregarTarea(datosIngresados){ 
    
    listaTareas.appendChild(li);
    // if (inputIngresarTarea.value) {
    //     listaTareas.appendChild(li);  
    // }
    
    listaTareas.innerHTML += `
                        <ul class="mg-5 d-flex justify-content-around" > 
                            <li class="">${datosIngresados}</li>
                            <button type="button" class="btn btn-danger">Eliminar</button>
                        </ul>
    
                    `     
    console.log(listaTareas);
}


