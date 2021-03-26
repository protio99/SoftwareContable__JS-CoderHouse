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
    edad,
    direccion,
    telefono,
    estado_civil,
    salario
  ) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.tipoDocumento = tipoDocumento;
    this.documento = documento;
    this.fecha_nacimiento = fecha_nacimiento;
    this.lugar_nacimiento = lugar_nacimiento;
    this.edad = edad;
    this.direccion = direccion;
    this.telefono = telefono;
    this.estado_civil = estado_civil;
    this.salario = salario;
  }
}
let listaEmpleados = [];
//Saludo usuario ---------------------------
const nombreUsuario = prompt("Ingrese nombre");
const apellidosUsuario = prompt("Ingrese apellido");

const usuario = {
  nombre: nombreUsuario,
  apellido: apellidosUsuario,
};
//---------------------------------

//Obteniendo datos ingresados por el usuario

let inpNombre = document.getElementById("ainpNombrepp");
let inpApellido = document.getElementById("inpApellido");
let inpNumDocumento = document.getElementById("inpNumDocumento");
let inpDocumento = document.getElementsByName("documento");
let inpFechaNacimiento = document.getElementById("inpFechaNacimiento");
let inpLugarNacimiento = document.getElementById("inpLugarNacimiento");
let inpEdad = document.getElementById("inpEdad");
let inpDirResidencia = document.getElementById("inpDirResidencia");
let inpTel = document.getElementById("inpTel");
let inpSalario = document.getElementById("inpSalario");
let inpEstado_civil = document.getElementsByTagName("estado_civil");
let visualizacion = document.getElementById("visualizacionTablaPersonal");
let btnTabla = document.getElementById("btnTabla");
// Agregando eventos
//-----------------------------------------------
// Avisos de botones
let valorDocumento;
let valorEstadoCivil;
let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", respuestaBtnAgregar);

function respuestaBtnAgregar(){
  console.log("Registro agregado exitosamente");
  for (var i = 0, length = inpDocumento.length; i < length; i++) {
    if (inpDocumento[i].checked) {
      
      valorDocumento = inpDocumento[i].value;
  
      break;
    }
  }

  for (var i = 0, length = inpEstado_civil.length; i < length; i++) {
    if (inpEstado_civil[i].checked) {
      
      valorEstadoCivil = inpEstado_civil[i].value;
  
      break;
    }}
}

let btnLimpiar = document.getElementById("btnLimpiar");
btnLimpiar.addEventListener("click", respuestaBtnLimpiar);
function respuestaBtnLimpiar(){
  console.log("Se ha limpiado el formulario");
}
//-----------------------------------------------------


btnTabla.addEventListener("click", () => {
  let usu = new Empleado(inpNombre.value, inpApellido.value, valorDocumento, inpDocumento.value,  inpFechaNacimiento.value, inpLugarNacimiento.value, inpEdad.value, inpDirResidencia.value, inpTel.value, valorEstadoCivil, inpSalario.value );
  listaEmpleados.push(usu);
  console.log(listaEmpleados);
});

btnAgregar.addEventListener("click", () => {
  let tabla = "<table border=1>";

  tabla =
    tabla +
    `<tr bgcolor=grey><th>Nombre</th><th>Apellido</th><th>Tipo documento</th><th>Num. documento</th><th>Fecha nacimiento</th><th>Lugar nacimiento</th><th>Edad</th><th>Dir. Residencia</th><th>Telefono</th><th>Estado civil</th><th>Salario</th></tr>`;

  for (const elem of listaEmpleados) {
    tabla =
      tabla +
      "<tr><td>"+ elem.nombres + "</td><td>" + elem.apellidos + "</td><td>" + elem.tipoDocumento + "</td><td>" + elem.documento + "</td><td>" + elem.fecha_nacimiento + "</td><td>" + elem.lugar_nacimiento + "</td><td>" + elem.edad + "</td><td>" + elem.direccion + "</td><td>" + elem.telefono + "</td><td>" + elem.estado + "</td><td>" + elem.fecha_telefono + "</td></tr>";
  }

  tabla = tabla + "</table>";

  visualizacion.innerHTML = tabla;
});





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
