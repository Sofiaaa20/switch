let num = parseFloat(prompt());

let proceso = num%num==0;



if (num<=15){
    switch (proceso) {
        case true:
            console.log("el numero es primo");
            
            break;
    
        default:
            console.log("el numero no es primo");
    
            break;
    }
}
else{
    console.log("Ingrese un numero valido");
}
