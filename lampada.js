const lampada = document.getElementById('lamp');
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');

function verificaLampadaQuebrada () {
    return lampada.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if ( !verificaLampadaQuebrada() ) {
    lampada.src = './img/ligada.jpg';   
    }
}

function lampOff () {
    if ( !verificaLampadaQuebrada() ) {
    lampada.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lampada.src = './img/quebrada.jpg';
}


turnOn.addEventListener( 'click', lampOn );
turnOff.addEventListener( 'click', lampOff );
lampada.addEventListener( 'mouseover', lampOn );
lampada.addEventListener( 'mouseleave', lampOff );
lampada.addEventListener( 'dblclick', lampBroken );

