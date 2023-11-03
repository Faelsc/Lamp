const lampada = document.getElementById('lamp');
const turnOnOff = document.getElementById('turnOnOff');

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

function lampOnOff () {
    if ( turnOnOff.textContent === 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}


turnOnOff.addEventListener( 'click', lampOnOff );
lampada.addEventListener( 'mouseover', lampOn );
lampada.addEventListener( 'mouseleave', lampOff );
lampada.addEventListener( 'dblclick', lampBroken );

