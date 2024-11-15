
function servicioRegistraPersonas() {
    const guardar = document.getElementById("guardar");
    const registarPersona = () => {
        const form = document.getElementById("formularioPersonas");

        if(form.checkValidity()){
            const nombre_apellido = document.getElementById("nombre_apellido").value;
            const email = document.getElementById("email").value;
            const ciudad = document.getElementById("ciudad").value;
            const departamento = document.getElementById("departamento").value;
            const actividad = document.getElementById("actividad").value;
            const horarios = document.getElementById("horarios").value;
            const fechaInicio = document.getElementById("fechaInicio").value;

            //enviar datos al servidor

            fetch("http://localhost:3000/persona/registro",
                {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nombre_apellido,
                        email,
                        ciudad,
                        departamento,
                        actividad,
                        horarios,
                        fechaInicio
                    })
                }
            ).then(response => response.json())
            .then(data => {
                console.log(data.mensaje);
                alert(data.mensaje);
                form.reset();
            });
        } else {
            alert("Formulario invalido");
            form.reportValidity();
        }
    };
    
    if(guardar){
        guardar.addEventListener("click", (event) => {
            event.preventDefault(); 
            registarPersona();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    servicioRegistraPersonas();

});