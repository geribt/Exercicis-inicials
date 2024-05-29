//calcular cual es el número mayor de los 3
function mayor(a,b,c){
    if (a>b){
        if(a>c){
            return "El número mayor es: "+a;
        }else if(a<c){
            return "El número mayor es: "+c;
        }
    }else if(b>c){
        return "El número mayor es: "+b;
    }else if(b<c){
        return "El número mayor es: "+c
    }
}
console.log(mayor(9,6,7));
console.log("--------------------------------------------");

//calcular la suma, resta, producto y división de ambos números
//guardar los resultados en variables y mostrar en terminal
function calcula(a,b){
    let suma = a+b;
    let resta = a-b;
    let producto = a*b;
    let division = a/b;
    return{
    suma:`${a}+${b}=${suma}`,
    resta:`${a}-${b}=${resta}`,
    producto:`${a}*${b}=${producto}`,
    division:`${a}/${b}=${division}`
    } 
}
console.log(calcula(4,5));
console.log("--------------------------------------------");

//Entrar el número de androids y iphones de la clase. Mostrar el porcentaje de androids.
function xx(android,iphone){
    let suma = android + iphone;
    let resultado = (android/suma)*100;
    return `El porcentaje de androids es ${resultado}%`;
}
console.log(xx(10,10));
console.log("--------------------------------------------");

//Comparar dos números y determinar cual es el mayor, indicando además si son iguales
function compara(a,b){
    if(a>b){
        return `El número mayor es ${a}`;
    }else if(b>a){
        return `El número mayor es ${b}`;
    }else{
        return `Ambos números son iguales`;
    }
}
console.log(compara(7,5));
console.log("--------------------------------------------");

//Pedir dos números y una operación a efectuar, que podrá ser la letra “s” para suma
//o “m” para multiplicación, mostrar el mensaje y resultado adecuado. 
//Si el código de operación no es “m” ni “s” debe mostrar un mensaje de error.
function operacion(a,b,operacio){
    let resultado;
    if(operacio === "s"){
        resultado = a+b;
        return `La suma es ${resultado}`;
    }else if(operacio === "m"){
        resultado = a*b;
        return `El producto es ${resultado}`;
    }else{
        return `Operacion desconocida`;
    }
}
console.log(operacion(6,2,"sm"));
console.log("--------------------------------------------");

//Indicar si el año es bisiesto. Para que lo sea debe cumplirse una de las siguientes condiciones:
// · Que sea divisible por 4 y NO divisible por 100.
// · Que sea divisible por 400.
function bisiesto(any){
    if (any %4 === 0 && any %4 !== 0){
        return `El año ${any} es bisiesto`;
    }else if (any %400 === 0 && any%100 !==0){
        return `El año ${any} es bisiesto`;
    }else{
        return `El año ${any} no es bisiesto`;
    }
}
console.log(bisiesto(1700));
console.log("--------------------------------------------");
