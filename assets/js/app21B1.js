let winterDays = [20, 39, -28, -10, -8, -16, -49, -44, 
    -47, 5, -24, 7, -15, 3, -29, 43, 23, 2, 20, -4, -31, 
    -41, 3, -19, -13, 49, 6, 45, -2, 22, 18, 7, 29, 40, 
    -1, -48, -1, -24, 5, -9, -38, -2, -14, -34, -11, -15, 
    21, 35, -29, -26, 7];

console.log(winterDays);

let coolingCount = 0;
let coolingLastsMas = [];
let coolingLast = 0;
// let maxCoolLast = 0;

for(let i = 0; i < winterDays.length; i++){
    if(winterDays[i] > 0 && winterDays[i + 1] <= 0){
        coolingCount += 1;
    }
    
    if (winterDays[i] <= 0){
        coolingLast += 1;
    } else if(winterDays[i] > 0){
        coolingLastsMas.push(coolingLast);
        coolingLast = 0;
    }

    // if (maxCoolLast < coolingCount) {
    //     maxCoolLast = coolingCount;
    // }        
}

console.log(`Количество похолоданий: ${coolingCount}`);
console.log(`Максимальное количество холодных дней подряд: ${Math.max.apply(null, coolingLastsMas)}`);