

document.getElementById("open-bracket").addEventListener("click", function() {
    addToCalc("(");
});
document.getElementById("close-bracket").addEventListener("click", function() {
    addToCalc(")");
});
document.getElementById("clear").addEventListener("click", function() {
    clear();
});
document.getElementById("ac").addEventListener("click", function() {
    clearAll();
});
document.getElementById("7").addEventListener("click", function() {
    addToCalc("7");
});
document.getElementById("8").addEventListener("click", function() {
    addToCalc("8");
});
document.getElementById("9").addEventListener("click", function() {
    addToCalc("9");
});
document.getElementById("division").addEventListener("click", function() {
    operandAssesment("÷");
});
document.getElementById("4").addEventListener("click", function() {
    addToCalc("4");
});
document.getElementById("5").addEventListener("click", function() {
    addToCalc("5");
});
document.getElementById("6").addEventListener("click", function() {
    addToCalc("6");
});
document.getElementById("multiply").addEventListener("click", function() {
    operandAssesment("x");
});
document.getElementById("1").addEventListener("click", function() {
    addToCalc("1");
});
document.getElementById("2").addEventListener("click", function() {
    addToCalc("2");
});
document.getElementById("3").addEventListener("click", function() {
    addToCalc("3");
});
document.getElementById("minus").addEventListener("click", function() {
    operandAssesment("-");
});
document.getElementById("0").addEventListener("click", function() {
    addToCalc("0");
});
document.getElementById("point").addEventListener("click", function() {
    operandAssesment(".");
});
document.getElementById("equals").addEventListener("click", function() {
    calculate();
});
document.getElementById("plus").addEventListener("click", function() {
    operandAssesment("+");
});

function clearAll () {
    document.getElementById("result-text").innerHTML = "";
}

function clear() {
    let content = document.getElementById("result-text").innerHTML
    let resultArray = content.split('');
    resultArray.splice(-1, 1);
    let resultArrayStr = resultArray.toString();
    let resultArrayStrNoComma = resultArrayStr.replace(/,/g, "");
    document.getElementById("result-text").innerHTML = resultArrayStrNoComma;

}

function calculate () {
    try {
        let x = document.getElementById("result-text").innerHTML
        let xFormat = x.replace("x", "*")
        let y = eval(xFormat)
        console.log(y)
    } catch {
        document.getElementById("result-text").innerHTML = "Syntax Error";
    }
}

function operandAssesment (a) {
    let results = document.getElementById("result-text").innerHTML;
    let resultsList = results.split('');
    let x = resultsList.pop();
    if (x === "1" || x === "2" || x === "3" || x === "4" || x === "5" || x === "6" || x === "7" || x === "8" || x === "9" || x === "0" || x === "(" || x === ")") {
        addToCalc(a)
    }

}

function addToCalc(a) {
    let maxCheck = checkMaximum()
    if (maxCheck === "notFull") {
        let result = document.getElementById("result-text");
        let input = document.createTextNode(a);
        result.appendChild(input);
    }
}

function checkMaximum () {
    resultList = document.getElementById("result-text").innerHTML;
    let resultArray = resultList.split('');
    let length = resultArray.length
    if (length <= 25) {
        let result = "notFull";
        return result;
    }

}
