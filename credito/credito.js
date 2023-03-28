console.log("ingrese el valor del producto");
let precio = parseFloat(prompt());
console.log("ingrese a cuantos meses lo pagará");
let mes = parseInt(prompt());

let multi= precio*0.25;
let suma= precio +multi;
let resultado=suma/mes;

console.log("Usted pagará",suma,"en",mes,"meses y en cada mes pagará una cuota de",resultado);
