//Project breakdown
//Id's targeted for all theree arms
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//Get the current hour, minute and second with the Date() object

var date = new Date();
console.log(date);
//WE can pull out whatever information we want from the data object using methods.

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hours: " + hr + " Minutes: " + min + " Seconds " + sec);

/* 
We have to figure out how to convert this obtained value 
into the correct degrees on a circle so that the arms
are positined correctly to show the time.

That requires some math, and it all starts with dividing up clock face 
into the correct number of sections.

Because  the second arm splits the clock face into 60 componets.
There are 60 seconds in one minute, so it takes 60 steps to go around the circle.
That means we have to take 360 degrees, divide it by 60, and then
add up how many seconds. or how many segements, we want to move.

The same goes for the minute hand.
There are 60 minutes in an hour, and for the hour hand,
we divide the clock face up into 12,
because there are 12 hours on the clock face.

*/

//Showing the current time
//These lets contains degerees we want to turn each of these arms.
//Numbers allocated will correspond with the actual time using math operators.

let hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
let secPosition = (sec * 360) / 60; //Grab and convert them to degrees.

function runTheClock() {
  hrPosition = hrPosition + 3 / 360;
  minPosition = minPosition + 6 / 60;
  secPosition = secPosition + 6;
  //Using CSS to move clock hands
  //Inline styles to transform on each of the objects.

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);
