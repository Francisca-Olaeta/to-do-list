/*Variables globales ----------------------------------------------------------------------------------------------------------------------------*/
const totalTareasIngresadas = document.getElementById("resumen");
const inputTarea = document.querySelector(".input");
const btnAgregar = document.querySelector(".btn");
const tareas = [];
let i = 1;

/*Evento click para agregar tarea-----------------------------------------------------------------------------------------------------------------*/
btnAgregar.addEventListener('click', ()=>{
    
    if(inputTarea.value == ""){
        alert("Debes rellenar la tarea")
    }else{
        const nuevaTarea = {id: (i++), nombre: inputTarea.value, estado: false};
        tareas.push(nuevaTarea);
    }
    inputTarea.value = "";
    renderTareas();
    console.log(tareas)
})


/* Función para agregar tareas al To Do List ----------------------------------------------------------------------------------------------------*/
function renderTareas(){
    let contador = 0;
    let html = "";
    for(let tarea of tareas){
        html+= `<tr>
        <td ${tarea.estado ? 'style=opacity:.1' : ''}>${tarea.id} </td>
        <td ${tarea.estado ? 'style=opacity:.1' : ''}>${tarea.nombre} </td>
        <td ${tarea.estado ? 'style=opacity:.1' : ''}><input onclick = "cambiarEstado(${tarea.id})" ${tarea.estado ? 'checked' : ''}class="form-check-input" type="checkbox" id="flexCheckDefault"> </td>
        <td><button ${tarea.estado ? '' : 'disabled'} onclick="eliminarTarea(${tarea.id})" type="button" class="btn btn-danger">x</button></td>
        </tr>`;
        if(tarea.estado){contador++}
    }
    totalTareasIngresadas.innerHTML = html
    
    //Contador del total de tareas
    const totalTareas = document.getElementById("totalTareas");
    totalTareas.innerHTML = tareas.length;
     //Contador de tareas finalizadas
    const totalTareasFinalizadas = document.getElementById("totalTareasFinalizadas");
    totalTareasFinalizadas.innerHTML = contador; 

    /*Alerta de felicitaciones cuando has terminado todas las tareas */
     if(tareas.length === contador && tareas.length != 0 && tareas.length != ""){
        console.log("estamos REDIIIIIII")
        alert("¡Felicitaciones! Has completado todas tus tareas")
     }
}

/*Para cambiar estado ---------------------------------------------------------------------------------------------------------------*/ 
const cambiarEstado = (id) => {
    tareas.map((ele)=> {
        if(ele.id == id) ele.estado = !ele.estado
    })
    renderTareas()
}

/*Función para eliminar tarea realizada------------------------------------------------------------------------------------------------------------*/
const eliminarTarea = (id) => {
    //para eliminar tarea
    let index = tareas.findIndex((ele)=>ele.id == id);
    tareas.splice(index, 1);
    renderTareas()
} 


