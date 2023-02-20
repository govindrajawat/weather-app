

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

let liveBtn = document.getElementById('live-btn');
liveBtn.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      }
  );
});



// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '014aec4088msh601c3e18dae15ecp1786f9jsn8a26a256845b',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gwalior', options)
// 	.then(response => response.json())
// 	.then(response => {console.log(response)
//   temp.innerHTML = response.temp;
      
//   })
// 	.catch(err => console.error(err));



let signInBtn = document.getElementById("signIn");
let signUpBtn = document.getElementById("signUp");
let app = document.querySelector(".app");
signInBtn.addEventListener("click", () => {
  app.classList.remove("swap");
});
signUpBtn.addEventListener("click", () => {
  app.classList.add("swap");
});

let temp = document.getElementById('temp');
let toggleButton = document.querySelector('.dark-button');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});
