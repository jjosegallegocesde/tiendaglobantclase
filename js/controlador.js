//Importacion de elementos
import {llenarTienda} from "./llenarTienda.js"
import {ampliarInfoProducto} from "./ampliarInfoProducto.js"
import {agregarCarrito} from "./agregarAlCarrito.js"
import {verCarrito} from "./verCarrito.js"

//VARIABLES GLOBALES DE LA TIENDA
let producto={}
let carrito=[]

//llamo a la funcion llenartienda
llenarTienda()

//LLamo a la funcion apliarInfoProducto
let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
let listaProductos=document.getElementById("fila")
listaProductos.addEventListener("click",function(event){
    producto=ampliarInfoProducto(event)
    modalInfoProducto.show()
})

//Llamo a la funcion agregaralcarrito
let botonAgregarCarrito=document.getElementById("botonAgregarProducto")
botonAgregarCarrito.addEventListener("click",function(){
    
    let cantidadProducto=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidadProducto
    //agrego el producto al carrito
    carrito.push(producto)
    //oculto la modal de info producto
    modalInfoProducto.hide()
    //llamar la funcion agregarCarrito
    agregarCarrito(carrito)

})

//Llamo a la funcion ver carrito
let botonVerCarrito=document.getElementById("botonCarrito")
botonVerCarrito.addEventListener("click",function(){
    verCarrito(carrito)
})