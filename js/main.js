let Ingresar = document.getElementById('ejecutar');
Ingresar.addEventListener('click', function(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(user == 'Usuario@correo.com' && pass == '1234'){
        
        location.href='./html/index-menu.html';
        alert('Se ha iniciado sesion con exito');
        
    }
});

let Registrar = document.getElementById('registro');
Registrar.addEventListener('click', function(){
    alert('registrado satisfactoriamente');
    location.href='../index.html';
    /*
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(user == 'Usuario@correo.com' && pass == '1234'){
        
        location.href='../index.html';
        alert('Se ha iniciado sesion con exito');
        
    }
    */
});

