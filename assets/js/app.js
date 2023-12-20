let inp = document.querySelector(".inp");
inp.focus();


let letters = {
    "a": "Alfa", "b": "Bravo", "c": "Charlie", "d": "Delta", "e": "Echo",
    "f": "Foxtrot", "g": "Golf", "h": "Hotel", "i": "India", "j": "Juliett",
    "k": "Kilo", "l": "Lima", "m": "Mike", "n": "November", "o": "Oscar",
    "p": "Papa", "q": "Quebec", "r": "Romeo", "s": "Sierra", "t": "Tango",
    "u": "Unoform", "v": "Victor", "w": "Whiskey", "x": "X - ray", "y": "Yankee",
    "z": "Zulu"
}

let numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Niner"];


function decodeFunc() {
    
    let decodeLab = document.querySelector(".decoding");
    let inpValue = inp.value;
    decodeLab.textContent = "Разшифровка: ";
    
    
    for (let item of inpValue) {
        console.log(numbers[item]);
        if (typeof(item) == "number") {
            let numItem = parseInt(item);
            decodeLab.textContent += numbers[numItem] + " ";

        } else if (typeof(item) == "string") {
            decodeLab.textContent += letters[item] + " ";
        }
    }
}