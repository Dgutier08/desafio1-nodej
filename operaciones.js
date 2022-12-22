const fs = require ('fs');

const registrar = (nombre, edad, animal, color, enfermedad) =>{
    const citas = JSON.parse (fs.readFileSync("citas.json", "utf8"))
    citas.push({nombre,edad,animal,color, enfermedad})
    fs.writeFileSync("citas.Json", JSON.stringify(citas))
}

const leer = () =>{
    const citas = JSON.parse(fs.readFileSync("citas.json","utf8"))
    console.log(citas)
}

module.exports={registrar,leer}