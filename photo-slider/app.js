var pics = [
  "images/img_1.jpg",
  "images/img_2.jpg",
  "images/img_3.jpg",
  "images/img_4.jpg",
  "images/img_5.jpg",
  "images/img_6.jpg"
];
var img = document.querySelector("img");
var btn = document.querySelector("button");
var counter = 1;
btn.addEventListener("click", function() {
  img.src = pics[2];
});

/*Notes:
-HTML is the structure.
-css is the style.

JavaScript is the whole bunch of things.
-It's the interactivity.
-It's the loading of new data.
-It's the sending of HTTP request.
-It's what allows us to make games.*/
