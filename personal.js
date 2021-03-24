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
const nombreUsuario = prompt("Ingrese nombre");
const apellidosUsuario = prompt("Ingrese apellido");

const usuario = {
  nombre: nombreUsuario,
  apellido: apellidosUsuario,
};

localStorage.setItem("datos_usuario", JSON.stringify(usuario));

const nombreDOM = document.getElementById('user_name');
nombreDOM.innerText = usuario.nombre + ' ' + usuario.apellido;

let numeroEmpleados = parseInt(
  prompt("Ingrese la cantidad de empleados que desea crear: ")
);
let listaEmpleados = [];

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

console.log(listaEmpleados);
