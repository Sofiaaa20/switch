
let nombre=prompt("Ingresa el nombre");
let estrato= parseInt(prompt("Ingresa el estrato"));
let años= parseInt(prompt("Ingresa los años que ha estado en la entidad"));
let mes= prompt("ingresa el mes");



if (estrato<4) {
    if(años<=8){
        console.log(nombre,"tiene derecho a subsidio de vivienda:");
    }
        } else
            {
            console.log("Usted no recibirá el subsidio de vivienda");

    }
    
switch (mes) {
 
    case "1":
            console.log("Enero");
        break;
        case "2":
            console.log("Febrero");
            break;
        case "3": 
            console.log("Marzo");
            break;
        case "4": 
            console.log("Abril");
            break;
        case "5": 
            console.log("Mayo");
            break;
        case "6": 
            console.log("Junio");
            break;
        case "7": 
            console.log("Julio");
            break;
        case "8": 
            console.log("Agosto");
            break;
        case "9": 
            console.log("Septiembre");
            break;
        case "10":
            console.log("Octubre");
            break;
        case "11": 
            console.log("Noviembre");
            break;
        case "12": 
            console.log("Diciembre");
            break;
    default:
        console.log("Ingrese un numero valido");
        break;
}





    

