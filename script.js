// let button = document.getElementById('button');
// button.addEventListener('click', () => {
//     let input = document.getElementById('input').value;
//     let url = `https://api.teleport.org/api/urban_areas/slug:${input}/images/`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             let image = data.photos[0].image.web;
//             let imageContainer = document.getElementById('image-container');
//             imageContainer.innerHTML = `<img src="${image}" alt="image">`;
//         })
//         .catch(err => console.log(err));
// });

let changeLocation = document.getElementById("changeLocation");
let showWeather = document.getElementById("showWeather");
let app = document.querySelector(".app");
changeLocation.addEventListener("click", () => {
  app.classList.remove("swap");
});
showWeather.addEventListener("click", () => {
  app.classList.add("swap");
  run();
});

let liveBtn = document.getElementById("live-btn");
liveBtn.addEventListener("click", () => {
  app.classList.add("swap");

  navigator.geolocation.getCurrentPosition((position) => {
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "014aec4088msh601c3e18dae15ecp1786f9jsn8a26a256845b",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };
    console.log(lat, lon);
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=" + lat + "&lon=" + lon, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        temp.innerHTML = response.temp;
        wind.innerHTML = response.wind_speed;
        min.innerHTML = response.min_temp;
        max.innerHTML = response.max_temp;
        feels.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        cloud.innerHTML = response.cloud_pct;
      })
      .catch((err) => console.error(err));
  });
});

let run = () => {
  let city = document.getElementById("city");
  let pincode = document.getElementById("pincode");
  let state = document.getElementById("state");
  let country = document.getElementById("country");

  let temp = document.getElementById("temp");
  let wind = document.getElementById("wind");
  let min = document.getElementById("min");
  let max = document.getElementById("max");
  let feels = document.getElementById("feels");
  let humidity = document.getElementById("humidity");
  let cloud = document.getElementById("cloud");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "014aec4088msh601c3e18dae15ecp1786f9jsn8a26a256845b",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city.value +
      "&state=" + state.value + "&country=" + country.value + "&zip=" + pincode.value, options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp.innerHTML = response.temp;
      wind.innerHTML = response.wind_speed;
      min.innerHTML = response.min_temp;
      max.innerHTML = response.max_temp;
      feels.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      cloud.innerHTML = response.cloud_pct;
    })
    .catch((err) => console.error(err));
};

let toggleButton = document.querySelector(".dark-button");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
