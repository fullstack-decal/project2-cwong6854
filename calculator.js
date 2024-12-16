
let total = 0;
let strbuffer = "0";
let strbuffer_2 = "0";
let operator = null;

function setListeners() {
    addEventListener("click", (event) => {
        let clicked_button = event.target.innerHTML;
        buttonClicked(clicked_button);
    })
}

setListeners();
function buttonClicked(valueClicked) {
    if (isNaN(parseInt(valueClicked))) {
        console.log(valueClicked);
        makesSymbol(valueClicked);
    } else {
        console.log(valueClicked);
        makesNumber(valueClicked);
    }
    // specific edge case
    if (valueClicked === "←") {
        document.querySelector(".result-screen").innerHTML = strbuffer;
    } else if (strbuffer_2 != "0" && valueClicked != "=") {
        document.querySelector(".result-screen").innerHTML = strbuffer_2;
    } else {
        document.querySelector(".result-screen").innerHTML = strbuffer;
    }
}

function calculations() {
    const intBuffer = parseInt(strbuffer);
    const intBuffer_2 = parseInt(strbuffer_2);
    if (operator === "+") {
        total = intBuffer + intBuffer_2;
    }
    if (operator === "-") {
        total = intBuffer - intBuffer_2;
    }
    if (operator === "x") {
        total = intBuffer * intBuffer_2;
    }
    if (operator === "÷") {
        total = Math.round(intBuffer / intBuffer_2);
    }
}

function makesNumber(number) {
    if (strbuffer === "0") {
        strbuffer = `${number}`;
        total = parseInt(number);
    } else if (operator) {
        if (strbuffer_2 === "0") {
            strbuffer_2 = `${number}`;
        } else {
            strbuffer_2 += `${number}`;
        }
    }
    else {
        strbuffer += `${number}`;
        total = parseInt(strbuffer)
    }
}

function makesSymbol(symbol) {
    if (symbol === "C") {
        strbuffer = "0"
        strbuffer_2 = "0"
        operator = null;
        total = 0;
    } else if (symbol === "←") {
        if (strbuffer.length === 1) {
            strbuffer = "0";
        } else {
            strbuffer = strbuffer.substring(0, strbuffer.length - 1);
        }
    } else if (symbol === "=") {
        if (strbuffer_2) {
            if (operator === "+") {
                total += parseInt(strbuffer_2);
                strbuffer = total.toString();
            }
            if (operator === "-") {
                total -= parseInt(strbuffer_2);
                strbuffer = total.toString();
            } 
            if (operator === "x") {
                total *= parseInt(strbuffer_2);
                strbuffer = total.toString();
            } 
            if (operator === "÷") {
                total /= parseInt(strbuffer_2);
                strbuffer = total.toString();
            }
        }
    } else {
        operator = symbol;
        strbuffer_2 = "0";
    }
}
