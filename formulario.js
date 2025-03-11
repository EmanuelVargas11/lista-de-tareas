import { ulForm } from './ulTareas.js';

export function agregarTarea(formulario, ulTareas, div) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        const datos = Object.fromEntries( new FormData(event.target))
        // console.log('datos:', datos);
        const datoIngresado = datos.tareaIngresada

        let li = document.createElement('li');

        if (datoIngresado == '') {
            div.innerText = 'Debes ingresar una tarea';
            div.classList.add('alert');
            div.classList.add('alert-danger');

        }else{
            div.innerText = '';
            div.classList.remove('alert');
            div.classList.remove('alert-danger');
           ulForm(li, datoIngresado)

        }
        // console.log(datoIngresado);
        const localS = JSON.stringify(datos);
        console.log(localS);
        
        
       
        formulario.reset();
    })
}
