window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureSection = document.querySelector("degree-section");
  let temparatureSpan = document.querySelector("degree-section span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      //console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude; //Using this we can pulled out the information but what do we do this information.

      const proxy = "https://cors-anywhere.herokuapp.com/";

      const api = `${proxy}https://api.darksky.net/forecast/b6d6be2b08b83b70d8e17f5f4d3df8e5/${lat},${long}`;
      fetch(api) //Line 38
        .then(response => {
          return response.json(); //To convert information gained into JSON.
        })
        .then(data => {
          //console.log(data); //This is to see fetched data on console.
          const { temperature, summary, icon } = data.currently;

          //Set DOM Elements from the API

          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;

          //Set Icon
          setIcons(icon, document.querySelector(".icon"));

          //Conversion of Fahrenheit to Celsious:

          temperatureSection.addEventListener("click", () => {
            if (temparatureSpan.textContent === "F") {
              temparatureSpan.textContent = "C";
            } else {
              temparatureSpan.textContent = "F";
            }
          });
        });
    });
  }

  // Icon
  function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});

//General notes for reference purpose
//location, temparature-two big sections
//get latitude and longitude frou our location
//It's simple and built into Javascriipt
//Window.addEventListener()
//We can use this so after our page loaded, we can get the location
//So our page load and this function runs and everything inside here runs.
//If(navigator.geolocation) - if this thing exist in the browseer then we cand find the exact position of the user.

//We need to access weather from where, for that we need to pull that weather from some APIs.
//www.darksky.net --free one

//Then using template literal `` backtick we should copy and API address and place in inside.
//Then we have to modify two information
//first one is latitude, second one is longitude

//To get information we are going to use fetch()
//It basically tries to do a get request which is basically getting information from this following URL Placed above.

//The information we get from this API(Application Program Interface) is conventional, we've to take this information and convert it into JSON.
//So, with JSON we can easily use it in our JavaScript.
//To do that we have run code line 16

//To work on Icons
//skycons
//https://darkskyapp.github.io/skycons/
