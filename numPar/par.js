let num = parseFloat(prompt());

switch (num%2==0) {
    case true:
        console.log("el numero:",num," es par");
        break;

    default:
        console.log("el numero no es par");
        break;
}