const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "biofauna"
});

const registrarPersona = (nombre_apellido, email, ciudad, departamento, actividad, 
    horarios, fechaInicio, callback) => connection.query(
        `INSERT INTO personas (nombre_apellido, email, ciudad, departamento, actividad, 
    horarios, fechaInicio) VALUES ('${nombre_apellido}', '${email}', '${ciudad}',
    '${departamento}', '${actividad}', '${horarios}', '${fechaInicio}')`,
    (err, results) => {
        if(err){
            callback(err, null)
        } else{
            callback(null, results)
        }
    }
);

module.exports = {
    registrarPersona
}

connection.connect((err) => {
    if(err) throw err;
    console.log('Conectado a la base de datos MySQL');
})
