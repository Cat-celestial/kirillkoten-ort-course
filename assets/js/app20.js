let creditSum = +prompt("Введите суму кредита");
// let creditSumInUse = creditSum;
let annualRate = +prompt("Введите годовой процент");
let monthLoanTerm = +prompt("Введите срок кредита в месяцах");
let monthPaym = (creditSum / monthLoanTerm).toFixed(2);

let overPaym = 0;

for (let i = 0; i < monthLoanTerm; i++) {
    let paymLeft = creditSum - i * monthPaym;
    // creditSumInUse = paymLeft;

    let ratePaym = paymLeft * (annualRate / 12 / 100);
    overPaym += ratePaym;
    console.log(`Задолженность по кредиту: ${(paymLeft).toFixed(2)}, Погашение кредита: ${monthPaym}, Проценты по кредиту: ${(ratePaym).toFixed(2)}, Общая выплата в месяц: ${(paymLeft + ratePaym).toFixed(2)}`);
}

console.log("Переплата по кредиту: ", (overPaym).toFixed(2));