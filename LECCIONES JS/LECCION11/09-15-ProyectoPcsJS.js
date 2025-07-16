"use strict"

class PerifericoTipoEntrada{

    constructor(tipoEntrada, marca){

        this._tipoEntrada = tipoEntrada;
        this._marca = marca;

    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }


    toString(){
        return `Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`
    }
}

class Raton extends PerifericoTipoEntrada{
    
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca)
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, ${super.toString()}]`
    }
}




class Teclado extends PerifericoTipoEntrada{

    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){

        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return  `Teclado: [idTeclado: ${this._idTeclado}, ${super.toString()}]`
    }
}


class Monitor{

    static contadorMonitores = 0;

    constructor(marca, tamano){

        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;

    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamano(){
        return this._tamano;
    }

    set tamano(tamano){
        this._tamano = tamano;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamano: ${this._tamano}]`
    }


}



class Computadora{

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){

        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;

    }

    get idComputadora(){
        return this._idComputadora
    }

    toString(){
        return `Computadora: [ID Computadora: ${this._idComputadora}, Nombre: ${this._nombre}, ${this._monitor}, \n${this._raton}, \n${this._teclado}]`
    }
}




class Orden{

    static contadorOrdenes = 0;

    constructor(){

        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];

    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){

        this._computadoras.push(computadora)
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden += computadora;
        }

        console.log(`Orden: ${this._idOrden} [Computadoras: ${computadorasOrden}]`);
    }
}

let raton1 = new Raton('USB', 'Logitech');
console.log(raton1.toString());
let raton2 = new Raton('TIPO C', 'ACER');
console.log(raton2.toString());

let teclado1 = new Teclado('Bluetooth', 'RAZER');
console.log(teclado1.toString());
let teclado2 = new Teclado('Bluetooth', 'DELL');
console.log(teclado2.toString());


console.log(teclado1.marca)


let monitor1 = new Monitor('ASUS', '24')
console.log(monitor1.toString())
let monitor2 = new Monitor('LG', '27')
console.log(monitor2.toString())


let computadora1 = new Computadora('ASUS', monitor1, teclado1, raton1 );
console.log(computadora1.toString())

let computadora2 = new Computadora('ASUS', monitor2, teclado2, raton2 );
console.log(computadora2.toString())



let orden1 = new Orden()
orden1.agregarComputadora(computadora1);

orden1.agregarComputadora(computadora2);

orden1.mostrarOrden()


