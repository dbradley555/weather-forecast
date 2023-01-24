function getCurrentWeather() {
  let city = document.getElementById('city').value;
  let state = document.getElementById('state').value;
  weatherLocation.textContent = `${city}, ${state}`;
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},USA&limit=1&appid=${apiKey}`
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
          // Current
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
          // Day One
          let windDataOne = data.list[8].wind.speed;
          let humidityDataOne = data.list[8].main.humidity;
          let tempDataOne = data.list[8].main.temp;
          let descDataOne = data.list[8].weather[0].description;
          let iconDataOne = data.list[8].weather[0].icon;
          humidityOne.textContent = `Relative Humidity: ${humidityDataOne}%`;
          feelsLikeOne.textContent = `Temp: ${tempDataOne} degrees`;
          windOne.textContent = `Wind: ${windDataOne} mph`;
          descOne.textContent = descDataOne;
          iconOne.setAttribute(
            'src',
            `http://openweathermap.org/img/w/${iconDataOne}.png`
          );
          // Day two
          let windDataTwo = data.list[16].wind.speed;
          let humidityDataTwo = data.list[16].main.humidity;
          let tempDataTwo = data.list[16].main.temp;
          let descDataTwo = data.list[16].weather[0].description;
          let iconDataTwo = data.list[16].weather[0].icon;
          humidityTwo.textContent = `Relative Humidity: ${humidityDataTwo}%`;
          feelsLikeTwo.textContent = `Temp: ${tempDataTwo} degrees`;
          windTwo.textContent = `Wind: ${windDataTwo} mph`;
          descTwo.textContent = descDataTwo;
          iconTwo.setAttribute(
            'src',
            `http://openweathermap.org/img/w/${iconDataTwo}.png`
          );
          // day three
          let windDataThree = data.list[24].wind.speed;
          let humidityDataThree = data.list[24].main.humidity;
          let tempDataThree = data.list[24].main.temp;
          let descDataThree = data.list[24].weather[0].description;
          let iconDataThree = data.list[24].weather[0].icon;
          humidityThree.textContent = `Relative Humidity: ${humidityDataThree}%`;
          feelsLikeThree.textContent = `Temp: ${tempDataThree} degrees`;
          windThree.textContent = `Wind: ${windDataThree} mph`;
          descThree.textContent = descDataThree;
          iconThree.setAttribute(
            'src',
            `http://openweathermap.org/img/w/${iconDataThree}.png`
          );
          // day four
          let windDataFour = data.list[32].wind.speed;
          let humidityDataFour = data.list[32].main.humidity;
          let tempDataFour = data.list[32].main.temp;
          let descDataFour = data.list[32].weather[0].description;
          let iconDataFour = data.list[32].weather[0].icon;
          humidityFour.textContent = `Relative Humidity: ${humidityDataFour}%`;
          feelsLikeFour.textContent = `Temp: ${tempDataFour} degrees`;
          windFour.textContent = `Wind: ${windDataFour} mph`;
          descFour.textContent = descDataFour;
          iconFour.setAttribute(
            'src',
            `http://openweathermap.org/img/w/${iconDataFour}.png`
          );
          // day five
          let windDataFive = data.list[39].wind.speed;
          let humidityDataFive = data.list[39].main.humidity;
          let tempDataFive = data.list[39].main.temp;
          let descDataFive = data.list[39].weather[0].description;
          let iconDataFive = data.list[39].weather[0].icon;
          humidityFive.textContent = `Relative Humidity: ${humidityDataFive}%`;
          feelsLikeFive.textContent = `Temp: ${tempDataFive} degrees`;
          windFive.textContent = `Wind: ${windDataFive} mph`;
          descFive.textContent = descDataFive;
          iconFive.setAttribute(
            'src',
            `http://openweathermap.org/img/w/${iconDataFive}.png`
          );
        });
    });
}
