window.onload = function () {
    let counterValue = document.getElementById("counter-value")
    let buttonDecrease = document.getElementById("button-decrease")
    let buttonReset = document.getElementById("button-reset")
    let buttonIncrease = document.getElementById("button-increase")
    let value = 0;

    buttonDecrease.onclick = function() {
        value--;
        counterValue.innerText = value;
    };

    buttonReset.onclick = function() {
        value = 0;
        counterValue.innerText = value;
    };

    buttonIncrease.onclick = function() {
        value++;
        counterValue.innerText = value;
    };
}