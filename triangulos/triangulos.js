let angulo1 = parseFloat(prompt());
let angulo2 = parseFloat(prompt());
let angulo3 = parseFloat(prompt());

let triangulo = angulo1+angulo2+angulo3 == 180;

switch (triangulo) {
    case true:
        console.log("Los angulos coinciden con los de un triangulo");
        break;

    default:
        console.log("Los angulos no coinciden con los de un triangulo, ingrese angulos validos");

        break;
}

