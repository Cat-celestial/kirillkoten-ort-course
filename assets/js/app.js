let mass = +prompt("Enter your weight");
let height = +prompt("Enter your height in meaters");

let bmi = mass / (height ** 2);
console.log("Ваш ИМТ: ", bmi);

if (bmi < 16) {
    console.log("Выраженный дефицит массы тела");
} else if (bmi >= 16 && bmi < 18.5) {
    console.log("Недостаточная (дефицит) масса тела");
} else if (bmi >= 18.5 && bmi < 25) {
    console.log("Норма");
} else if (bmi >= 25 && bmi < 30) {
    console.log("Избыточная масса тела (предожирение)");
} else if (bmi >= 30 && bmi < 35) {
    console.log("Ожирение 1 степени");
} else if (bmi >= 35 && bmi < 40) {
    console.log("Ожирение 2 степени");
} else if (bmi > 40) {
    console.log("Ожирение 3 степени");
};

let year = +prompt("Enter the year to check");

if ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)) {
    console.log("Год высокосный");
} else if (year % 100 == 0 && year % 400 != 0){
    console.log("Год не высокосный");
} else {
    console.log("Год не высокосный"); 
};

// 16 и менее	Выраженный дефицит массы тела
// 16—18,5	Недостаточная (дефицит) масса тела
// 18,5—25	Норма
// 25—30	Избыточная масса тела (предожирение)
// 30—35	Ожирение 1 степени
// 35—40	Ожирение 2 степени
// 40 и более	Ожирение 3 степени