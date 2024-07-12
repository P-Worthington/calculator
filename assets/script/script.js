
// event listeners for calculator buttons
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
    negativeAssesment("-");
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
document.getElementById("clear-history").addEventListener("click", function() {
    clearHistory();
});

//function used to clear all history from users inputs
function clearHistory() {
    // clears history id 
    let history = document.getElementById("history");
    history.textContent = "";
}

//clears calculator screen 
function clearAll () {
    document.getElementById("result-text").innerHTML = "";
}

//clears the last item typed on the calculator screen
function clear() {
    let content = document.getElementById("result-text").innerHTML
    //clears all of output is syntax error
    if (content === "Syntax Error") {
        clearAll();
    } else {
        //split into array
        let resultArray = content.split('');
        //splice last item
        resultArray.splice(-1, 1);
        //turns array back to string
        let resultArrayStr = resultArray.toString();
        //removes commas from string
        let resultArrayStrNoComma = resultArrayStr.replace(/,/g, "");
        //returns string with deleted item
        document.getElementById("result-text").innerHTML = resultArrayStrNoComma;
    }
}

// function using eval() to calculate the string following press of equals
function calculate () {
    //catched syntax error and displays them on calc screen
    try {
        let x = document.getElementById("result-text").innerHTML
        //replaces x with * to allow eval() to work
        let xFormatTimes = x.replace("x", "*")
        //replaces ÷ with / to allow eval() to work 
        let xFormat = xFormatTimes.replace("÷", "/")
        //perform sum on string
        let y = eval(xFormat)
        //provides user with result 
        document.getElementById("result-text").innerHTML = y;
        // add item to history
        addHistory(x, y)
    } catch {
        // shows user is they have input syntax error 
        document.getElementById("result-text").innerHTML = "Syntax Error";
    }
}

//add item to history list
function addHistory(operation, result) {
    // create new paragraph element 
    let historyItem = document.createElement("p");
    // gives user their inputted sum and the result
    historyItem.innerText = operation + " = " + result;
    //adds content to p element 
    document.getElementById("history").appendChild(historyItem);
    
}

// assess if two operands are togther and prevents input
function operandAssesment (a) {
    let results = document.getElementById("result-text").innerHTML;
    let resultsList = results.split('');
    //last item entered by user
    let x = resultsList.pop();
    //if last item is a number allows operator to be inputted
    if (x === "1" || x === "2" || x === "3" || x === "4" || x === "5" || x === "6" || x === "7" || x === "8" || x === "9" || x === "0" || x === "(" || x === ")") {
        addToCalc(a)
    }

}

// allows negative input after single operator 
function negativeAssesment () {
    let results = document.getElementById("result-text").innerHTML;
    let resultsList = results.split('');
    let x = resultsList.pop();
    let y = resultsList.pop();
    // prevents more than 2 minus signs
    if (x !== "-" && y !== "-") {
        addToCalc("-");
    };
};

// adds user input into the calculator screen
function addToCalc(a) {
    //ensurs display is not full
    let maxCheck = checkMaximum()
    let display = document.getElementById("result-text").innerHTML;
    if (maxCheck === "notFull") {
        //append user input onto string
        let result = document.getElementById("result-text");
        let input = document.createTextNode(a);
        result.appendChild(input);
        //clears display if Syntax error shown and user presses button
        if (display == "Syntax Error") {
            clearAll();
            display = document.createTextNode(a);
        }
    }
}

//checks number of items in display 
function checkMaximum () {
    resultList = document.getElementById("result-text").innerHTML;
    let resultArray = resultList.split('');
    let length = resultArray.length
    if (length <= 16) {
        let result = "notFull";
        return result;
    } else {
        // calc full provided to user as alert
        alert("Calculator full. Press C to delete single item ot AC to delete all.");
    }

}

// dark mode event listener
document.getElementById("dark-mode").addEventListener("click", function() {
    darkMode();
});

// adds all dark classes 
function darkMode() {
    let body = document.body;
    body.classList.toggle("dark-body");

    let background = document.getElementById("calc-outer");
    background.classList.toggle("dark-background");

    let calc = document.getElementById("container");
    calc.classList.toggle("dark-calculator");

    let result = document.getElementById("result");
    result.classList.toggle("dark-result");

    let darkBtn = document.getElementById("dark-mode");
    darkBtn.classList.toggle("dark-btn")

    let history = document.getElementById("clear-history");
    history.classList.toggle("dark-btn")

    document.querySelectorAll("button").forEach(item => {
        item.classList.toggle("dark-button");
    });

    //loop to give operator buttons dark class
    const operator = ["open-bracket", "close-bracket", "division", "multiply", "minus", "point", "plus"]
    const special = ["equals", "clear", "ac"];
    let i = 1
    while (i < 8) {
        let id = operator.pop()
        let x = document.getElementById(id);
        x.classList.toggle("dark-operator")
        i += 1
    }

    //loop to give special buttons dark class
    let e = 1
    while (e < 4) {
        let specialButton = special.pop()
        let y = document.getElementById(specialButton);
        y.classList.toggle("dark-special")
        e += 1
    }


}
