class Empleado{

    constructor(nombre, sueldo){

        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`
    }
}

class Gerente extends Empleado{

    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo)
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this._departamento}`
    }
}


//funcion para reflejar polimorfismo en dos clases
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());

    if(tipo instanceof Gerente){
        console.log('Objeto de tipo Gerente')
    }else if(tipo instanceof Empleado){
        console.log('Objeto de tipo Empleado')
    }else if(tipo instanceof Object){
        console.log('Objeto de tipo Object')
    }
}

let empleado1 = new Empleado('sandra', 12000)
let gerente1 = new Gerente('andres',12000,'sistemas');

imprimir(empleado1);

imprimir(gerente1);
