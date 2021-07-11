import codes from "./codes.mjs"

const currencyCodesRef = document.querySelector("#currencyCodesRef");
const btnCheckCurrencyRef = document.querySelector("#checkCurrency")
const resultRef = document.querySelector("#resultRef");
const cardRef = document.querySelector('#cardRef');
const alertMessageRef = document.querySelector("#alert-message")



codes.forEach(code => {
    const optTag = document.createElement('option');
    const optText = document.createTextNode(code);
    optTag.appendChild(optText);

    optTag.setAttribute("value", code);
    currencyCodesRef.appendChild(optTag);
})


const getExchangeRate = async (code) => {
    const url = 'http://api.nbp.pl/api/exchangerates/rates/a/'
    return fetch(`${url}${code}/`)
        .then((response) => {
            if (response.status == 200) {
                return response.json()
            } else {
                return response.text()
            }
        }).catch((e) => e);

};

// const result = await getExchangeRate("HRK");
// console.log(result);

// btnCheckCurrencyRef.addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log(this)
// })
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};


btnCheckCurrencyRef.addEventListener('click', (event) => {
    // wylaczenie zachowan przegladarki
    event.preventDefault();
    alertMessageRef.classList.add('hidden-anim');
    
    
    const code = currencyCodesRef.value

    const result = getExchangeRate(code)

    const cardResult = cardRef.cloneNode(true)
    cardResult.classList.remove("hidden")
    
    const cardHeader = cardResult.querySelector(".card-header");
    const cardTitle = cardResult.querySelector('.card-title');
    const cardText = cardResult.querySelector('.card-text');
    
    result.then(data => {
        if (typeof data === 'string') {
            alertMessageRef.innerText = `${code} is not found`
            alertMessageRef.classList.remove("hidden-anim")
        } else {
            cardHeader.innerText = data.code;
            cardTitle.innerText = data.currency.capitalize();
            cardText.innerText = data.rates[0].mid
            resultRef.prepend(cardResult);
        }
    })
});