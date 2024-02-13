import { createApp, ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";


let fetchedSite = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
let jsonFile = await fetchedSite.json();
jsonFile[61] = { "cc": "HRN", "exchangedate": jsonFile[0].exchangedate, "rate": 1, "txt": "Українська гривня" }

let selectTag = document.querySelector("#selectTag");

let app = {
    data: jsonFile,
    toCurr: "HRN",
    loadData() {
        this.clearToCurrLubs();
        this.render();
    },
    render() {
        console.log(this.data);

        let allProdBoxes = document.querySelectorAll('#phones_ul li');
        let allCurrSpans = document.getElementsByClassName("badge bg-primary badge-pill");
        let toExchLabs = document.querySelectorAll(".toHrnLab")
        // console.log(allCurrSpans);
        // console.log(allProdBoxes);

        for (let box in allCurrSpans) {
            if ("012345678".includes(box)) {
                // console.log(allCurrSpans[box].outerText.slice(0, 3));

                for (let curr of this.data) {
                    let newCurrName = document.createElement("option");
                    newCurrName.innerHTML = `
                        <option id="${curr.сс}">${curr.txt} (${curr.cc})</option>
                    `;

                    selectTag.appendChild(newCurrName);

                    if (curr.cc == allCurrSpans[box].outerText.slice(0, 3)) {
                        let newTag = document.createElement("span");

                        if (this.toCurr != "HRN") {
                            let priceMatch = allCurrSpans[box].outerText.match(/\d+/g);
                            let needCurRateHRN;
                            let rightCurr;

                            for (let needCur of this.data) {
                                if (needCur.cc == this.toCurr) {
                                    needCurRateHRN = parseInt(priceMatch[priceMatch.length - 1], 10) * curr.rate / needCur.rate;
                                    rightCurr = needCur.cc;
                                }
                            }

                            newTag.innerHTML = `
                                <span class="badge bg-primary toHrnLab">${rightCurr} ${(needCurRateHRN).toFixed(2)}</span>
                            `;

                        } else if (this.toCurr == "HRN") {
                            let priceMatch = allCurrSpans[box].outerText.match(/\d+/g);
                            newTag.innerHTML = `
                                <span class="badge bg-primary toHrnLab">HRN ${(parseInt(priceMatch[priceMatch.length - 1], 10) * curr.rate).toFixed(2)}</span>
                            `;
                        }

                        newTag.style.width = "100px";
                        allProdBoxes[box].appendChild(newTag);
                    }

                }
            }
        }

    },

    changeToWhatCurr(opinVal) {
        this.toCurr = opinVal.match(/\(([^)]+)\)/)[1].trim();
        this.loadData();
    },

    clearToCurrLubs() {
        let elementsToRemove = document.querySelectorAll('.toHrnLab');

        elementsToRemove.forEach(function (element) {
            element.innerHTML = "";
        });
    },

    sortOptions() {
    }
}
app.loadData();
// app.sortOptions();

selectTag.addEventListener("change", () => {
    app.changeToWhatCurr(selectTag.value);

})