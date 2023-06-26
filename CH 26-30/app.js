// ============================Q no 1=======================

// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var rate =3.45214
// var newrateSong=Math.round(rate)
// var floor=Math.floor(rate)
// var ceil=Math.ceil(rate)
// document.write("<h1>","round off value: ",newrateSong,"<br>","Floor value: ",floor,"<br>","ceil value: ",ceil,"</h1>")

// ============================Q no 2=======================

// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var rate =-2.673
// var newrateSong=Math.round(rate)
// var floor=Math.floor(rate)
// var ceil=Math.ceil(rate)
// document.write("<h1>","round off value: ",newrateSong,"<br>","Floor value: ",floor,"<br>","ceil value: ",ceil,"</h1>")

// ============================Q no 3=======================

// Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// ============================Q no 4=======================

// Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:

// var number=10
// var bigDecimal = Math.random(number);
// var improvedNum = (bigDecimal * 8);
// var numberOfStars = Math.floor(improvedNum);
// document.write("<h1>","random dice value: ",numberOfStars,"</h1>")

// ============================Q no 5=======================

// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// let random = Math.random();

// if (random < 0.5) {
//   document.write("<h1>","random coin value: ","Heads","</h1>");
// } else {
//   document.write("<h1>","random coin value: ","Tails","<br>","</h1>");
// }
// let Tosses = prompt("How many times do you want to toss the coin?");

// for (let i = 0; i < Tosses; i++) {
// }

// ============================Q no 6=======================

// Write a program that shows a random number between 1 
// and 100 in your browser


let randomNum ;
randomNum = Math.ceil(Math.random() * 100);
document.write("Random number between 1 and 100: " + randomNum)
