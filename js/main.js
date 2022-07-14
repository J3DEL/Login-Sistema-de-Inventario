function login(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(user == 'Usuario@correo.com' && pass == '1234'){
        window.location="html/Sesion.html";
        alert('Se ha iniciado sesion con exito');
    }
}

let Ingresar = document.getElementById('ejecutar');
Ingresar.addEventListener('click', login);
