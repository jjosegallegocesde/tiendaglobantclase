//Importacion de elementos
import {llenarTienda} from "./llenarTienda.js"
import {ampliarInfoProducto} from "./ampliarInfoProducto.js"

//llamo a la funcion llenartienda
llenarTienda()

//LLamo a la funcion apliarInfoProducto

let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))

let listaProductos=document.getElementById("fila")
listaProductos.addEventListener("click",function(event){

    ampliarInfoProducto(event)
    modalInfoProducto.show()
    
})