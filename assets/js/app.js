import { createApp, ref, watch } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

let months = ["Января", "Февраля", "Марта", "Апреля", "Мая",
    "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Субота"];
const zodiacAnimals = ['Мавпа', 'Півень', 'Собака', 'Свиня', 'Щур', 'Бик', 'Тигр', 'Кролик', 'Дракон', 'Змія', 'Кінь', 'Коза'];

createApp({
    setup() {
        const inputVal = ref("");

        watch(inputVal, async () => {
            innCorrectLab.textContent = "ИНН коректен?";
            birthDayLab.textContent = "Дата рождения: ";
            genderLab.textContent = "Пол: ";
            zodiacSingLab.textContent = "Знак зодиака: ";

            let userINN = String(inputVal.value);

            if (userINN.length == 10) {
                let innList = userINN.split("").map((item) => +item).reverse();

                let checkSum = userINN[0] * -1 + userINN[1] * 5 + userINN[2] * 7 + userINN[3] * 9 + userINN[4] * 4 + userINN[5] * 6 + userINN[6] * 10 + userINN[7] * 5 + userINN[8] * 7;
                let checkNum = checkSum % 11;
                checkNum = (checkNum >= 10) ? checkNum % 10 : checkNum;

                if (checkNum == innList[0]) {
                    innCorrectLab.innerHTML = `ИНН <span class="green">корректен</span>`;

                    let gender = (num) => (num % 2 === 0) ? "Пол: женский" : "Пол: мужской";
                    genderLab.textContent = gender(innList[1]);

                    let birthDays = parseInt(userINN.substring(0, 5));
                    let dt = new Date("1899-12-31");
                    dt.setDate(dt.getDate() + birthDays);

                    birthDayLab.textContent = `Дата рождения: ${dt.getDate()} ${months[dt.getMonth()]} ${dt.getFullYear()}, ${daysOfWeek[dt.getDay()]}`;

                    let mMain = parseInt(dt.getMonth()) + 1;
                    let dayMain = parseInt(dt.getDate());

                    let znak = "";
                    switch (mMain) {
                        case 1:
                            if (dayMain <= 19)
                                znak = 'Козерог';
                            else
                                znak = 'Водолей';
                            break;
                        case 2:
                            if (dayMain <= 18)
                                znak = 'Водолей';
                            else
                                znak = 'Рыбы';
                            break;
                        case 3:
                            if (dayMain <= 20)
                                znak = 'Рыбы';
                            else
                                znak = 'Овен';
                            break;
                        case 4:
                            if (dayMain <= 19)
                                znak = 'Овен';
                            else
                                znak = 'Телец';
                            break;
                        case 5:
                            if (dayMain <= 20)
                                znak = 'Телец';
                            else
                                znak = 'Близнецы';
                            break;
                        case 6:
                            if (dayMain <= 21)
                                znak = 'Близнецы';
                            else
                                znak = 'Рак';
                            break;
                        case 7:
                            if (dayMain <= 22)
                                znak = 'Рак';
                            else
                                znak = 'Лев';
                            break;
                        case 8:
                            if (dayMain <= 22)
                                znak = 'Лев';
                            else
                                znak = 'Дева';
                            break;
                        case 9:
                            if (dayMain <= 22)
                                znak = 'Дева';
                            else
                                znak = 'Весы';
                            break;
                        case 10:
                            if (dayMain <= 22)
                                znak = 'Весы';
                            else
                                znak = 'Скорпион';
                            break;
                        case 11:
                            if (dayMain <= 22)
                                znak = 'Скорпион';
                            else
                                znak = 'Стрелец';
                            break;
                        case 12:
                            if (dayMain <= 21)
                                znak = 'Стрелец';
                            else
                                znak = 'Козерог';
                            break;
                    }

                    const zodiacIndex = (parseInt(dt.getFullYear()) - 1924) % 12;

                    zodiacSingLab.textContent = `Знак зодиака: ${znak}, Символ года: ${zodiacAnimals[zodiacIndex]}`;
                } else {
                    innCorrectLab.innerHTML = `ИНН <span class="red">НЕ</span> корректен`;
                }
            }


        });

        return {
            inputVal,
        }
    }
}).mount("#app");


// function mainFunc() {
//     let innStr = String(mainInp.value);
//     let innList = mainInp.value.split("").map((item) => +item).reverse();

//     let checkSum = innStr[0] * -1 + innStr[1] * 5 + innStr[2] * 7 + innStr[3] * 9 + innStr[4] * 4 + innStr[5] * 6 + innStr[6] * 10 + innStr[7] * 5 + innStr[8] * 7;
//     let checkNum = checkSum % 11;
//     // console.log(checkNum);

//     checkNum = (checkNum >= 10) ? checkNum % 10 : checkNum;
//     // parseInt(checkNum);
//     // console.log(checkNum);

//     if (innList.length == 10 && checkNum == innList[0]) {
//         innValidityLab.innerHTML = `ИНН <span class="green">корректен</span>`;

//         let gender = (num) => (num % 2 === 0) ? "Пол: женский" : "Пол: мужской";
//         genderLab.textContent = gender(innList[1]);

//         let birthDays = parseInt(innStr.substring(0, 5));
//         let dt = new Date("1899-12-31");
//         dt.setDate(dt.getDate() + birthDays);

//         birthDayLab.textContent = `Дата рождения: ${dt.getDate()} ${months[dt.getMonth()]} ${dt.getFullYear()}, ${daysOfWeek[dt.getDay()]}`;
//         // console.log(dt.getDay());

//         let fullBirthDate = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
//         let nowadays = new Date();
//         // let nowadays = new Date(nowadaysString.getFullYear(), nowadaysString.getMonth(), nowadaysString.getDate());

//         let yearOld = Math.floor(Math.ceil(Math.abs(nowadays.getTime() - fullBirthDate.getTime()) / (1000 * 3600 * 24)) / 365);

//         yearsLab.textContent = `Полных лет человеку: ${yearOld}`;
//     } else {
//         innValidityLab.innerHTML = `ИНН <span class="red">НЕ</span> корректен`;
//         birthDayLab.textContent = "Дата рождения: ";
//         genderLab.textContent = "Пол: ";
//         yearsLab.textContent = "Полных лет человеку: ";
//     }

// }