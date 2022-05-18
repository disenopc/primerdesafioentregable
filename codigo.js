//Ciclos e Iteraciones

//EJEMPLO usando while para registro de ingresos a una oficina. Aquellos que no tengan carnet de vacunación completo contra covid no podran ingresar.
let nombreEmpleado = prompt("Registro de ingreso a la oficina: Ingrese su nombre completo");
let ingresarDosis = parseInt(prompt("Ingrese cantidad de dosis aplicadas"));
empleado = "";
while ((nombreEmpleado != "") && (ingresarDosis >= "2")) {
    alert("Bienvenido/a " + nombreEmpleado + ".");
    console.log("Nombre del Empleado: " + nombreEmpleado + ", " + ingresarDosis + "dosis")
    nombreEmpleado = prompt("Registro de ingreso a la oficina: Ingrese su nombre completo");
    ingresarDosis = parseInt(prompt("Ingrese cantidad de dosis aplicadas"));
    empleado = empleado + nombreEmpleado;
}
console.log("Ingreso no permitido" + ": " + nombreEmpleado + ", " + ingresarDosis + " dosis");
alert("Usuario No Autorizado, corresponde aplicarse una dosis más para ingresar al establecimiento");