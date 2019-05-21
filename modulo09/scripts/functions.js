//Manipulando textarea
var obsText = document.querySelector('#textObs')
var obsCount = document.querySelector('#obsCont')
obsText.addEventListener('input', () => {
    obsCount.textContent = obsText.value.length
})


//Manipulando checkbox e radio
let checks = document.querySelectorAll("input[name='regime'][type='checkbox']")
let radios = document.querySelectorAll("input[name='sexo'][type='radio']")

function selectChecks() {
    Array.from(checks).forEach(check => {
        let label = document.querySelector('label[for="' + check.id + '"]')
        if (check.checked) {
            label.classList.add('selected')
        } else if (label.classList.contains('selected')) {
            label.classList.remove('selected')
        }
    })
}

Array.from(checks).forEach(check => {
    check.addEventListener('change', () => selectChecks())
})

function selectRadios() {
    Array.from(radios).forEach(radios => {
        let label = document.querySelector('label[for="' + radios.id + '"]')
        if (radios.checked) {
            label.classList.add('selected')
        } else if (label.classList.contains('selected')) {
            label.classList.remove('selected')
        }
    })
}

Array.from(radios).forEach(radio => {
    radio.addEventListener('change', () => selectRadios())
})

//Manipulando o select
let select = document.querySelector("#selectCargo")
let textarea = document.querySelector(".textarea")
select.addEventListener("change", (event) => {
    if (event.target.value === "Programador") {
        textarea.style.display = 'none'
    } else {
        textarea.style.display = 'block'
    }
})

//Manipulando o input file
let inputFile = document.querySelector("#inputPDF")
inputFile.addEventListener("change", () => {
    if (inputFile.files.length > 0) {
        let file = inputFile.files[0]
        console.log("Nome do arquivo selecionado: ", file.name)

        if (file.type) {
            console.log("Tipo do arquivo selecionado: ", file.type)
        }

        let reader = new FileReader()

        reader.addEventListener("load", () => {
            console.log(reader.result)
        })

        reader.readAsText(file)
    }
})

//Liberando botão salvar
let confirmar = document.querySelector("#inputConfirmacao")
let btnSalvar = document.querySelector("button[type='submit']")

confirmar.addEventListener("change", () => btnSalvar.disabled = !confirmar.checked)

//Salvar dados no localStorage
let cadastroForm = document.forms['cadastro']
cadastro.addEventListener("submit", (event) => {
    event.preventDefault()
    if (!validarSexo() || !validarRegime()) {
        return;
    }
    let elements = event.target.elements
    let candidato = {
        nome: elements['nomeCompleto'].value,
        senha: elements['senha'].value,
        sexo: elements['sexo'].value,
        regime: Array.from(elements['regime'])
            .filter(input => input.checked)
            .map(input => input.value),
        cargo: elements['cargo'].value,
        observacao: elements['observacao'].value
    }

    localStorage.setItem("candidato", JSON.stringify(candidato))
    alert("Salvo com sucesso!")
})

//Pegando dados do localStorage
window.addEventListener("load", () => {
    let candidato = JSON.parse(localStorage.getItem("candidato"))
    if (!candidato) {
        return;
    }
    let elements = document.forms['cadastro'].elements

    elements['nomeCompleto'].value = candidato.nome
    elements['senha'].value = candidato.senha
    elements['cargo'].value = candidato.cargo
    elements['observacao'].value = candidato.observacao

    Array.from(elements['sexo'])
        .find(input => input.value = candidato.sexo).checked = true

    candidato.regime.forEach(regime => {
        Array.from(elements['regime'])
            .find(input => input.value === regime).checked = true
    })

    selectChecks()
    selectRadios()
})

//Apagando dados do storage
cadastro.addEventListener("reset", (event) => {
    localStorage.removeItem('candidato')
    let elements = document.forms['cadastro'].elements
    Array.from(elements['sexo']).forEach(input => input.checked = false)
    Array.from(elements['regime']).forEach(input => input.checked = false)
    selectChecks()
    selectRadios()
})