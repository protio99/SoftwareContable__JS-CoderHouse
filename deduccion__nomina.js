
//Deducción de nomina - Calculos en base a la reglamentacion Colombiana

let salario = prompt("Por favor ingrese su salario en COP");


function deduccion__salud (sueldo){
    deduccion = sueldo*0.04 ;
    deduccion__empresa = sueldo*0.125;
    return {deduccion, deduccion__empresa};
    
}

function deduccion__pension (sueldo){
    deduccion = sueldo*0.04 ;
    deduccion__empresa = sueldo*0.12;
    return {deduccion, deduccion__empresa};
    
}

function prestaciones__sociales (sueldo){
    cesantias = sueldo*0.01 ;
    prima = sueldo*0.08;
    vacaciones = sueldo*0.04;
    return {cesantias, prima, vacaciones};
}


let salud = deduccion__salud(salario);
let pension = deduccion__pension(salario);
let prestaciones = prestaciones__sociales(salario);

console.log("Su deducción de sueldo en salud es: " + salud.deduccion + " y la empresa aporta a su salud: " + salud.deduccion__empresa);

console.log("Su deducción de sueldo en pension es: " + pension.deduccion + " y la empresa aporta a su pensión: " + pension.deduccion__empresa);

console.log("Su prestaciones sociales de este mes son: " + prestaciones.cesantias + " en cesantias," + prestaciones.prima + " en prima, y "+ prestaciones.vacaciones + " en vacaciones");
