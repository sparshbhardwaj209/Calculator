var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operand1 = 0;
var operand2 = null;
var operator = null;
var result = "";
var value;


for(var i =0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        if(this.getAttribute('data-value') == '='){
            result = eval(display.innerText);
            display.innerText = result;
        }else if(this.getAttribute('data-value')== 'C'){
            result = "";
            display.innerText = result;
        }else if(this.getAttribute('data-value') == 'back'){
            display.innerText = display.innerText.slice(0,-1);
        }
        else{
            value = this.getAttribute('data-value');
            display.innerText += value;
        }

    })
}

// for(var i = 0; i<buttons.length; i++){
//     buttons[i].addEventListener('click', function(){

//         var value = this.getAttribute('data-value');
//         if(value == '+'){ // if an operator is clicked
//             operator = '+';
//             operand1 = parseFloat(display.textContent);

//         }else if(value == '='){

//             operand2 = parseFloat(display.textContent);
//             var result = 
//             //use eval to get result
//             // show result on display

//         }else{
//             display.innerText += value;
//         }

//     });
// }