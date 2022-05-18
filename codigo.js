//Ciclos e Iteraciones

//EJEMPLO usando while para registro de ingresos a una oficina. Aquellos que no tengan carnet de vacunación completo contra covid no podran ingresar.
let nombreEmpleado = prompt("Registro de ingreso a la oficina: Ingrese su nombre completo");
let ingresarDosis = parseInt(prompt("Ingrese cantidad de dosis aplicadas"));
let empleado = "";
while ((nombreEmpleado != "") && (ingresarDosis >= "2")) {
    alert("Bienvenido/a " + nombreEmpleado + ".");
    console.log("Ingreso permitido: " + nombreEmpleado + ", " + ingresarDosis + " dosis");
    empleado = empleado + nombreEmpleado;
    nombreEmpleado = prompt("Registro de ingreso a la oficina: Ingrese su nombre completo");
    ingresarDosis = parseInt(prompt("Ingrese cantidad de dosis aplicadas"));

}
console.log("Ingreso no permitido" + ": " + nombreEmpleado + ", " + ingresarDosis + " dosis");
alert("Ingreso no permitido, corresponde aplicarse al menos dos dosis para ingresar al establecimiento o bien realizarse un PCR con menos de 48hs");