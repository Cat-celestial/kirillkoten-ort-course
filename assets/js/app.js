let inp = document.querySelector("#mainInp");
inp.focus();
let validLabel = document.querySelector("#validCardLab");
let nameBankLab = document.querySelector("#bankNameLab");

function mainFunc() {
    validLabel.innerHTML = "Карта валидная?";
    nameBankLab.innerHTML = "Карта банка: - ";
    let card = inp.value.split("").map(item => +item).reverse();
    let sum = 0;

    for (let i = 0; i < card.length; i++) {
        if (i % 2 == 0) {
            sum += card[i];
        } else {
            let num = card[i] * 2;
            sum = sum + (num > 9 ? num - 9 : num);
        }
    }

    if (sum % 10 === 0) {
        validLabel.textContent = "Карта является валидной";
    } else {
        validLabel.textContent = "Карта не является валидной";
    }

    card = card.reverse();
    // console.log(card, "масив с обычной картой")
    let visaCardLengs = [13, 16, 19];
    let first4Nums = parseInt(card.join("").slice(0, 4));
    let first2Nums = parseInt(card.join("").slice(0, 2));
    // console.log(first4Nums, "первые 4 цифры");
    // console.log("Первая цифра", card[0], typeof(card[0]));

    if ((card.length == 16 || card.length == 13 || card.length == 19) && card[0] == 4) {
        nameBankLab.innerHTML = `Карта банка: Visa`;
    } else if (card.length == 16 && ((first4Nums >= 2221 && first4Nums <= 2720) || (first2Nums >= 51 && first2Nums <=55))) {
        nameBankLab.innerHTML = `Карта банка: Mastercard`;
    } else if (card.length == 15 && (first2Nums == 34 || first2Nums == 37)){
        nameBankLab.innerHTML = `Карта банка: AmericanExpress`;
    } else {
        nameBankLab.innerHTML = `Карта банка: неизвестная`;
    }
}

