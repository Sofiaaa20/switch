
/*
Dado un string que indica la figura geométrica y dos números, calcular el área correspondiente.
 Las figuras pueden ser "triangulo", "rectangulo" o "circulo".
*/

let figura = prompt("ingrese la figura");
let base = parseInt(prompt("Ingresa un numero"));
let alt = parseInt(prompt("ingresa un numero"));

switch (figura) {
    case "triangulo":
        console.log("su area es de", ((base * alt)/ 2));
        break;
    case "cuadrado":
        console.log("su area es de", base * alt );
        break;
    case "rectangulo":
        console.log("su area es de", base * alt );
        break;
    default:
        break;
}