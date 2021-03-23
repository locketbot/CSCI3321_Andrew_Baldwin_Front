function clear() {
    document.getElementById("displayed").innerHTML = "0";
}

<button id="r1-1" onclick="clear()" style="width: 210px;">
    AC
</button>

function resetZero() {
    var value = document.getElementById("displayed").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("displayed").innerHTML = value;
    }
}

function perc() {
    var value = document.getElementById("displayed").innerHTML;
    value = value / 100;
    document.getElementById("displayed").innerHTML = value;
}

function calcdisplay(calcvalue) {
    resetZero()
    document.getElementById("displayed").innerHTML += calcvalue;
}

function calculate() {
    resetZero()
    var equation = document.getElementById("displayed").innerHTML;
    var solved = eval(equation);
    document.getElementById('displayed').innerHTML = solved;
}
