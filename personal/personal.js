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
    this.id = Date.now();
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

let listaEmpleadosOriginal = [];

//-------------------------------

//Obteniendo datos ingresados por el usuario

let inpNombre = $("#inpNombre");
let inpApellido = $("#inpApellido");
let tipoDocumento = $("#tipoDocumento");
let inpNumDocumento = $("#inpNumDocumento");
let inpFechaNacimiento = $("#inpFechaNacimiento");
let inpLugarNacimiento = $("#inpLugarNacimiento");
let inpDirResidencia = $("#inpDirResidencia");
let inpTel = $("#inpTel");
let inpSalario = $("#inpSalario");
let visualizacion = $("#visualizacionTablaPersonal");
cargarEmpleados();
// Agregando eventos
//-----------------------------------------------
// Acciones botones, boton agregar

let btnAgregar = $("#btnAgregar");
btnAgregar.on("click", respuestaBtnAgregar);

function respuestaBtnAgregar() {
  let usu = new Empleado(
    inpNombre.val(),
    inpApellido.val(),
    tipoDocumento.val(),
    inpNumDocumento.val(),
    inpFechaNacimiento.val(),
    inpLugarNacimiento.val(),
    inpDirResidencia.val(),
    inpTel.val(),
    inpSalario.val()
  );
  let validacion = validacionFormulario(usu);
  if (validacion) {
    listaEmpleadosOriginal.push(usu);
    mostrarDatos(listaEmpleadosOriginal);
    mostrarAlerta();
    actualizarListaEmpleadosLocalStorage();
  }
}
//----Validacion formulario

function validacionFormulario(usu) {
  const claves = Object.keys(usu);
  for (let i = 0; i < claves.length; i++) {
    const clave = claves[i];
    if (usu[clave] == "") {
      alert("Campo vacio, debe agregar el dato");
      return false;
    }
  }
  return true;
}

// -----Almacenando datos ingresados por el usuario en el local storage------

function actualizarListaEmpleadosLocalStorage() {
  let listaEmpleadosEnString = JSON.stringify(listaEmpleadosOriginal);
  localStorage.setItem("listaEmpleados", listaEmpleadosEnString);
}

function cargarEmpleados() {
  let listaStorage = JSON.parse(localStorage.getItem("listaEmpleados"));
  if (listaStorage != null) {
    listaEmpleadosOriginal = listaStorage;
    mostrarDatos(listaEmpleadosOriginal);
  }
}

// Alerta ventana personal agregado a la tabla

function mostrarAlerta() {
  $("#alerta-agregar-personal").show().animate({
    opacity: "1",
  });
}

// Esconder alerta personal agregado a la tabla

let btnCerrar = $("#alerta__btn-cerrar");
btnCerrar.on("click", function () {
  $("#alerta-agregar-personal").animate(
    {
      opacity: "0",
      top: "0",
    },
    () => {
      $("#alerta-agregar-personal").hide();
    }
  );
});
$("#alerta-agregar-personal").hide();

// Mensaje consola de boton limpiar

let btnLimpiar = $("#btnLimpiar");
btnLimpiar.on("click", respuestaBtnLimpiar);
function respuestaBtnLimpiar() {
  console.log("Se ha limpiado el formulario");
}

//------Agregando tabla-----------------------------------------------

function mostrarDatos(listaEmpleados) {
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
      <th>Eliminar</th>

    </tr>`;

  for (let i = 0; i < listaEmpleados.length; i++) {
    const empleado = listaEmpleados[i];

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
      "</td><td><i id='eliminar_" +
      empleado.id +
      "' class='fas fa-trash'></i></td></tr>";
  }

  tabla = tabla + "</table>";

  visualizacion.html(tabla);

  // este ciclo ayuda a asignar el evento eliminar con un click a los elementos de la tabla

  for (let i = 0; i < listaEmpleados.length; i++) {
    const empleado = listaEmpleados[i];

    $("#eliminar_" + empleado.id).on("click", function () {
      eliminarEmpleadoTabla(empleado.id);
    });
  }
}

function eliminarEmpleadoTabla(i) {
  listaEmpleadosOriginal.splice(i, 1);
  actualizarListaEmpleadosLocalStorage();
  mostrarDatos(listaEmpleadosOriginal);
}

// -----------Buscar de la tabla ----------------

function parametroBusqueda(elemento) {
  let valIngresado = $("#inpBuscar").val().toLowerCase();
  let buscarPor = $("#buscarPor").val();
  if (buscarPor == "vacio") {
    return elemento["nombres"].toLowerCase().includes(valIngresado);
  } else {
    return elemento[buscarPor].toLowerCase().includes(valIngresado);
  }
}

function muestraResultadoBusqueda() {
  let resultadoBusqueda = listaEmpleadosOriginal.filter(parametroBusqueda);
  console.log(resultadoBusqueda);
  mostrarDatos(resultadoBusqueda);
}

function leeInputUsuario() {
  $("#inpBuscar").on("keyup", function () {
    muestraResultadoBusqueda();
  });
}
leeInputUsuario();

if (listaEmpleadosOriginal.length !== 0) {
  $.ajax({
    url: "https://randomuser.me/api/?results=5",
    dataType: "json",
    success: function (data) {
      for (let i = 0; i < 5; i++) {
        const elem = data.results[i];
        const usu = new Empleado(
          elem.name.first,
          elem.name.last,
          "CC",
          elem.id.value,
          elem.dob.date,
          elem.nat,
          elem.location.street.name,
          elem.phone,
          Math.floor(Math.random() * 600000) + 10000
        );
        console.log(usu);
      }
    },
  });
}
