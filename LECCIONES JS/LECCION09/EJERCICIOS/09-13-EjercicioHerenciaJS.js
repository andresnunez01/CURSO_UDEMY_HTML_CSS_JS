class Persona{

    static contadorPersonas = 0;

    constructor( nombre, apellido, edad){

        this._idPersona = ++Persona.contadorPersonas;;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre (nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    nombreCompletoPersona(){
        return ( this._idPersona + ' ' + this._nombre + ' ' + this._apellido)
    }

    toString(){
        return this.nombreCompletoPersona()
    }
}


class Empleado extends Persona{
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad,sueldo){

        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + ' tiene el sueldo de: ' + this._sueldo + ' ' + this._idEmpleado
    }
}




class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre, apellido ,edad){

        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = new Date();
        
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} 
        ${this._fechaRegistro}
        ${this._idCliente}`;
    }
}


let persona1 = new Persona('andres', 'nunez', 23)

console.log(persona1.toString());

let empleado1 = new Empleado('juan', 'nunez', 16, 1300);

console.log(empleado1.toString())

let cliente1 = new Cliente('sandra', 'nunez', '43')

console.log(cliente1.toString())






console.log(cliente1.edad)

