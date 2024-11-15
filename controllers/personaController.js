const personaModel = require("../models/personaModel");

const registrarPersona = (req, res) => {
    const persona = req.body;
    personaModel.registrarPersona(persona.nombre_apellido, persona.email, persona.ciudad,
        persona.departamento, persona.actividad, persona.horarios, persona.fechaInicio,
        (error, resultados) => {
            if(error){
                return res.status(500).json({mensaje: "Error al registrar persona"+error});
            }
            return res.status(201).json({mensaje: "Persona se registró correctamente"});
        }
    );
}

module.exports = {
    registrarPersona
}

