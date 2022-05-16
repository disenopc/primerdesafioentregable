//Ciclos e Iteraciones

//EJEMPLO usando while para registro de ingresos a una oficina. Aquellos que no tengan carnet de vacunación completo contra covid no podran ingresar.
let nombreEmpleado = prompt("Ingrese su nombre");
let ingresarDosis = parseInt(prompt("Ingrese cantidad de dosis aplicadas"));
empleado = "";
while ((nombreEmpleado != "") && (ingresarDosis >= "2")) {
    alert("Bienvenido/a " + nombreEmpleado + ".");
    nombreEmpleado = prompt("Ingrese su nombre");
    ingresarDosis = parseInt(prompt("Ingrese cantidad de dosis aplicadas"));
    empleado = empleado + nombreEmpleado;
}
alert("Usuario No Autorizado, corresponde aplicarse una dosis más para ingresar al establecimiento");
console.log("Usuario No Autorizado" + ", " + nombreEmpleado + ingresarDosis + " dosis");


//EJEMPLO usando for para registro