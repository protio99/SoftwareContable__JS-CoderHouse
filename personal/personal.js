//Agregar empleados

class Empleado {
  //Clase para crear empleado
  constructor(
    nombres,
    apellidos,
    tipoDocumento,
    documento,
    fecha_nacimiento,
    lugar_nacimiento,
    direccion,
    telefono,
    salario
  ) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.tipoDocumento = tipoDocumento;
    this.documento = documento;
    this.fecha_nacimiento = fecha_nacimiento;
    this.lugar_nacimiento = lugar_nacimiento;
    this.direccion = direccion;
    this.telefono = telefono;
    this.salario = salario;
  }
}

let listaEmpleados = [];


//-------------------------------

//Obteniendo datos ingresados por el usuario

let inpNombre = document.getElementById("inpNombre");
let inpApellido = document.getElementById("inpApellido");
let tipoDocumento = document.getElementById("tipoDocumento");
let inpNumDocumento = document.getElementById("inpNumDocumento");
let inpFechaNacimiento = document.getElementById("inpFechaNacimiento");
let inpLugarNacimiento = document.getElementById("inpLugarNacimiento");
let inpDirResidencia = document.getElementById("inpDirResidencia");
let inpTel = document.getElementById("inpTel");
let inpSalario = document.getElementById("inpSalario");
let visualizacion = document.getElementById("visualizacionTablaPersonal");
cargarEmpleados();
// Agregando eventos
//-----------------------------------------------
// Acciones botones, boton agregar

let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", respuestaBtnAgregar);

function respuestaBtnAgregar() {
  console.log("Registro agregado exitosamente");
  let usu = new Empleado(
    inpNombre.value,
    inpApellido.value,
    tipoDocumento.value,
    inpNumDocumento.value,
    inpFechaNacimiento.value,
    inpLugarNacimiento.value,
    inpDirResidencia.value,
    inpTel.value,
    inpSalario.value
  );
  listaEmpleados.push(usu);
  mostrarDatos();
  mostrarAlerta();
  esconderAlerta();
  guardaEmpleadosLocalStorage();
  
  console.log(listaEmpleados);
}
// -----Almacenando datos ingresados por el usuario en el local storage------

function guardaEmpleadosLocalStorage(){
  let listaEmpleadosEnString = JSON.stringify(listaEmpleados);
  localStorage.setItem('listaEmpleados', listaEmpleadosEnString);
}



function cargarEmpleados(){
  let listaStorage = JSON.parse(localStorage.getItem('listaEmpleados'));
  console.log(listaStorage);
  if (listaStorage != null) {
    listaEmpleados = listaStorage
    
    mostrarDatos();
  }
}

// Alerta ventana personal agregado a la tabla

function mostrarAlerta(){
  let esconder = document.getElementById('alerta-agregar-personal');
  esconder.classList.remove('alerta--esconder');
}

// Esconder alerta personal agregado a la tabla

function esconderAlerta(){
  let btnCerrar = document.getElementById('alerta__btn-cerrar');
  btnCerrar.addEventListener('click', function(){
    let esconder = document.getElementById('alerta-agregar-personal');
    esconder.classList.add('alerta--esconder');
    
  })

}
// Mensaje consola de boton limpiar

let btnLimpiar = document.getElementById("btnLimpiar");
btnLimpiar.addEventListener("click", respuestaBtnLimpiar);
function respuestaBtnLimpiar() {
  console.log("Se ha limpiado el formulario");
}

//------Agregando tabla-----------------------------------------------

function mostrarDatos() {
  let tabla = "<table border=1 class='tabla-empleado'>";

  tabla =
    tabla +
    `<tr bgcolor=grey>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Tipo documento</th>
      <th>Num. documento</th>
      <th>Fecha nacimiento</th>
      <th>Lugar nacimiento</th>
      <th>Dir. Residencia</th>
      <th>Telefono</th>
      <th>Salario</th>
    </tr>`;

  for (const empleado of listaEmpleados) {
    tabla =
      tabla +
      "<tr><td>" +
      empleado.nombres +
      "</td><td>" +
      empleado.apellidos +
      "</td><td>" +
      empleado.tipoDocumento +
      "</td><td>" +
      empleado.documento +
      "</td><td>" +
      empleado.fecha_nacimiento +
      "</td><td>" +
      empleado.lugar_nacimiento +
      "</td><td>" +
      empleado.direccion +
      "</td><td>" +
      empleado.telefono +
      "</td><td>" +
      empleado.salario +
      "</td></tr>";
  }

  tabla = tabla + "</table>";

  visualizacion.innerHTML = tabla;
}

/* localStorage.setItem("datos_usuario", JSON.stringify(usuario));

const nombreDOM = document.getElementById('user_name');
nombreDOM.innerText = usuario.nombre + ' ' + usuario.apellido;
 */

// let numeroEmpleados = parseInt(
//   prompt("Ingrese la cantidad de empleados que desea crear: ")
//);
/* 

function pedirDatosEmpleado() {
  for (let i = 1; i <= numeroEmpleados; i++) {
    alert("Ingrese los datos del empleado " + i + " :");
    let nombres = prompt("Ingrese nombres:");
    let apellidos = prompt("Ingrese apellidos:");
    let tipoDocumento = prompt("Ingrese tipo de documento:");
    let documento = parseInt(prompt("Ingrese documento de identidad:"));
    let fecha_nacimiento = parseInt(prompt("Ingrese fecha de nacimiento:"));
    let lugar_nacimiento = prompt("Ingrese lugar de nacimiento:");
    let edad = parseInt(prompt("Ingrese edad:"));
    let direccion = prompt("Ingrese dirección de residencia:");
    let telefono = parseInt(
      prompt("Ingrese numero de telefono residencia o movil:")
    );
    let estado_civil = prompt("Ingrese estado civil:");
    let salario = parseInt(prompt("Ingrese salario:"));
    listaEmpleados[i] = new Empleado(
      nombres,
      apellidos,
      tipoDocumento,
      documento,
      fecha_nacimiento,
      lugar_nacimiento,
      edad,
      direccion,
      telefono,
      estado_civil,
      salario
    );
  }
}
if (numeroEmpleados > 0) {
  pedirDatosEmpleado();
  alert("Se agregaron " + numeroEmpleados + " nuevos.");
  alert("Revise los empleados agregados en la consola: ");
} else {
  alert("Regresa cuando quiera ingresar nuevos empleados");
}

console.log(listaEmpleados); */
