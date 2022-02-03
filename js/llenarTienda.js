//Funcion para llenar dinamicamente
//la tienda

export function llenarTienda(){


    let productos=[

        {nombre:"Batimovil a escala",precio:400000,foto:"../img/tienda1.jpg",descripcion:"Batimovil a escala de la ultima pelicula"},
        {nombre:"Camiseta Batman",precio:80000,foto:"../img/tienda2.jpg",descripcion:"Camiseta original DC"},
        {nombre:"Gorra Batman",precio:50000,foto:"../img/tienda3.jpg",descripcion:"Gorra original DC"},
        {nombre:"Bati termo DC",precio:35000,foto:"../img/tienda4.jpg",descripcion:"Termo para bati chocolate"},
        {nombre:"Batmav v Superman",precio:300000,foto:"../img/tienda5.jpg",descripcion:"Imagen a escala de la pelicula Batman v Superman"},
        {nombre:"Bati morral Totto",precio:80000,foto:"../img/tienda6.jpg",descripcion:"Bolso original DC"},
        {nombre:"Silla Gaming Batman",precio:2000000,foto:"../img/tienda7.jpg",descripcion:"Silla comoda y original DC"},
        {nombre:"caja de comics Batman",precio:300000,foto:"../img/tienda8.jpg",descripcion:"comics Batman originales"},
        {nombre:"Bati caja sorpresa",precio:250000,foto:"../img/tienda9.jpg",descripcion:"Caja sorpresa con productos de batman"},
        {nombre:"Bati lonchera totto",precio:80000,foto:"../img/tienda10.jpg",descripcion:"Lonchera para llevar tus bati alimentos"}

    ]

   //Rutina para recorrer el arreglo y crear las tarjetas de cada producto

   //1. crear una referencia a un elemento "PADRE" o "BASE" donde anclaremos los demas
   let fila=document.getElementById("fila")

   //2. Necesito recorrer un arreglo
   productos.forEach(function(producto){

    //3. CREAMOS LOS ELEMENTOS NECESARIOS PARA PINTAR LOS PRODUCTOS
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let imagen=document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("p-3")
    imagen.classList.add("h-100")
    imagen.src=producto.foto

    let separador=document.createElement("hr")
    separador.classList.add("w-50")
    separador.classList.add("mx-auto")
    separador.classList.add("d-block")

    let nombre=document.createElement("h5")
    nombre.classList.add("fw-bold")
    nombre.classList.add("text-center")
    nombre.classList.add("mx-3")
    nombre.textContent=producto.nombre

    let precio=document.createElement("h6")
    precio.classList.add("text-center")
    precio.classList.add("text-muted")
    precio.textContent=producto.precio

    let botonAmpliarInfo=document.createElement("button")
    botonAmpliarInfo.setAttribute("type","button")
    botonAmpliarInfo.classList.add("btn")
    botonAmpliarInfo.classList.add("btn-outline-dark")
    botonAmpliarInfo.classList.add("mx-3")
    botonAmpliarInfo.classList.add("mb-3")
    botonAmpliarInfo.textContent="Ver producto"


    //VAMOS A ANCLAR (PONER)(DISPONER) LAS ETIQUETAS
    //QUE ACABAMOS DE CREAR EN NUESTRA BASE
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(separador)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(botonAmpliarInfo)
    
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    

   })



}