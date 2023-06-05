// ======================Question no 1=========================

// let a =prompt("Enter your number");
// document.write("The value of a is :10" , "<br>");
// document.write("..........................","<br><br>");
// document.write("The value of ++a is :11", "<br>");
// document.write("Now the value of a is :11", "<br><br>");
// document.write("The value of ++a is :11", "<br>");
// document.write("Now the value of a is :12", "<br><br>");
// document.write("The value of --a is :11", "<br>");
// document.write("Now the value of a is :11", "<br><br>");
// document.write("The value of a-- is :11", "<br>");
// document.write("Now the value of a is :10", "<br><br>");

// ======================Question no 3=========================

// let a=prompt("enter your name");
// document.write('Hello! Zaiba');

// ======================Question no 5=========================

// var num = prompt("enter a number","");
// for(var i=1; i<=10;i++){
//     document.write("<div>");
//     document.write(num + " x " + i + " = " + i*num);
//     document.write("</div>")
// }

// ======================Question no 4=========================

var English = parseInt(prompt("Enter English Marks"));
var Maths = parseInt(prompt("Enter Maths Marks"));
var Urdu = parseInt(prompt("Enter Urdu Marks"));

function percentage (num1 , num2 , num3){
    var x = num1 + num2 + num3;
    var z = x/300 * 100 //percentage formula
    return z;
}
var Total = percentage (English, Maths, Urdu);
document.write("Total percentage is :" + Total + "%");