let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z );

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log( "Resultado de la mult:" + z);

z = a / b;
console.log( "Resultado de la division:" + z);

z = a % b;//residuo de la division
console.log( "Resultado de operacion modulo (residuo):" + z);

z = a ** b;
console.log( "Resultado de operador exponente:" + z);


//Incremento
//Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

//Post-incremento (el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);

//Decremento
//Predecremento
z = --a;
console.log(a);
console.log(z);

//Postdecremento
z = b--;
console.log(b);
console.log(z);

a = 3, b = 2, c = 1, d = 4;

z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log( z ); 

z = (c + a) * b / c;
console.log(z);



a = 1;

a += 3; // a = a + 3
console.log(a);

a -= 2; // a = a - 2
console.log(a);

/*
*=
/=
%=
**=
*/




a = 3, b = 2, c = "3";

z = a == c; // se revisa el valor sin importar el tipo
console.log(z);

z = a === c;// revisa los valores pero tambien los tipos
console.log(z);


a = 3, b = 2, c = 3;

z = a != c; // se revisa el valor sin importar el tipo
console.log(z);

z = a !== c;// revisa los valores pero tambien los tipos
console.log(z);



a = 3, b = 2, c = "3";

z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);

let h = 10;
if(h % 2 == 0) {
console.log(' es numero par ')
}else{
    console.log('numero impar')
}


let edad = 20;
let adulto = 18;

if(edad >= adulto){
    console.log('esta persona es un adulto')
}else{
    console.log('esta persona es menor de edad')
}


a = 15;
let valMin = 0, valMax = 10;

if( a >= valMin && a <= valMax ){
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de rango");
}



//Ejemplo AND (&&), regresa true solo si ambos operandos son true
a = 15;
valMin = 0, valMax = 10;

if( a >= valMin && a <= valMax ){
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de rango");
}

//Ejemplo OR (||), regresa true si cualquier operando es true
let vacaciones = false, diaDescanso = true;
if( vacaciones || diaDescanso ){
    console.log("Padre puede asistir al juego del hijo");
}
else{
    console.log("El padre está ocupado");
}




let resultado = (1>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 110;
resultado = ( numero % 2 == 0 ) ? "Número par" : "Número impar"; 
console.log( resultado );



let miNumero = "18";
 //console.log(typeof miNumero);
 
edad = Number(miNumero);
console.log(edad)

 //console.log(typeof edad);
 if(edad >= 18){
	 console.log("Puede votar");
 }
 else{
	 console.log("Muy joven para votar");
 }
 
resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";
 console.log( resultado );
 


miNumero = "18x";
 //console.log(typeof miNumero);
 
edad = Number(miNumero);
console.log(edad)

 //console.log(typeof edad);
 if(isNaN(edad)){
	 console.log("No es un numero");
 }
 else{
	resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";
    console.log( resultado );
 }
 


x = 5;
y = 10;
z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);

resultado = 4 + 5 * 6 / 3;// (4 + ((5*6)/3))
console.log(resultado);

resultado = (4 + 5) * 6 / 3;
console.log(resultado);
