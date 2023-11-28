let creditSum = 1000;
let annualRate = 24;
let monthLoanTerm = 6;
let monthPaym = 1000 / 6;

let overPaym = 0;

for (let i = 0; i < monthLoanTerm; i++) {
    let paymLeft = creditSum - i * monthPaym;
    let ratePaym = paymLeft * (annualRate / 12 / 100);
    overPaym += ratePaym;
    console.log(`Задолженность по кредиту: ${(paymLeft).toFixed(2)}, Погашение кредита: ${(monthPaym).toFixed(2)}, Проценты по кредиту: ${(ratePaym).toFixed(2)}, Общая выплата в месяц: ${(paymLeft + ratePaym).toFixed(2)}`);
}

console.log("Переплата по кредиту: ", (overPaym).toFixed(2));