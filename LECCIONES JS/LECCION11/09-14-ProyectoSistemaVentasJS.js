
class Producto {

    static contadorProdcutos = 0;

    constructor(nombre, precio){

        this._idProducto = ++Producto.contadorProdcutos;
        this._nombre = nombre;
        this._precio = precio;

    }

    get idProducto(){
        return this._idProducto
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }



    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }



    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }

    
}


class Orden{

        static contadorOrdenes = 0;
        static get MAX_PRODUCTOS() {
            return 5;
        };

    constructor(){

            this._idOrden = ++Orden.contadorOrdenes;
            this._productos = [];
            this._contadorProductosAgregados = 0;

    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){

        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto)
        }else{
            console.log('pasaste el limite de productos')
        }

    }

    calcularTotal(){
        let totalVenta = 0;

        for (let prod of this._productos){
            totalVenta += prod.precio;
        }

        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden = '';
        for(let prod of this._productos){
            productoOrden += prod.toString() + ' ';
        }

        console.log(`Orden: ${this.idOrden}, Productos: ${productoOrden}, Total: ${this.calcularTotal()}`);
    }

}



producto1 = new Producto('camisa',100)
producto2 = new Producto('playera',200)
producto3 = new Producto('pantalon',300)

console.log(producto1.toString());
console.log(producto2.toString());
console.log(producto3.toString());


let orden1 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);

orden1.mostrarOrden();


let orden2 = new Orden();

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);

orden2.mostrarOrden();
