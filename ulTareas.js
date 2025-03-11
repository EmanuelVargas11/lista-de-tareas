
export function ulForm(li, datos) {
    const ulTareas = document.querySelector('.ul-tareas');
    ulTareas.append(li);
    li.innerText = datos
    
}