let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(e) {
    e.preventDefault()
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let quantCarne = carnePP(duracao) * adultos + (carnePP(duracao) * 1 / 2) * criancas
    let quantCerveja = cervejaPP(duracao) * adultos
    let quantBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) * 1 / 2) * criancas

    resultado.style.display = "block"
    resultado.innerHTML = `<p>${quantCarne / 1000}kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantCerveja / 355)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantBebida / 2000)} garrafas de 2l de refrigerante, água ou suco</p>`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1000
    } else {
        return 1500
    }
}