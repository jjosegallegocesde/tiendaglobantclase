//0. IMPORTO LIBRERIA DE AUTENTICACION
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

//1. Para registrar a una persona en su app
let botonRegistro=document.getElementById("botonregistro")


//1.1 CREO UNA REFERENCIA GLOBAL A LA VENTANA MODAL
let modalLogin=new bootstrap.Modal(document.getElementById('modallogin'))
let mensajeLogin=document.getElementById("mensajelogin")


botonRegistro.addEventListener("click",function(event){
    event.preventDefault()
    
    //obtenemos el valor de cada input del formulario
    let email=document.getElementById("cajaemail").value
    let password=document.getElementById("cajapassword").value

    //VALIDAR EL FORMULARIO

    //AGREGAR LA RUTINA PARA LLEVAR LOS DATOS FIREBASE
    //(HABLAR CON EL BACK)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        mensajeLogin.textContent="exito en el registro. Bienvenido PAE"
        modalLogin.show()
        console.log("TODO BN PAPA")
    })


    
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
        mensajeLogin.textContent=`Error: ${errorCode} : ${errorMessage}`
        modalLogin.show()
        console.log("ERROR")

    });

})

