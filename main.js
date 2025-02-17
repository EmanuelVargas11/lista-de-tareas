const formularioTareas = document.querySelector('#formulario-tareas');
const inputIngresarTarea = document.querySelector('.input-ingresar-tarea');
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea');
const btnEliminarTarea = document.querySelector('.btn-eliminar-tarea');
const ulTareas = document.querySelector('.lista-tareas');
const alerta = document.querySelector('.div');


formularioTareas.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = inputIngresarTarea.value;
    // console.log(value);
    
    
    if (value) {
        const li = document.createElement('li');
        const button = document.createElement('button');
        li.innerText = value;
        ulTareas.append(li);
        alerta.classList.remove('alert-danger');
        alerta.innerText = '';
        
        agregarBtnRealizado(li, button);
        btnEliminarTarea.addEventListener('click', () => {
            // console.log('click');
            ulTareas.remove(li)
            
            
        })
    }else if (value === '') {
        alerta.classList.add('alert-danger');
        alerta.classList.add('alert');
        alerta.innerText = 'Debes ingresar una tarea';  
    }
    
    formularioTareas.reset()
    
})


function agregarBtnRealizado(li, button) {
    
    li.append(button);
    button.innerText = 'Realizado'; 
    button.classList.add('btn');
    button.classList.add('btn-warning');

    button.addEventListener('click', () => {
        li.remove();
    })

    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
}