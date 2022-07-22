/*Variables globales ----------------------------------------------------------------------------------------------------------------------------*/
const dondeInyectarInfo = "";
const totalTareasIngresadas = document.getElementById("resumen");
const inputTarea = document.querySelector(".input");
const btnAgregar = document.querySelector(".btn");
const tareas = [];
const tareasFinalizadas = [];
let i = 1;

/*Evento click para agregar tarea-----------------------------------------------------------------------------------------------------------------*/
btnAgregar.addEventListener('click', ()=>{
    
    if(inputTarea.value == ""){
        alert("Debes rellenar la tarea")
    }else{
        const nuevaTarea = {id: (i++), nombre: inputTarea.value};
        tareas.push(nuevaTarea);
    }
    inputTarea.value = "";
    renderTareas();
    console.log(tareas)
})

/* Función para agregar tareas al To Do List ----------------------------------------------------------------------------------------------------*/
function renderTareas(arrayTareas=tareas, dondeInyectarInfo=totalTareasIngresadas){
    let html = "";
    for(let tarea of tareas){
        html+= `<tr>
        <td>${tarea.id}</td>
        <td>${tarea.nombre}</td>
        <td><input onclick="marcarRealizada(${tarea.id})" class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> </td>
        </tr>`;
    }
    dondeInyectarInfo.innerHTML = html
    

     //Contador del total de tareas
     const totalTareas = document.getElementById("totalTareas");
     totalTareas.innerHTML = tareas.length+tareasFinalizadas.length;

      //Contador de tareas realizadas
      const totalTareasFinalizadas = document.getElementById("totalTareasFinalizadas");
      totalTareasFinalizadas.innerHTML = tareasFinalizadas.length;  
}


/*Función para eliminar tarea realizada------------------------------------------------------------------------------------------------------------*/
const marcarRealizada = (id) => {
    //para eliminar tarea
    const index = tareas.findIndex((ele)=>ele.id == id);
    tareasFiltradas = tareas.splice(index, 1);
   

//para agregar a array nuevo
    tareasFinalizadas.push(tareasFiltradas);
    console.log(tareasFinalizadas);
    renderTareas();
    

/*Para agregar tareas a finalizadas ---------------------------------------------------------------------------------------------------------------*/ 
    const finalizadas = document.getElementById("finalizadas")
    let html = "";
    for(let tareaFinalizada of tareasFinalizadas){
        html+= `<tr>
        <td>${tareaFinalizada[0].id}</td>
        <td>${tareaFinalizada[0].nombre}</td>
        <td><strong>Completada</strong></td>
        </tr>`;
    }
 
     finalizadas.innerHTML = html;
//renderTareas(tareasFinalizadas, finalizadas)
    

/*Alerta final cuando completas todas las tareas */
     if(tareas.length+tareasFinalizadas.length === tareasFinalizadas.length && tareasFinalizadas.length != ""){
        console.log("estamos REDIIIIIII")
        alert("¡Felicitaciones! Has completado todas tus tareas")
    }else{console.log(tareas)}
} 