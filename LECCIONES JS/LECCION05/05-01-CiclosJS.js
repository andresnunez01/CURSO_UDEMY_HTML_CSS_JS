// let contador = 0;

// while( contador < 3){
//     console.log(contador)
//     contador++
// }
// console.log("Fin del ciclo while")





// let condicion = 1; 

// do {
//     console.log( condicion );
//     condicion++;
// } while (condicion < 8);
// console.log("Fin ciclo do while")




// for(let i=0; i<6; i++){
// console.log(i)
// }

// console.log("Fin ciclo for")





for(let i=1; i<8;i++){
    console.log("el numero es " + i)
    if(i==5){
        console.log("se rompe la condicion en el numero 5")
        break;
    }
}


inicio: //etiqueta
for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue inicio;//ir a la siguiente iteracion
    }
    console.log(contador);
}