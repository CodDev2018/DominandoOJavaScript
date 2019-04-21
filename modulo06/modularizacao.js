const moduloCarro = (function() {
    let velocidade = 0

    const girarEngrenagens = function() {
        velocidade += 5
    }

    const aumentarVelocidade = function() {
        girarEngrenagens()
    }

    const imprimeVelocidade = function() {
        console.log(velocidade)
    }

    return {
        acelerar: aumentarVelocidade,
        verVelocidade: imprimeVelocidade
    }

})();

moduloCarro.acelerar()
moduloCarro.verVelocidade()