function getHistory(){
   return document.getElementById("history-value").innerHTML;
}
// alert(getHistory());
function printHistory(num){
    document.getElementById("history-value").innerHTML = num;
}

function getOutput(){
    return document.getElementById("output-value").innerHTML;
}
function printOutput(num1){
    if(num1==""){
        document.getElementById("output-value").innerHTML = num1;
    } else{
        document.getElementById("output-value").innerHTML = getFormattedNumber(num1);
    }
   
}
//put comma in output result
function getFormattedNumber(num1){
    if(num1=="-"){
        return "";
        printHistory("");
    }
    var n = Number(num1);
    var value = n.toLocaleString("en");
    return value;
}

// if(printOutput == ""){
//   return printHistory("");

// }

printOutput("0");
//reserve the output to the original value(remove the comma from the outputv resul)
function reverseNumberFormat(num1){
    return Number(num1.replace(/,/g,''));
}
// alert(reverseNumberFormat(getOutput()));

// deals with operator to function
var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id == "clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id == "backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){ // if output has a value
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output=getOutput();
            var history=getHistory();
            if(output=="" && history!=""){
                if(isNaN(history[history.length-1])){
                    history= history.substr(0,history.length-1);
                }
            }
            if(output != "" || history != ""){
                output = output==""? output :
                 reverseNumberFormat(output);
                // add output to history
                history = history + output;
                if(this.id=="="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory(history)
                }
                else{
                    // add any id selected to the history and print it history and make printOutput empty
                    history= history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });

}

// deals with the number output result
var number = document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        // alert("The number clicked: " + this.id);
        var output = reverseNumberFormat(getOutput())
        if(output!=NaN){
            output=output+this.id;
            printOutput(output); 
        }
    })
}

// the getOutput and getHistory is what display on the screen while
// the printOutput and printHistory are the result we are expecting