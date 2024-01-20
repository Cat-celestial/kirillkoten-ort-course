const urlCounts = await fetch('https://restcountries.com/v3.1/all');
const urlCurr = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
const countriesObj = await urlCounts.json();
const currensObj = await urlCurr.json();

document.querySelector(".titleLab").textContent += currensObj[0].exchangedate;

console.log(countriesObj);
console.log(currensObj);



let flagsObj = {};

for (let crns in currensObj) {
    let countNeedList = [];

    for (let country in countriesObj) {
        let counrtyCurrKeys = Object.keys(countriesObj[country]);


        if (counrtyCurrKeys.includes("currencies")) {
            // console.log(countriesObj[country].flags.png);

            let thisCountryCurrs = Object.keys(countriesObj[country].currencies);
            if (thisCountryCurrs.includes(currensObj[crns].cc) == true) {
                countNeedList.push(countriesObj[country].flags.png);
                // console.log(countriesObj[country].flags.png);
            }
        }
    }

    flagsObj[currensObj[crns].cc] = countNeedList;
}

console.log(flagsObj);

for (let curr in currensObj) {
    let mBoxTag = document.querySelector(".mainBox");
    let newCurrBox = document.createElement("div");

    newCurrBox.innerHTML = `
    <div class="currBox">
        <h2 class="textSimp currName">${currensObj[curr].txt} (${currensObj[curr].cc})</h2>
        <h3 class="textSimp rateLab" >Курс: </h3>
        <h3 class="textSimp currLab"> ${currensObj[curr].rate.toFixed(2)}грн</h3>
        <div class="flagsBox">

        </div>
    </div>
    `;

    mBoxTag.appendChild(newCurrBox);

    let currFlags = flagsObj[currensObj[curr].cc];
    let flagTags = document.querySelectorAll(".flagsBox")[curr];
    console.log(flagTags);

    for (let flag of currFlags) {
        let newFlagTag = document.createElement("img");
        newFlagTag.setAttribute("src", flag);

        newFlagTag.setAttribute("width", "100px");
        newFlagTag.style.margin = "7px";
        newFlagTag.style.border = "2px solid gray";

        flagTags.appendChild(newFlagTag);
    }
}


let allCurrLabs = document.querySelectorAll(".currName");

for (let item in allCurrLabs) {
    if (item == 29) {
        allCurrLabs[item].style.marginRight = `5px`;
    } else {
        let eachMarg = 380 - parseInt(allCurrLabs[item].offsetWidth);
        allCurrLabs[item].style.marginRight = `${eachMarg}px`;
    }

}