//var accessKey = "https//api.exchangeratesapi.io/rf3EV7DqAc8RrehzfTR74Dep3wdKhLUf"

let url = "https://api.apilayer.com/currency_data/change?start_date={start_date}&end_date={end_date}"

function converter() {
    let input = document.getElementById("valor");
    let valor = input.value;
    let resultado = document.getElementById("resultado")

    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        let rate = data.rates.BRL;

        let convertido = `"U$ "${valor} " = R$" ${rate * valor}`
        resultado.innerHTML = convertido
    })
}
