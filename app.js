//variables
const botonEncriptar = document.querySelector('#encriptar');
const botonDesencriptar = document.querySelector('#desencriptar');
const botonCopiar = document.querySelector(".boton__copiar");
const textoEncriptar = document.querySelector(".texto__area__encriptar");
const salidaEncriptacion = document.querySelector(".mensaje__salida");
const remover = document.querySelector(".remover");
//desencriptar

botonDesencriptar.addEventListener('click', e =>{
    e.preventDefault();
    let textoUsuario = textoEncriptar.value;
    let textoNusuario = textoUsuario.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,"");

    if(textoUsuario == ""){
        alert("El campo debe tener como minimo una palabra")
    }
    else{
        textoUsuario = textoUsuario.replace(/enter/mg,"e");
        textoUsuario = textoUsuario.replace(/imes/mg, "i");
        textoUsuario = textoUsuario.replace(/ai/mg, "a");
        textoUsuario = textoUsuario.replace(/ober/mg, "o");
        textoUsuario = textoUsuario.replace(/ufat/mg, "u");

        salidaEncriptacion.innerHTML = textoUsuario;
        remover.remove();
    }
});

//Copiar

botonCopiar.addEventListener('click', e =>{
    e.preventDefault();
    let copiar = salidaEncriptacion;
    copiar.select();
    document.execCommand("copy");
    alert("Copiado en el portapapeles")
});

//encriptar
botonEncriptar.addEventListener('click', e =>{
    e.preventDefault();
    let textoUsuario = textoEncriptar.value;
    let textoNusuario = textoUsuario.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,"");

    if(textoUsuario == ""){
        alert("El campo debe tener como minimo una palabra")
    }
    else{
        textoUsuario = textoUsuario.replace(/e/mg,"enter");
        textoUsuario = textoUsuario.replace(/i/mg, "imes");
        textoUsuario = textoUsuario.replace(/a/mg, "ai");
        textoUsuario = textoUsuario.replace(/o/mg, "ober");
        textoUsuario = textoUsuario.replace(/u/mg, "ufat");

        salidaEncriptacion.innerHTML = textoUsuario;
        remover.remove();
    }

});


