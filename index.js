const {registrar,leer} = require('./operaciones.js')

const arguments = process.argv.slice(2);

const selectOperacion = (operacion) => {
    if (operacion === "registrar") {
        registrar(
            arguments[1], 
            arguments[2], 
            arguments[3], 
            arguments[4], 
            arguments[5])
    }
    else if (operacion === "leer") {
        readFile()
    }
    else {
        console.log("necesitas registrar al paciente")
    }
}
selectOperacion(arguments[0]);