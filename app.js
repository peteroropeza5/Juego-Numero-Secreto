let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let intentosMaximos = 3;

function asignarElementoTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarValor(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroUsuario){
        asignarElementoTexto('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroSecreto > numeroUsuario) {
            asignarElementoTexto('p', 'El numero es mayor');
        }else{
            asignarElementoTexto('p', 'El numero es menor');
        }
        intentos++;
        limpiarCaja();
    }
}

function condicionesIniciales() {
    asignarElementoTexto('h1', 'Juego del numero secreto');
    asignarElementoTexto('p', 'Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length === intentosMaximos) {
        asignarElementoTexto('p', `Haz llegado al numero maximo de juegos que es ${intentosMaximos}`);
        document.querySelector('#nuevoIntento').setAttribute('disabled', 'true');
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    //Limpiamos caja
    limpiarCaja();
    //Mensajes iniciales, numero secreto nuevo, contador nuevo
    condicionesIniciales();
    //deshabilitamos boton
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();