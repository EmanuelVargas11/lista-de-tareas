const formularioTareas = document.querySelector('#formulario-tareas');
const inputIngresarTarea = document.querySelector('.input-ingresar-tarea');
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea');
const btnEliminarTarea = document.querySelector('.bbtn-eliminar-todas-las-tareas');
const ulTareas = document.querySelector('.lista-tareas');
const alerta = document.querySelector('.div');
const contenedorTareas = document.querySelector('.contenedor-tareas');
const body = document.querySelector('body');
const btnEliminarTodasLasTareas = document.createElement('input');
const lista = document.createElement('li');

formularioTareas.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = inputIngresarTarea.value;
    console.log(value);
    const li = document.createElement('li');   
    if (value) {
        li.classList.add('li-tareas');     
        li.innerText = value;
        alerta.classList.remove('alert-danger');
        alerta.innerText = '';
        // console.log(li, 'tarea agregada');
        ulTareas.append(li);
        ulTareas.classList.add('li-tareas');
               
        agregarBtnRealizado(li);
      
    }else if (value === '') {
        console.log("No hay datos");
        alerta.classList.add('alert-danger');
        alerta.classList.add('alert');
        alerta.innerText = 'Debes ingresar una tarea';  
    }
    
    formularioTareas.reset()
    
    eliminarTodasLasTarea(li)
})


function agregarBtnRealizado(li) {
    const boton = document.createElement('button');

    
    li.append(boton);
    boton.innerText = 'Tarea Realizada'; 
    boton.classList.add('btn');
    boton.classList.add('btn-warning');

    boton.addEventListener('click', () => {
        li.remove();
        // console.log('se elimino la tarea por medio del boton realizad');
    })

    li.classList.add('lista-tareas' ,'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
}

function eliminarTodasLasTarea(li) {
    if (inputIngresarTarea.value === inputIngresarTarea.value) {
        formularioTareas.append(btnEliminarTodasLasTareas);
        btnEliminarTodasLasTareas.type = 'reset';
        btnEliminarTodasLasTareas.value = 'Eliminar Todas Las Tareas';
        btnEliminarTodasLasTareas.classList.add('btn-eliminar-todas-las-tareas', 'btn', 'btn-outline-danger', 'm-2', 'p-1,5', 'rounded-pill');
    }else {
        console.log('no se elimino todo');
        ulTareas.append(li);
        li.innerText = value;
    agregarBtnRealizado(li);


        
    }

        btnEliminarTodasLasTareas.addEventListener('click', () => {
        ulTareas.remove(li);
        // console.log('se elimino todo');
        if (inputIngresarTarea.value === inputIngresarTarea.value) {
            
            btnEliminarTodasLasTareas.remove();
        }
        // console.log('eliminado');
    })
    
    
}
