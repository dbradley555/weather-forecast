// current weather
const weatherLocation = document.getElementById('w-location');
const desc = document.getElementById('w-desc');
const details = document.getElementById('w-details');
const icon = document.getElementById('w-icon');
const humidity = document.getElementById('w-humidity');
const feelsLike = document.getElementById('w-feels-like');
const wind = document.getElementById('w-wind');

// day one forecast
const weatherLocationOne = document.getElementById('w-location-one');
const descOne = document.getElementById('w-desc-one');
const detailsOne = document.getElementById('w-details-one');
const iconOne = document.getElementById('w-icon-one');
const humidityOne = document.getElementById('w-humidity-one');
const feelsLikeOne = document.getElementById('w-feels-like-one');
const windOne = document.getElementById('w-wind-one');

// day two forecast
const weatherLocationTwo = document.getElementById('w-location-two');
const descTwo = document.getElementById('w-desc-two');
const detailsTwo = document.getElementById('w-details-two');
const iconTwo = document.getElementById('w-icon-two');
const humidityTwo = document.getElementById('w-humidity-two');
const feelsLikeTwo = document.getElementById('w-feels-like-two');
const windTwo = document.getElementById('w-wind-two');

// day three forecast
const weatherLocationThree = document.getElementById('w-location-three');
const descThree = document.getElementById('w-desc-three');
const detailsThree = document.getElementById('w-details-three');
const iconThree = document.getElementById('w-icon-three');
const humidityThree = document.getElementById('w-humidity-three');
const feelsLikeThree = document.getElementById('w-feels-like-three');
const windThree = document.getElementById('w-wind-three');

// day four forecast
const weatherLocationFour = document.getElementById('w-location-four');
const descFour = document.getElementById('w-desc-four');
const detailsFour = document.getElementById('w-details-four');
const iconFour = document.getElementById('w-icon-four');
const humidityFour = document.getElementById('w-humidity-four');
const feelsLikeFour = document.getElementById('w-feels-like-four');
const windFour = document.getElementById('w-wind-four');

// day five forecast
const weatherLocationFive = document.getElementById('w-location-five');
const descFive = document.getElementById('w-desc-five');
const detailsFive = document.getElementById('w-details-five');
const iconFive = document.getElementById('w-icon-five');
const humidityFive = document.getElementById('w-humidity-five');
const feelsLikeFive = document.getElementById('w-feels-like-five');
const windFive = document.getElementById('w-wind-five');

const saveBtn = document.getElementById('w-change-btn');
const apiKey = '711aa0e2365e7ec3ebd005a28ed7fc95';

// saveBtn.addEventListener('click', changeLocation);
saveBtn.addEventListener('click', getCurrentWeather);
// getLocationData();
// saveBtn.addEventListener('click', setLocationData);
document.addEventListener('DOMContentLoaded', getDefaultWeather);

saveBtn.addEventListener('click', (e) => {
  $('#locModal').modal('hide');
});
