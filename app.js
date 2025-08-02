
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.getElementById(burger.dataset.target);

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
});


//modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('mi-modal');
    const abrirBtn = document.getElementById('abrir-modal');
    const cerrarBtns = modal.querySelectorAll('.delete, .modal-background, .button:not(.is-success)');

    abrirBtn.addEventListener('click', () => {
        modal.classList.add('is-active');
    });

    cerrarBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('is-active');
        });
    });
});


// recolectando datos del formulario
const pacientes = [];
function recolectarDatos() {
    const nombreMascota = document.getElementById('nomMascota').value;
    const nombreDueño = document.getElementById('nomOwner').value;
    const contacto = document.getElementById('pacienteContacto').value;
    const especie = document.getElementById('pacienteEspecie').value;
    const mensaje = document.getElementById('mensaje').value;
    const fecha = document.getElementById('fecha').value;
    const horario = document.getElementById('horario').value;
    const paciente = {
        nombreMascota,
        nombreDueño,
        contacto,
        especie,
        mensaje,
        fecha,
        horario
    };
    pacientes.push(paciente);
    llenarTabla();
    document.getElementById('mi-modal').classList.remove('is-active');
    console.log(pacientes);
}

// llenado de tabla
function llenarTabla() {
    document.getElementById('fila').innerHTML = ''; // Limpiar la tabla antes de llenarla
    pacientes.forEach(paciente => {
        //en el id paciente llenare con el pacientes.nomPaciente
        document.getElementById('fila').innerHTML += ` 
            <tr>
                <td>${paciente.nombreMascota} </td>
                <td> ${paciente.especie}</td>
                <td> ${paciente.nombreDueño}</td>
                <td> ${paciente.contacto}</td>
                <td> ${paciente.mensaje}</td>
                <td> ${paciente.fecha} a las ${paciente.horario}</td>
                <td>
                    <button class="button is-warning" onclick="modificarHora()">...</button>
                    <button class="button is-danger is-dark" onclick="eliminarHora()">X</button>
                </td>
            </tr>
        `
    })
}