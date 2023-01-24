function getDefaultWeather() {
  let defaultCity = 'Houston';
  let defaultState = 'TX';
  weatherLocation.textContent = `${defaultCity}, ${defaultState}`;
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${defaultCity},${defaultState},USA&limit=1&appid=${apiKey}`
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
          let windDataOne = data.list[4].wind.speed;
          let humidityDataOne = data.list[4].main.humidity;
          let tempDataOne = data.list[4].main.temp;
          let descDataOne = data.list[4].weather[0].description;
          let iconDataOne = data.list[4].weather[0].icon;
          let dateDataOne = data.list[4].dt_txt;
          let dateDayJSOne = dayjs(dateDataOne).format('M/DD/YY');
          dateOne.textContent = dateDayJSOne;
          humidityOne.textContent = `Relative Humidity: ${humidityDataOne}%`;
          feelsLikeOne.textContent = `Temp: ${tempDataOne} degrees`;
          windOne.textContent = `Wind: ${windDataOne} mph`;
          descOne.textContent = descDataOne;
          iconOne.setAttribute(
            'src',
            `http://openweathermap.org/img/w/${iconDataOne}.png`
          );
          // Day two
          let windDataTwo = data.list[12].wind.speed;
          let humidityDataTwo = data.list[12].main.humidity;
          let tempDataTwo = data.list[12].main.temp;
          let descDataTwo = data.list[12].weather[0].description;
          let iconDataTwo = data.list[12].weather[0].icon;
          let dateDataTwo = data.list[12].dt_txt;
          let dateDayJSTwo = dayjs(dateDataTwo).format('M/DD/YY');
          dateTwo.textContent = dateDayJSTwo;
          humidityTwo.textContent = `Relative Humidity: ${humidityDataTwo}%`;
          feelsLikeTwo.textContent = `Temp: ${tempDataTwo} degrees`;
          windTwo.textContent = `Wind: ${windDataTwo} mph`;
          descTwo.textContent = descDataTwo;
          iconTwo.setAttribute(
            'src',
            `http://openweathermap.org/img/w/${iconDataTwo}.png`
          );
          // day three
          let windDataThree = data.list[20].wind.speed;
          let humidityDataThree = data.list[20].main.humidity;
          let tempDataThree = data.list[20].main.temp;
          let descDataThree = data.list[20].weather[0].description;
          let iconDataThree = data.list[20].weather[0].icon;
          let dateDataThree = data.list[20].dt_txt;
          let dateDayJSThree = dayjs(dateDataThree).format('M/DD/YY');
          dateThree.textContent = dateDayJSThree;
          humidityThree.textContent = `Relative Humidity: ${humidityDataThree}%`;
          feelsLikeThree.textContent = `Temp: ${tempDataThree} degrees`;
          windThree.textContent = `Wind: ${windDataThree} mph`;
          descThree.textContent = descDataThree;
          iconThree.setAttribute(
            'src',
            `http://openweathermap.org/img/w/${iconDataThree}.png`
          );
          // day four
          let windDataFour = data.list[28].wind.speed;
          let humidityDataFour = data.list[28].main.humidity;
          let tempDataFour = data.list[28].main.temp;
          let descDataFour = data.list[28].weather[0].description;
          let iconDataFour = data.list[28].weather[0].icon;
          let dateDataFour = data.list[28].dt_txt;
          let dateDayJSFour = dayjs(dateDataFour).format('M/DD/YY');
          dateFour.textContent = dateDayJSFour;
          humidityFour.textContent = `Relative Humidity: ${humidityDataFour}%`;
          feelsLikeFour.textContent = `Temp: ${tempDataFour} degrees`;
          windFour.textContent = `Wind: ${windDataFour} mph`;
          descFour.textContent = descDataFour;
          iconFour.setAttribute(
            'src',
            `http://openweathermap.org/img/w/${iconDataFour}.png`
          );
          // day five
          let windDataFive = data.list[36].wind.speed;
          let humidityDataFive = data.list[36].main.humidity;
          let tempDataFive = data.list[36].main.temp;
          let descDataFive = data.list[36].weather[0].description;
          let iconDataFive = data.list[36].weather[0].icon;
          let dateDataFive = data.list[36].dt_txt;
          let dateDayJSFive = dayjs(dateDataFive).format('M/DD/YY');
          dateFive.textContent = dateDayJSFive;
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
