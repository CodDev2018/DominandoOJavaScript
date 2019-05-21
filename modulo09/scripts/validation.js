const form = document.forms['cadastro']
const elements = form.elements

const validationOnInputEvent = (event) => {
    event.target.setCustomValidity('')
    event.target.checkValidity()
}

const validarSexo = () => {
    const invalid = Array.from(elements['sexo'])
        .filter(input => input.checked)
        .reduce(() => false, true)

    if (invalid) {
        alert("Sexo deve ser informado!")
    }

    return !invalid
}

const validarRegime = () => {
    const count = Array.from(elements['regime'])
        .filter(input => input.checked)
        .length

    if (count == 0) {
        alert("Pelo menos um regime deve ser selecionado!")
    }

    return count > 0
}

const nomeCompleto = elements['nomeCompleto']
const senha = elements['senha']
const cargo = elements['cargo']

nomeCompleto.addEventListener('input', validationOnInputEvent)
senha.addEventListener('input', validationOnInputEvent)

nomeCompleto.addEventListener('invalid', (event) => {
    if (event.target.value === '') {
        event.target.setCustomValidity('Este campo deve ser informado.')
    } else {
        event.target.setCustomValidity('Informe pelo menos 10 caracteres.')
    }
})

senha.addEventListener('invalid', (event) => {
    if (event.target.value === '') {
        event.target.setCustomValidity('Este campo deve ser informado.')
    } else if (event.target.value.length < 8) {
        event.target.setCustomValidity('A senha deve conter pelo menos 8 caracteres.')
    } else {
        event.target.setCustomValidity('A senha deve conter apenas letras e números.')
    }
})

cargo.addEventListener('invalid', (event) => {
    if (event.target.value === '') {
        event.target.setCustomValidity('O cargo deve ser informado');
    } else {
        event.target.setCustomValidity('');
    }
})