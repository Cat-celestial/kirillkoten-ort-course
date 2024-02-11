import { createApp, ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";


let fetchedSite = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
let jsonFile = await fetchedSite.json();

let app = {
    data: jsonFile,
    loadData() {
        this.render();
    },
    render() {
        console.log(this.data);

        let allProdBoxes = document.querySelectorAll('#phones_ul li');
        let allCurrSpans = document.getElementsByClassName("badge bg-primary badge-pill");
        // console.log(allCurrSpans);
        // console.log(allProdBoxes);

        for (let box in allCurrSpans) {
            // console.log(box, typeof(parseInt(box)));
            if ("012345678".includes(box)) {
                console.log(allCurrSpans[box].outerText.slice(0, 3));

                for (let curr of this.data) {
                    if (curr.cc == allCurrSpans[box].outerText.slice(0, 3)) {
                        let newTag = document.createElement("span");

                        newTag.innerHTML = `
                            <span class="badge bg-primary">HRN ${(parseInt(allCurrSpans[box].outerText.slice(-3)) * curr.rate).toFixed(2)}</span>
                        `;

                        newTag.style.width = "100px";
                        allProdBoxes[box].appendChild(newTag);
                    }

                }
            }
        }
    }
}

app.loadData();






// let url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
// let fetchedSite = await fetch(url);
// let jsonFile = await fetchedSite.json();

// createApp({
//     setup() {


//         return {

//         }
//     }

// }).mount(".container");