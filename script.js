const display = document.getElementById("display");
const keyboard = document.getElementById("keyboard");
const keyDel = document.getElementById("keyDel");
const keyReset = document.getElementById("keyReset");
const logo = document.getElementById("calc");
const calc = document.getElementById("keyCalc");
const keys = document.getElementsByClassName("keys");
const toggle = document.getElementById("toggleContainer");

function theme1() {
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    display.style.backgroundColor = " hsl(224, 36%, 15%)";
    display.style.color = "white";
    keyboard.style.backgroundColor = "hsl(223, 31%, 20%)";
    logo.style.color = "white";
    for (k = 0; k <= keys.length; k++) {
        keys[k].style.backgroundColor = "white";
        keys[k].style.color = "black";
        keyReset.style.color = "white";
        keyCalc.style.color = "white";
        keyDel.style.color = "white";
        toggle.style.color = "white";
        calc.style.backgroundColor = "rgb(192, 41, 41)";
        keyReset.style.backgroundColor = "hsl(225, 21%, 49%)";
        keyDel.style.backgroundColor = "hsl(225, 21%, 49%)";
        document.getElementById("attribution").style.color = "white";
        document.getElementById("link").style.color = "white";
        document.getElementById("link2").style.color = "white";
    }
}

function theme2() {
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    display.style.backgroundColor = "hsl(0, 5%, 81%)";
    display.style.color = "black";
    keyboard.style.backgroundColor = "hsl(0, 5%, 81%)";
    logo.style.color = "black";
    for (k = 0; k <= keys.length; k++) {
        keys[k].style.backgroundColor = "white";
        keys[k].style.color = "black";
        keyReset.style.color = "white";
        keyCalc.style.color = "white";
        keyDel.style.color = "white";
        toggle.style.color = "black";
        calc.style.backgroundColor = "hsl(25, 98%, 40%)";
        keyReset.style.backgroundColor = "hsl(25, 99%, 27%)";
        keyDel.style.backgroundColor = "hsl(25, 99%, 27%)";
        document.getElementById("attribution").style.color = "black";
        document.getElementById("link").style.color = "black";
        document.getElementById("link2").style.color = "black";
    }

}

function theme3() {
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    display.style.backgroundColor = "hsl(268, 71%, 12%)";
    display.style.color = "hsl(52, 100%, 62%)";
    keyboard.style.backgroundColor = "hsl(268, 71%, 12%)";
    logo.style.color = "white";
    for (k = 0; k <= keys.length; k++) {
        keys[k].style.backgroundColor = "hsl(281, 89%, 26%)";
        keys[k].style.color = "hsl(52, 100%, 62%)";
        keyReset.style.color = "white";
        keyCalc.style.color = "black";
        keyDel.style.color = "white";
        toggle.style.color = "white";
        calc.style.backgroundColor = "hsl(25, 98%, 40%)";
        keyReset.style.backgroundColor = "hsl(176, 100%, 44%)";
        keyDel.style.backgroundColor = "hsl(176, 100%, 44%)";
        document.getElementById("attribution").style.color = "white";
        document.getElementById("link").style.color = "white";
        document.getElementById("link2").style.color = "white";
    }
}

function check0() {
    if (display.textContent == "0" ||
        display.textContent == "" ||
        display.textContent == "Infinity") return false;
    else return true;
}

function checkOps() {
    if (display.textContent.slice(-1) != "+" &&
        display.textContent.slice(-1) != "-" &&
        display.textContent.slice(-1) != "/" &&
        display.textContent.slice(-1) != "*") return true;
    else return false;
}

function calcular(key) {
    if (display.textContent.length < 10) {
        if (key == "0" || key == "1" || key == "2" || key == "3" ||
            key == "4" || key == "5" || key == "6" ||
            key == "7" || key == "8" ||
            key == "9" || key == ".") {
            if (!check0()) display.textContent = key;
            else display.textContent += key;
        }

        switch (key) {
            case "+":
                if (check0() &&
                    checkOps()) display.textContent += key;
                break;
            case "-":
                if (check0() &&
                    checkOps()) display.textContent += key;
                break;
            case "*":
                if (check0() &&
                    checkOps()) display.textContent += key;
                break;
            case "/":
                if (check0() &&
                    checkOps()) display.textContent += key;
                break;
            case "DEL":
                display.textContent = display.textContent.substring(0, display.textContent.length - 1)
                break;
            case "=":
                display.textContent = eval(display.textContent);
                display.textContent = display.textContent.slice(0, 10);
                break;
            case "RESET":
                display.textContent = "0";
                break;
        }
    } else {
        switch (key) {
            case "DEL":
                display.textContent = display.textContent.substring(0, display.textContent.length - 1)
                break;
            case "RESET":
                display.textContent = "0";
                break;
        }

    }

}