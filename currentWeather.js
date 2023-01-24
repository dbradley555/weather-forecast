// function getLocationData() {
//   if (localStorage.getItem('city') === 'undefined') {
//     city = defaultCity;
//   } else {
//     city = localStorage.getItem('city');
//   }
//   if (localStorage.getItem('state') === 'undefined') {
//     state = defaultState;
//   } else {
//     state = localStorage.getItem('state');
//   }
//   return {
//     city: city,
//     state: state,
//   };

// function setLocationData() {
//   localStorage.setItem('city', city);
//   localStorage.setItem('state', state);
// }

function getCurrentWeather() {
  let city = document.getElementById('city').value;
  let state = document.getElementById('state').value;
  weatherLocation.textContent = `${city}, ${state}`;
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},USA&limit=1&appid=${apiKey}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let locationParameters = data;
      let cityLat = locationParameters[0].lat;
      let cityLon = locationParameters[0].lon;

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&cnt=40&appid=${apiKey}&units=imperial`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          let windData = data.list[0].wind.speed;
          let humidityData = data.list[0].main.humidity;
          let tempData = data.list[0].main.temp;
          let descData = data.list[0].weather[0].description;
          let iconData = data.list[0].weather[0].icon;
          humidity.textContent = `Relative Humidity: ${humidityData}%`;
          feelsLike.textContent = `Temp: ${tempData} degrees`;
          wind.textContent = `Wind: ${windData} mph`;
          desc.textContent = descData;
          icon.setAttribute(
            'src',
            `http://openweathermap.org/img/w/${iconData}.png`
          );
        });
    });
}

// function changeLocation(city, state) {
//   city = city;
//   state = state;
// }
