let listadoDeTareas = require('./funcionesDeTareas.js');

let accion = process.argv[2];
let nuevaTarea = {
    titulo: process.argv[3],
    estado: 'Pendiente'
}
let EstadoPorFiltrar = process.argv[3];

switch(accion) {
    case 'listar':
        listadoDeTareas.leerTareas()
        break; 

    case 'crear':
        listadoDeTareas.guardarTarea(nuevaTarea)
        console.log('Tarea nueva agregada.')    
        break;

     case 'filtrar':
         console.log(listadoDeTareas.filtrarPorEstado(EstadoPorFiltrar))   
        break;

    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        break;

    default:
        console.log('No entiendo qué quieres hacer.');
        break;
}
