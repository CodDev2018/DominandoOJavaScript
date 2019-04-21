function tempoIsencaoIPVA(anoAtual) {
    const mensagemSemIsencao = 'Carro não possui isenção de IPVA'
    const mensagemIsencao = 'Carro possui isenção de IPVA'

    return function(anoCarro) {
        let idadeCarro = anoAtual - anoCarro
        if (idadeCarro > 30) {
            console.log(mensagemIsencao)
        } else {
            console.log(mensagemSemIsencao)
        }
    }
}

var verificadorIPVA = tempoIsencaoIPVA(2019)
verificadorIPVA(1978)
verificadorIPVA(2011)