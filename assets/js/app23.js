let compNum = parseInt((_.shuffle(_.range(1, 100)).slice(0, 1)).join());
let attempts = 10;

function checkFunc(){
    document.querySelector(".resultNumLab").innerHTML = document.querySelector(".numberChoise").value;
    attempts -= 1;
    document.querySelector(".attemptCount").innerHTML = attempts;
    document.querySelector(".numberChoise").value = "";
    document.querySelector(".numberChoise").focus();
}