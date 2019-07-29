var pics = [
  "images/img_1.jpg",
  "images/img_2.jpg",
  "images/img_3.jpg",
  "images/img_4.jpg",
  "images/img_5.jpg",
  "images/img_6.jpg"
];
var btn = document.querySelector("button"); //Searching for button in html and selection here.
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function() {
  if (counter === 6) {
    counter = 0;
  }
  img.src = pics[counter]; //Changing the source of image to be one above images.
  counter = counter + 1; //Every time goes up on clicking and reset to 0 on 6.
});
//When ever button is clicked run this code.

/*Notes:
-HTML is the structure.
-css is the style.

JavaScript is the whole bunch of things.
-It's the interactivity.
-It's the loading of new data.
-It's the sending of HTTP request.
-It's what allows us to make games.*/
