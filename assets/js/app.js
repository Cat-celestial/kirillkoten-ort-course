let inp = document.querySelector(".inp");
inp.focus();

let letters = {
    a: "Alfa", b: "Bravo", c: "Charlie", d: "Delta", e: "Echo",
    f: "Foxtrot", g: "Golf", h: "Hotel", i: "India", j: "Juliett",
    k: "Kilo", l: "Lima", m: "Mike", n: "November", o: "Oscar",
    p: "Papa", q: "Quebec", r: "Romeo", s: "Sierra", t: "Tango",
    u: "Unoform", v: "Victor", w: "Whiskey", x: "X - ray", y: "Yankee",
    z: "Zulu"
}


let numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Niner"];


function decodeFunc() {

    let decodeLab = document.querySelector(".decoding");
    let inpValue = inp.value;
    decodeLab.textContent = "Разшифровка: ";

    for (let item = 0; item <= inpValue.length - 1; item++) {
        let inNum = !isNaN(inpValue[item]);

        if (inNum) {
            decodeLab.textContent += numbers[inpValue[item]] + " ";
        } else if (inNum == false) {
            decodeLab.textContent += letters[inpValue[item]] + " ";
        }
    }
}

// ВТОРАЯ ЗАДАЧА

let sumInNums = document.querySelector(".hrnInp");
let translationLab = document.querySelector(".translation");

let dozensList = ["", "одинадцать", "двенадцать", "тринадцать", "четырнадцать",
    "пятнадцать", "шестнадцать", "семьнадцать", "восемьнадцать", "девятнадцать"]

let numbsObjList = [
    ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"],

    ["", "десять", "двадцать", "тридцать", "сорок", "пятдесят", "шестьдесят", "семьдесят",
        "восемьдесят", "девяносто"],

    ["", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот",
        "восемьсот", "девятсот"], ["", "одна", "две", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"], ["", "десять", "двадцать", "тридцать", "сорок", "пятдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"], ["", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятсот"], ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"], ["", "десять", "двадцать", "тридцать", "сорок", "пятдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"], ["", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятсот"]];

let bigNumsList = ["", "",
    { "1": "тысяча", "234": "тысячи", "5678910 11 12 13 14 15 16 17 18 19": "тысяч" },
    { "1": "миллион", "234": "миллиона", "5678910 11 12 13 14 15 16 17 18 19": "миллионов" },
    { "1": "миллиард", "234": "миллиарда", "5678910 11 12 13 14 15 16 17 18 19": "миллиардов" }];


function translateFunc() {
    let sum = sumInNums.value.split("").reverse().join("");
    let zhats = 0;
    let wordsList = [];
    translationLab.textContent = "Сума словами: ";

    for (let i = 0; i < sum.length; i++) {

        // Проверка на десятки
        let ifDozens = parseInt(sumInNums.value.slice(-2));
        if (ifDozens > 10 && ifDozens < 20) {
            let dozMas = Array.from(String(ifDozens))
            zhats = dozensList[parseInt(dozMas[1])];
        }

        if (i == 3 || i == 6 || i == 9) {
            // Добавление приставки тысяч и т.д
            let whatBigNum = bigNumsList[Math.ceil(sum.length / 3)];
            let bigNumKeys = Object.keys(whatBigNum);

            for (let j of bigNumKeys) {
                if (j.indexOf(String(sum[i])) != -1) {
                    wordsList.push(whatBigNum[parseInt(j)]);
                }
            }
        }

        wordsList.push(numbsObjList[i][sum[i]]);
    }

    // Конечная проверка на десятки
    if (zhats != 0) {
        wordsList.shift();
        wordsList.shift();
        wordsList.unshift(zhats);
    }
    translationLab.textContent += wordsList.reverse().join(" ");
}
