console.log("ingrese una cantidad");
let cantidad =parseFloat(prompt());
console.log("ingrese un porcentaje a calcular");
let  porcentaje=parseFloat(prompt());

let convertir =porcentaje/100;
let multi= cantidad * convertir;
let suma= cantidad+multi;
console.log(" El porcentaje de la cantidad requerida es:",suma);


