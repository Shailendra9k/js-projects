//Id's targeted for all theree arms
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//These lets contains degerees we want to turn each of these arms.
//Numbers allocated will correspond with the actual time using math operators.

let hrPosition = 90;
let minPosition = 130;
let secPosition = 267;

//Get the current hour, minute and second with the Date() object

var date = new Date();
console.log(date);
//Inline styles to transform on each of the objects.

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
