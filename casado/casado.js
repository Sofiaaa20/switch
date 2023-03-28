let salario = parseFloat(prompt("ingrese el salario"));
let categoria = prompt("ingrese la categoria");

switch (categoria) {
    case "Categoria 1":
        console.log("su aumento es de", salario+salario*0.15);
        break;

    case "Categoria 1":
        console.log("su aumento es de", salario+salario*0.25);
        break;

    case "Categoria 1":
        console.log("su aumento es de", salario+salario*0.45);
        break;
    
    default:
    console.log("Ingrese una categoria valida");
    
         break;
}
