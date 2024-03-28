let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", ReceberValorConta )

function ReceberValorConta(evento) {
    conta = Number(evento.target.value)
    calcular()
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", ReceberQuantidadeDePessoas)

function ReceberQuantidadeDePessoas(evento) { 
    const paragrafoErro = document.querySelector("#pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")

    if(evento.target.value === "0") {
        paragrafoErro.computedStyleMap.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else {
        paragrafoErro.computedStyleMap.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }

    calcular()
}


const botoesGorjeta = document.querySelectorAll("gorjeta input[type = 'button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagem)
})

function receberPorcentagem(evento) {
    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
        if(botao.value === evento.target.value) {
            botao.classList.add("botao-ativo")
        }
    })

    if(evento.target.value !== "") {
    porcentagem = parseFloat(evento.target.value) / 100
    } else {
        porcentagem = 0
    }

    calcular()
}

const gorjetaInput = document.querySelector("#outra")
gorjetaInput.addEventListener("input", receberPorcentagem)

function calcular() {
    if(conta !== 0 && porcentagem !== 0 && pessoas !== 0) {
        const strongGorjetatotal = document.querySelector(".gorjeta-total > strong")
        strongGorjetatotal.innerHTML = `R$ ${(conta * porcentagem / pessoas).toFixed(2)}`

        const strongtotal = document.querySelector(".total > strong")
        strongtotal.innerHTML = `R$ ${((conta + (conta * porcentagem)) / pessoas)toFixed}`
    }
}

const botaoLimpar = .document.querySelector(".resultados butto")
botaoLimpar.addEventListener("click", limpar)

function limpar() {
    contaInput.value = ""

    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
    })

    gorjetainput.value = ""

    pessoasinput.value = ""

    document.querySelector(".gorjeta-total > strong").innerHTML = "R$ 0.00"
    document.querySelector(".total > strong").innerHTML = "R$ 0.00"
}