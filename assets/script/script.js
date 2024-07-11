document.getElementById("open-bracket").addEventListener("click", function() {
    addToCalc("(");
});
document.getElementById("close-bracket").addEventListener("click", function() {
    addToCalc(")");
});
document.getElementById("percent").addEventListener("click", function() {
    addToCalc("%");
});
document.getElementById("ac").addEventListener("click", function() {
    addToCalc("ac");
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
    addToCalc("÷");
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
    addToCalc("x");
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
    addToCalc("-");
});
document.getElementById("0").addEventListener("click", function() {
    addToCalc("0");
});
document.getElementById("point").addEventListener("click", function() {
    addToCalc(".");
});
document.getElementById("equals").addEventListener("click", function() {
    addToCalc("=");
});
document.getElementById("plus").addEventListener("click", function() {
    addToCalc("+");
});


  function addToCalc(a) {
    text = document.getElementById("result-text").innerHTML;
    document.getElementById("result-text").innerHTML = text + a;
  }