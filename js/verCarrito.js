export function verCarrito(carrito){

    let modalVerCarrito = new bootstrap.Modal(document.getElementById('modalvercarrito'))
    
    
    let contenedor=document.getElementById("contenedorCarrito")
    contenedor.innerHTML=""

    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12")
        columna1.classList.add("col-md-4")


        let columna2=document.createElement("div")
        columna2.classList.add("col-12")
        columna2.classList.add("col-md-8")
        columna2.classList.add("align-self-center")

        let fotoProducto=document.createElement("img")
        fotoProducto.classList.add("img-fluid")
        fotoProducto.classList.add("w-100")
        fotoProducto.src=producto.foto

        let nombreProducto=document.createElement("h5")
        nombreProducto.textContent=producto.nombre

        let precioProducto=document.createElement("h6")
        precioProducto.textContent="$"+producto.precio

        let cantidadProducto=document.createElement("h6")
        cantidadProducto.textContent=producto.cantidad+" Und"

        //Padres e hijos
        columna1.appendChild(fotoProducto)

        columna2.appendChild(nombreProducto)
        columna2.appendChild(precioProducto)
        columna2.appendChild(cantidadProducto)

        fila.appendChild(columna1)
        fila.appendChild(columna2)

        contenedor.appendChild(fila)


    })
    
    
    
    
    
    modalVerCarrito.show()

}