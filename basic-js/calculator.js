result=0;

window.onload = function display() {
console.log(result);
var display = document.getElementById("output");
display.value = result;

var numpress = document.getElementById("number");
numpress.addEventListener("click", function(event) {
    var num = event.target;
    var numvalue = num.value;
    if (result==0 && numvalue==="0"){
    display.value=result;
    }
    if (result==0 && numvalue != "0") {
    result = numvalue;
    }
    else {
    result += numvalue;
    }
    display.value = result;
});


}