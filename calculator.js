const display = document.getElementById('display');
let expression = "";

function press(val) {
    if (display.value === "0" && val !== ".") {
        expression = val;
    } else {
        expression += val;
    }
    render();
}

function reset() {
    expression = "";
    display.value = "0";
}

function backspace() {
    if (expression.length > 0) {
        expression = expression.slice(0, -1);
        render();
    }
}

function solve() {
    if (expression === "") return;
    try {
        const result = eval(expression);

        expression = Number.isInteger(result) ?
            result.toString() :
            parseFloat(result.toFixed(8)).toString();
        render();
    } catch (err) {
        display.value = "Error";
        expression = "";
    }
}

function render() {
    display.value = expression || "0";
}