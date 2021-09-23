const fs = require('fs');
const db = require('./tareas.json');

const leerTareas = () => {
db.forEach(function(item){
    return console.log(item)})
}

const guardarTarea = (titulo, estado) => {
    const condicion = {
        titulo: titulo,
        estado: estado
    }
    const dataBase = db
    dataBase.push(condicion)
    const tareasJSON = JSON.stringify(db, null, 4)
    fs.writeFileSync('./tareas.json', tareasJSON)
}

const filtrarPorEstado = (estado) => {
    let tareas = JSON.parse(fs.readFileSync('./tareas.json'))
    return tareas.filter(item => item.tareas == estado)
}

module.exports = {leerTareas, guardarTarea, filtrarPorEstado}
