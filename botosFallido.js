const formularioTareas = document.querySelector('#formulario-tareas');
const inputIngresarTarea = document.querySelector('.input-ingresar-tarea');
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea');
const listaTareas = document.querySelector('.lista-tareas');
const alerta = document.querySelector('.div');

let li = document.createElement('li');


formularioTareas.addEventListener('submit', (e) => {
    e.preventDefault();
     
    if (inputIngresarTarea.value === '') {
        alerta.classList.add('alert-danger');
        // alerta.classList.add('alert');
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
    
    listaTareas.append(li);
    // if (inputIngresarTarea.value) {
    //     listaTareas.appendChild(li);  
    // }


    listaTareas.innerHTML += `
                        <div class="mg-5 d-flex justify-content-around" > 
                            <li class="">${datosIngresados}</li>
                            <button type="button" class="btn btn-danger">Eliminar</button>
                        </div>
    
    
                        `     
    console.log(listaTareas);
    // eliminarTarea(button, li)


}



// tendria que hacer una funcion para eliminar la tarea de la lista y 
// del localstorage que aun me falta hacer los del localstorage
// no se como hacerlo por ahora pero se me ocurre cuando se agregue la tarea crear el boton de eliminar 
// y ahi recien darle funcion con addEventListener 
// // al hacer click en el boton eliminar la tarea se elimina de la lista y del localstorage

// function eliminarTarea(btn, li) {
//     let button = document.querySelector('button');


//     if (listaTareas.contains(li)) {
//         btn.parentElement.remove();
//         li.remove();
        
//     }

    
// }