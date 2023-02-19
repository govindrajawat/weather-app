let toggleButton = document.querySelector('.dark-button');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position);
//     lon = position.coords.longitude;
//     lat = position.coords.latitude;
//     }
// );




// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '014aec4088msh601c3e18dae15ecp1786f9jsn8a26a256845b',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gwalior', options)
// 	.then(response => response.json())
// 	.then(response => {console.log(response)})
// 	.catch(err => console.error(err));


// https://api.teleport.org/api/urban_areas/slug:seattle/images/


let signInBtn = document.getElementById("signIn");
let signUpBtn = document.getElementById("signUp");
let app = document.querySelector(".app");
signInBtn.addEventListener("click", () => {
  app.classList.remove("swap");
});
signUpBtn.addEventListener("click", () => {
  app.classList.add("swap");
});