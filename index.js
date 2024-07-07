const result = document.getElementById("result-text");
const calculation = document.getElementById("calculation-text");

function insert(num) {
    calculation.textContent += num;
    console.log(num);
}

// Clearing the text using the clear button
document.getElementById("clear").addEventListener("click", function() {
    calculation.textContent = "";
    result.textContent = 0;
});

// Clearing the text using backspace
document.getElementById("back").addEventListener("click", function () {
    let exp = calculation.textContent;
    calculation.textContent = exp.substring(0, exp.length - 1);
});

// Equal button functionality
document.getElementById("equal").addEventListener("click", function () {
    try {
        let exp = calculation.textContent;
        result.textContent = eval(exp);
        calculation.textContent = result.textContent;
    } catch (e) {
        result.textContent = "Error";
    }
});

// Keyboard functionality
document.onkeydown = function(event) {
    let key = event.key;
    if (!isNaN(key) || key === '.') {
        insert(key);
    } else if (key === '/' || key === '*' || key === '-' || key === '+') {
        insert(key);
      } else if (key === 'Enter' || event.keyCode === 61 || key === '=') {  
        event.preventDefault();// Include keyCode 61 for "=" key detection
        document.getElementById("equal").click();
    } else if (key === 'Backspace') {
        document.getElementById("back").click();
    } else if (key === 'Escape') {
        document.getElementById("clear").click();
    }
};
