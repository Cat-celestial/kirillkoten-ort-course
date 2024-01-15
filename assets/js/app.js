const urlCounts = await fetch('https://restcountries.com/v3.1/all');
const urlCurr = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
const countriesObj = await urlCounts.json();
const currensObj = await urlCurr.json();

document.querySelector(".titleLab").textContent += currensObj[0].exchangedate;

console.log(countriesObj);
console.log(currensObj);

for (let curr in currensObj) {
    let mBoxTag = document.querySelector(".mainBox");
    let newCurrBox = document.createElement("div");

    newCurrBox.innerHTML = `
        <div class="currBox">
            <h2 class="textSimp currName">${currensObj[curr].txt} (${currensObj[curr].cc})</h2>
            <h3 class="textSimp rateLab" >Курс: </h3>
            <h3 class="textSimp currLab"> ${currensObj[curr].rate.toFixed(2)}грн</h3>
        </div>
    `;

    mBoxTag.appendChild(newCurrBox);
}

let allCurrLabs = document.querySelectorAll(".currName");

for (let item in allCurrLabs) {
    
    
}
