

// event listeners for calculator buttons
document.getElementById("open-bracket").addEventListener("click", function() {
    addToCalc("(");
});
document.getElementById("close-bracket").addEventListener("click", function() {
    canClose(")");
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
    var history = document.getElementById("history");
    history.textContent = "";
}

//clears calculator screen 
function clearAll () {
    document.getElementById("result-text").innerHTML = "";
}

//clears the last item typed on the calculator screen
function clear() {
    var content = document.getElementById("result-text").innerHTML;
    //clears all of output is syntax error
    if (content === "Syntax Error" || content == "Infinity" || content == "undefined") {
        clearAll();
    } else {
        //split into array
        var resultArray = content.split('');
        //splice last item
        resultArray.splice(-1, 1);
        //turns array back to string
        var resultArrayStr = resultArray.toString();
        //removes commas from string
        var resultArrayStrNoComma = resultArrayStr.replace(/,/g, "");
        //returns string with deleted item
        document.getElementById("result-text").innerHTML = resultArrayStrNoComma;
    }
}

// function using eval() to calculate the string following press of equals
function calculate () {
    //catched syntax error and displays them on calc screen
    try {
        var x = document.getElementById("result-text").innerHTML;
        //replaces x with * to allow eval() to work
        var xFormatTimes = x.replace("x", "*");
        //replaces ÷ with / to allow eval() to work 
        var xFormat = xFormatTimes.replace("÷", "/");
        //perform sum on string
        var y = eval(xFormat);
        //provides user with result 
        document.getElementById("result-text").innerHTML = y;
        // add item to history
        if (x === "" || x === "undefined") {
            //to not add history
        } else {
            addHistory(x, y);
        }
    } catch {
        // shows user is they have input syntax error 
        document.getElementById("result-text").innerHTML = "Syntax Error";
    }
}

//add item to history list
function addHistory(operation, result) {
    // create new paragraph element 
    var historyItem = document.createElement("p");
    //add class attribute to created element 
    historyItem.setAttribute("class", "history-item");
    //obtain next number of id
    var idNum = getNextNum();
    var newId = "history-" + idNum;
    //add id
    historyItem.setAttribute("id", newId);
    // gives user their inputted sum and the result
    historyItem.innerText = operation + " = " + result;
    //adds content to p element 
    document.getElementById("history").appendChild(historyItem);
    //add event listener
    document.getElementById(newId).addEventListener("click", function() {
        returnToCalc(newId);
    });
}

//function to return history item to calculator
function returnToCalc(x) {
    var query = document.getElementById(x).innerHTML;
    //remove result just require the operation
    var operation = query.split('=')[0].replace(/\s/g, "");
    //adds to calculator screen
    clearAndAdd(operation);
}

//function to remove current on screen content of calculator and add new 
function clearAndAdd (content) {
    document.getElementById("result-text").innerHTML = "";
    document.getElementById("result-text").innerHTML = content;
}

// searches for history item ID's and adds one to give unique id. 
function getNextNum () {
    var classList = document.getElementsByClassName("history-item");
    //length of history
    var length = classList.length;
    // add one and passing to addHistory()
    var result = length + 1;
    return result;
}

// assess if two operands are togther and prevents input
function operandAssesment (a) {
    var results = document.getElementById("result-text").innerHTML;
    var resultsList = results.split('');
    //last item entered by user
    var x = resultsList.pop();
    //if last item is a number allows operator to be inputted
    if (x === "1" || x === "2" || x === "3" || x === "4" || x === "5" || x === "6" || x === "7" || x === "8" || x === "9" || x === "0" || x === "(" || x === ")") {
        addToCalc(a);
    }
}

// allows negative input after single operator 
function negativeAssesment () {
    var results = document.getElementById("result-text").innerHTML;
    var resultsList = results.split('');
    var x = resultsList.pop();
    var y = resultsList.pop();
    // prevents more than 2 minus signs
    if (x !== "-" && y !== "-") {
        addToCalc("-");
    }
}

// adds user input into the calculator screen
function addToCalc(a) {
    //ensurs display is not full
    var maxCheck = checkMaximum();
    var display = document.getElementById("result-text").innerHTML;
    if (maxCheck === "notFull") {
        //append user input onto string
        var result = document.getElementById("result-text");
        var input = document.createTextNode(a);
        result.appendChild(input);
        //clears display if Syntax error shown and user presses button
        if (display == "Syntax Error" || display == "Infinity" || display == "undefined") {
            clearAll();
            display = document.createTextNode(a);
        }
    }
}

//checks number of items in display 
function checkMaximum () {
    resultList = document.getElementById("result-text").innerHTML;
    var resultArray = resultList.split('');
    var length = resultArray.length;
    if (length <= 16) {
        var result = "notFull";
        return result;
    } else {
        // calc full provided to user as alert
        alert("Calculator full. Press C to delete single item ot AC to delete all.");
    }

}

function canClose () {
    var query = document.getElementById("result-text").innerHTML;
    if (query.indexOf("(") > -1) {
        addToCalc(")");
    }
}

// dark mode event listener
document.getElementById("dark-mode").addEventListener("click", function() {
    darkMode();
});

// adds all dark classes 
function darkMode() {
    var body = document.body;
    body.classList.toggle("dark-body");

    var background = document.getElementById("calc-outer");
    background.classList.toggle("dark-background");

    var calc = document.getElementById("container");
    calc.classList.toggle("dark-calculator");

    var result = document.getElementById("result");
    result.classList.toggle("dark-result");

    var darkBtn = document.getElementById("dark-mode");
    darkBtn.classList.toggle("dark-btn");

    var history = document.getElementById("clear-history");
    history.classList.toggle("dark-btn");

    document.querySelectorAll("button").forEach(item => {
        item.classList.toggle("dark-button");
    });

    //loop to give operator buttons dark class
    const operator = ["open-bracket", "close-bracket", "division", "multiply", "minus", "point", "plus"];
    const special = ["equals", "clear", "ac"];
    var i = 1;
    while (i < 8) {
        var id = operator.pop();
        var x = document.getElementById(id);
        x.classList.toggle("dark-operator");
        i += 1;
    }

    //loop to give special buttons dark class
    var e = 1;
    while (e < 4) {
        var specialButton = special.pop();
        var y = document.getElementById(specialButton);
        y.classList.toggle("dark-special");
        e += 1;
    }
}