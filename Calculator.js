function shownumber(numb){
    var input = document.getElementById("calculator-input")
    input.value += numb;
}

function clearinput(){
    var input = document.getElementById("calculator-input")
    input.value = " ";
}

function calculate(){
    var input = document.getElementById("calculator-input")
    var expression = eval(input.value);
    input.value = expression;   
}


function Mode(){
    var body = document.getElementsByTagName("body");
    console.log("body");
}