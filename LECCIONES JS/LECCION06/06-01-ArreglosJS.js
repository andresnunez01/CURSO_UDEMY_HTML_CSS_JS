//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}


autos[0] = 'BOCHO'

console.log(autos[0]);

autos.push('VW');
console.log(autos);


console.log(autos.length);

autos[4] = 'toyota'

console.log(autos)

console.log(autos.length);



console.log(typeof autos);
console.log(Array.isArray(autos));
console.log(autos instanceof(Array))