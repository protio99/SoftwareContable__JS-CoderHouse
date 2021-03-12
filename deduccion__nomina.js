
//Deducción de nomina - Calculos en base a la reglamentacion Colombiana
// Creacion de empleados nuevos

class Empleado{ //Clase para crear empleado
    constructor(nombres, apellidos,edad,salario){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edad = edad;
        this.salario = salario;
    }
    deduccionSalud(){
        this.salario = this.salario*0.04;
    }
    deduccionPension(){
        this.salario = this.salario*0.04;
    }
    static prestacionesSociales(){
        let cesantias = this.salario*0.01 ;
        let prima = this.salario*0.08;
        let vacaciones = this.salario*0.04; 
    }    
}

let numeroEmpleados = parseInt(prompt("Ingrese la cantidad de empleados que desea crear: "));
let listaEmpleados = {};


function pedirDatosEmpleado(){
    for (let i = 1; i <= numeroEmpleados;i++){
        alert("Ingrese los datos del empleado " + i + " :")
        let nombres = prompt("Ingrese nombres:");
        let apellidos = prompt("Ingrese apellidos:");
        let edad = parseInt(prompt("Ingrese edad:"));
        let salario = parseInt(prompt("Ingrese salario:")); 
        listaEmpleados[i] = new Empleado(nombres,apellidos,edad,salario); 
    }
    
}
if (numeroEmpleados > 0){
    pedirDatosEmpleado();
    alert("Revise los empleados agregados en la consola: ");
} else{
    alert("Regresa cuando quieras ingresar nuevos empleados");
}

console.log(listaEmpleados);

/* function prestaciones__sociales (sueldo){
    cesantias = sueldo*0.01 ;
    prima = sueldo*0.08;
    vacaciones = sueldo*0.04;
    return {cesantias, prima, vacaciones};
}
 */


/* function deduccion__salud (sueldo){
    deduccion = sueldo*0.04 ;
    deduccion__empresa = sueldo*0.125;
    return {deduccion, deduccion__empresa};
    
}

function deduccion__pension (sueldo){
    deduccion = sueldo*0.04 ;
    deduccion__empresa = sueldo*0.12;
    return {deduccion, deduccion__empresa};
    
}
 */


/* let salud = deduccion__salud(salario);
let pension = deduccion__pension(salario);
let prestaciones = prestaciones__sociales(salario);

console.log("Su deducción de sueldo en salud es: " + salud.deduccion + " y la empresa aporta a su salud: " + salud.deduccion__empresa);

console.log("Su deducción de sueldo en pension es: " + pension.deduccion + " y la empresa aporta a su pensión: " + pension.deduccion__empresa);

console.log("Su prestaciones sociales de este mes son: " + prestaciones.cesantias + " en cesantias," + prestaciones.prima + " en prima, y "+ prestaciones.vacaciones + " en vacaciones"); */

