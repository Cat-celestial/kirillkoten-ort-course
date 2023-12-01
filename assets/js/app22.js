function countImtFunc() {
    let weight = parseInt(document.querySelector(".weightInp").value);
    let height = parseFloat(document.querySelector(".heightInp").value);

    if (height > 3){
        height /= 100;
    }
    
    let bmi = (weight / (height ** 2)).toFixed(1);

    let indTextElem = document.querySelector(".indText");
    indTextElem.innerHTML = bmi;

    let whatImbMeanLab = document.querySelector(".itMeanLab");

    if (bmi < 16) {
        whatImbMeanLab.innerHTML = "Он означает: &nbsp;";
        whatImbMeanLab.innerHTML += "Выраженный дефицит массы тела";
    } else if (bmi >= 16 && bmi < 18.5) {
        whatImbMeanLab.innerHTML = "Он означает: &nbsp;";
        whatImbMeanLab.innerHTML += "Недостаточная (дефицит) масса тела";
    } else if (bmi >= 18.5 && bmi < 25) {
        whatImbMeanLab.innerHTML = "Он означает: &nbsp;";
        whatImbMeanLab.innerHTML += "Норма";
    } else if (bmi >= 25 && bmi < 30) {
        whatImbMeanLab.innerHTML = "Он означает: &nbsp;";
        whatImbMeanLab.innerHTML += "Избыточная масса тела (предожирение)";
    } else if (bmi >= 30 && bmi < 35) {
        whatImbMeanLab.innerHTML = "Он означает: &nbsp;";
        whatImbMeanLab.innerHTML += "Ожирение 1 степени";
    } else if (bmi >= 35 && bmi < 40) {
        whatImbMeanLab.innerHTML = "Он означает: &nbsp;";
        whatImbMeanLab.innerHTML += "Ожирение 2 степени";
    } else if (bmi > 40) {
        whatImbMeanLab.innerHTML = "Он означает: &nbsp;";
        whatImbMeanLab.innerHTML += "Ожирение 3 степени";
    };
}