/*Dado un número que indica el precio de un producto y otro número que indica el porcentaje de
 descuento, calcular el precio final después del descuento.*/

let precio = parseInt(prompt("Ingrese el precio del producto"));
let descuento = parseInt(prompt("Ingrese el descuento"));

let resultadoDescuento = descuento/100;
let resultado = precio * resultadoDescuento;
let final = precio-resultado;

console.log("El precio final es de: ",final);

