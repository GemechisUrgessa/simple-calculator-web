
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
let inputs = "";

function clearAll() {
    inputs = "";
    upper.textContent = inputs;
    lower.textContent = inputs;
} function clearOne() {
    let sliInput = inputs.slice(0, -1);
    inputs = sliInput;
    upper.textContent = inputs;
} function buttonZero() {
    inputs += "0";
    upper.textContent = inputs;
} function buttonOne() {
    inputs += "1";
    upper.textContent = inputs;
} function buttonTwo() {
    inputs += "2";
    upper.textContent = inputs;
} function buttonThree() {
    inputs += "3";
    upper.textContent = inputs;
} function buttonFour() {
    inputs += "4";
    upper.textContent = inputs;
} function buttonFive() {
    inputs += "5";
    upper.textContent = inputs;
} function buttonSix() {
    inputs += "6";
    upper.textContent = inputs;
} function buttonSeven() {
    inputs += "7";
    upper.textContent = inputs;
} function buttonEight() {
    inputs += "8";
    upper.textContent = inputs;
} function buttonNine() {
    inputs += "9";
    upper.textContent = inputs;
} function buttonDot() {
    inputs += ".";
    upper.textContent = inputs;
} function buttonLeftBracket() {
    inputs += "(";
    upper.textContent = inputs;
} function buttonRightBracket() {
    inputs += ")";
    upper.textContent = inputs;
} function buttonAdd() {
    inputs += "+";
    upper.textContent = inputs;
} function buttonSub() {
    inputs += "-";
    upper.textContent = inputs;
} function buttonMulti() {
    inputs += "x";
    upper.textContent = inputs;
} function buttonDiv() {
    inputs += "÷";
    upper.textContent = inputs;
} function buttonEquals() {
    inputs += ")";
    upper.textContent = inputs;
} function buttonEquals() {
    try {
        if (inputs.includes("(") && inputs.includes(")")) {
            let first = inputs.indexOf("(");
            let last = inputs.indexOf(")");
            if (Number(inputs[first - 1]) !== NaN) {
                inputs = inputs.replace(/\(/, "*");

            } if (last === inputs.length - 1) {
                inputs = inputs.slice(0, -1);

            } if (last !== inputs.length - 1 && Number(inputs[last + 1]) !== NaN) {
                inputs = inputs.replace(/\)/, "*");
            } if (inputs.includes("(") && inputs.includes(")")) {
                buttonEquals();

            }
            lower.textContent = eval(inputs)
        }
        inputs = inputs.replace(/x/g, "*").replace(/÷/g, "/");
        lower.textContent = eval(inputs)
    }
    catch (error) {
        lower.textContent = "DUD, come on😆ERROR!"

    }

}
