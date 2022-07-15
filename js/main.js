//var usuarios = [];
//var contrasenias = [];

function registro() {
    
}

function login(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(user == 'Usuario@correo.com' && pass == '1234'){
        window.location="./html/index-menu.html";
        alert('Se ha iniciado sesion con exito');
    }else {
        alert('Usuario no registrado');
    }
}

let Ingresar = document.getElementById('ejecutar');
Ingresar.addEventListener('click', login);
