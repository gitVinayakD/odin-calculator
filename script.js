//basic functions
function add(num1,num2) {
    return num1+num2;
}

function subtract(num1,num2) {
    return num1-num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(num1,num2) {
    return num1/num2;
}

//base variables
let operator = "";
let number1 = 0;
const resultsText = document.querySelector('.resultsText');
const midCalcText = document.querySelector('.midCalcText');

//function that does the math
let run = function(num1, num2, op){
    if (op==="÷"){
        return divide(num1,num2);
    }else if(op==="-"){
        return subtract(num1,num2); 
    }else if(op==="+"){
        return add(num1,num2); 
    }else if(op==="x"){
        return multiply(num1,num2); 
    }
};

//event listener for clicking the number divs
const numbers = document.querySelectorAll('.number')
numbers.forEach((number) => {
    number.addEventListener('click', function(e) {
        if (resultsText.innerText.length<10){
            if (done){
                resultsText.innerText = e.target.innerText;
                done = false;
            }else{
                if (resultsText.innerText == "0" || resultsText.innerText == " "){
                    resultsText.innerText = e.target.innerText;
                }else{
                    resultsText.innerText += e.target.innerText
                }
            }
        }
    }
    );
});


//when decimal is clicked
const decimal = document.querySelector('.decimal');
decimal.addEventListener('click',function(e){
    if (!resultsText.innerText.includes('.')){
        resultsText.innerText += e.target.innerText;
    }
});

//when operators are clicked
const operators = document.querySelectorAll('.operator')
operators.forEach((oper) => {
    oper.addEventListener('click', function(e) {
        if (operator ==""){
            operator = e.target.innerText;
            number1 = parseFloat(resultsText.innerText);
            midCalcText.innerText = number1 + " " + operator;
            resultsText.innerText = " ";
        }else{
            if(!resultsText.innerText == " "){
                number1 = run(number1,parseFloat(resultsText.innerText),operator);
                operator = e.target.innerText;
                midCalcText.innerText= number1 + " "+ operator;
                resultsText.innerText = " ";
            }else{
                operator = e.target.innerText;
                midCalcText.innerText = number1 + " " + operator;
            }
        }
    }
    );
});

//when equals is clicked
let done = false;
const equals = document.querySelector('.equals');
equals.addEventListener('click',function(e){
    if (!operator == ""){
        number1 = run(number1,parseFloat(resultsText.innerText),operator);
        midCalcText.innerText += " " + resultsText.innerText;
        resultsText.innerText = number1;
        operator = "";
        done = true;
    }
});

//when clear is clicked
const clear = document.querySelector('.clear');
clear.addEventListener('click',function(e){
    operator = "";
    number1 = 0;
    midCalcText.innerText = 0;
    resultsText.innerText = 0;
});


//when delete is clicked
const del = document.querySelector('.delete');
del.addEventListener('click',function(e){
    if (done){
        resultsText.innerText = 0;
    }else{
        resultsText.innerText = resultsText.innerText.slice(0, -1);
    }
});

//added hover color for all buttons
const littleButtons = document.querySelectorAll('.littleButton')
littleButtons.forEach((lb) => {
    lb.addEventListener('mouseenter', function(e) {
        e.target.style.setProperty('background-color','#D3D3D3');
    })
    lb.addEventListener('mouseleave', function(e) {
        e.target.style.setProperty('background-color','white');
    })
});

const bigButtons = document.querySelectorAll('.buttonBig')
bigButtons.forEach((bb) => {
    bb.addEventListener('mouseenter', function(e) {
        e.target.style.setProperty('background-color','#D3D3D3');
    })
    bb.addEventListener('mouseleave', function(e) {
        e.target.style.setProperty('background-color','white');
    })
});
