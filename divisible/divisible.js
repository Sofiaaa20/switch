let numero = parseFloat(prompt());

let proceso = numero%5==0;
switch (proceso) {
    case true:
        console.log("el numero es divisible por 5");
        break;

    default:
        console.log("el numero no es divisible por 5");

        break;
}