let mainArr = _.shuffle(_.range(3,40)).slice(0,10);
console.log(mainArr);
let maxesIncomeList = [];

for (let i of mainArr){
    let maxElemIncome = 0;
    for (let j of mainArr) {
        if (mainArr.indexOf(j) > mainArr.indexOf(i)){
            if (j - i > maxElemIncome) {
                maxElemIncome = j - i;
            }
        }
    }
    maxesIncomeList.push(maxElemIncome);
}
console.log(maxesIncomeList);
console.log(`Максимальная прибыль: ${Math.max.apply(null, maxesIncomeList)}$`);
