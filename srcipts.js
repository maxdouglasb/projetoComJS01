const convertbutton = document.querySelector(".conversao") /*chamada do botão*/
const convertselect = document.querySelector(".opcao") // chamada do select da opcao do valor da moeda

function convertValue() {
    const inputValorValue = document.querySelector(".input-valor").value /*pega o valor do input digitado*/
    const valor = document.querySelector(".valor") //Valor do Real
    const valor2 = document.querySelector(".valor-2") // Outras Moedas

    const dolarTaday = 4.96 //constante do dolar 
    const euroToday = 5.41 // constante do euro
    const libraToday = 6.29 // constante da libra
    const bitToday = 145.00 // constante do bit

    if (convertselect.value == "dolar") {
        valor2.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD" // Valor da Conversao da moeda dolar. 
            }).format(inputValorValue / dolarTaday) //valor da divisao do input e da const 

    }
    if (convertselect.value == "euro") {
        valor2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR" // Valor da Conversao da moeda EURO.
            }).format(inputValorValue / euroToday) //valor da divisao do input e da const 

    }
    if (convertselect.value == "libra") {
        valor2.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP" // Valor da Conversao da moeda libra.
            }).format(inputValorValue / libraToday) //valor da divisao do input e da const 

    }
    if (convertselect.value == "bitcoin") {
        valor2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC" // Valor da Conversao da moeda bit.
            }).format(inputValorValue / bitToday) //valor da divisao do input e da const 

    }
    valor.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValorValue) // pegando o valor digitado no input e colocando no html

}

function changeTroca() { //funcao de troca de select pra troca de nome no html e imagem
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (convertselect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (convertselect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (convertselect.value == "libra") {
        currencyName.innerHTML = "Libra esterlina"
        currencyImg.src = "./assets/libra.png"
    }

    if (convertselect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }


    convertValue()
}

convertselect.addEventListener("change", changeTroca)
convertbutton.addEventListener("click", convertValue) //esta pegando o click do botao com o evento click