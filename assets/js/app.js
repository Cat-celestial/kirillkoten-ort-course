import { createApp, ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";


let fetchedSite = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
let jsonFile = await fetchedSite.json();
jsonFile[61] = { "cc": "UAH", "exchangedate": jsonFile[0].exchangedate, "rate": 1, "txt": "Українська гривня" }

let selectTag = document.querySelector("#selectTag");
let toExchLabs = document.getElementsByClassName("toUAHLab");
// console.log(toExchLabs);

let app = {
    data: jsonFile,
    toCurr: "UAH",
    loadData() {
        this.clearToCurrLubs();
        this.render();
    },
    render() {
        // console.log(this.data);

        let allProdBoxes = document.querySelectorAll('#phones_ul li');
        let allCurrSpans = document.getElementsByClassName("badge bg-primary badge-pill");
        // console.log(allCurrSpans);
        // console.log(allProdBoxes);

        for (let box in allCurrSpans) {
            let intBox = parseInt(box);

            if ("012345678".includes(box)) {
                this.data.filter(item => item.cc.includes(allCurrSpans[intBox].outerText.slice(0, 3))).map((curr, index) => {
                    let priceMatch = allCurrSpans[intBox].outerText.match(/\d+/g);
                    let needCurRateUAH = parseInt(priceMatch[priceMatch.length - 1], 10) * curr.rate;
                    let rightCurr = "UAH";

                    if (this.toCurr != "UAH") {
                        for (let needCur of this.data) {
                            if (needCur.cc == this.toCurr) {
                                needCurRateUAH = parseInt(priceMatch[priceMatch.length - 1], 10) * curr.rate / needCur.rate;
                                rightCurr = needCur.cc;
                            }
                        }
                    }

                    toExchLabs[intBox].outerHTML = `
                        <span class="badge bg-primary toUAHLab">${rightCurr} ${(needCurRateUAH).toFixed(2)}</span>
                    `;
                });

            }
        }

    },

    changeToWhatCurr(opinVal) {
        this.toCurr = opinVal.match(/\(([^)]+)\)/)[1].trim();
        this.loadData();
    },

    clearToCurrLubs() {
        let elementsToRemove = document.querySelectorAll('.toUAHLab');

        elementsToRemove.forEach(function (element) {
            element.innerHTML = "";
        });
    },
    appendSelect() {
        let allCurArray = [];

        for (let curr of this.data) {
            allCurArray.push(`${curr.txt} (${curr.cc})`);
        }
        allCurArray.sort(function (a, b) {
            return a.localeCompare(b, 'uk-UA');
        });

        for (let curr of allCurArray) {
            let newCurrName = document.createElement("option");
            newCurrName.innerHTML = `
                <option id="${curr.match(/\(([^)]+)\)/)[1].trim()}">${curr}</option>
            `;
            selectTag.appendChild(newCurrName);

        }
    },

    sortOptions() {
    }
}
app.loadData();
app.appendSelect();

selectTag.addEventListener("change", () => {
    app.changeToWhatCurr(selectTag.value);

})






// this.data.filter(item => item.cc.includes(allCurrSpans[box].outerText.slice(0, 3))).map((curr, index) => {

//     // let newTag = document.createElement("span");

//     if (this.toCurr != "UAH") {
//         let priceMatch = allCurrSpans[box].outerText.match(/\d+/g);
//         let needCurRateUAH;
//         let rightCurr;

//         for (let needCur of this.data) {
//             if (needCur.cc == this.toCurr) {
//                 needCurRateUAH = parseInt(priceMatch[priceMatch.length - 1], 10) * curr.rate / needCur.rate;
//                 rightCurr = needCur.cc;
//             }
//         }

//         this.toExchLabs[index].innerHTML = `
//             <span class="badge bg-primary toUAHLab">${rightCurr} ${(needCurRateUAH).toFixed(2)}</span>
//         `;

//         // newTag.style.width = "100px";
//         // allProdBoxes[box].appendChild(newTag);

//     } else if (this.toCurr == "UAH") {
//         let priceMatch = allCurrSpans[box].outerText.match(/\d+/g);
//         newTag.innerHTML = `
//             <span class="badge bg-primary toUAHLab">UAH ${(parseInt(priceMatch[priceMatch.length - 1], 10) * curr.rate).toFixed(2)}</span>
//         `;
//         newTag.style.width = "100px";
//         allProdBoxes[box].appendChild(newTag);

//     }

// });