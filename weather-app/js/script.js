let weatherData;

const $weather = $("#weather");
const $temperature = $("#temperature");
const $feels = $("#feels");
const $input = $('input[type=text]');

function handleGetData(event) {
  $.ajax({
    URL: "https://api.openweathermap.org/data/2.5/weather?q=pasadena&appid=01a0da2a36f369665070a8130312e823&units=imperial" + userInput
  }).then(
    (data) => {
      console.log(data);
      weatherData = data;
      render();
    },
    (error) => {
      console.log("Something went wrong: ", error);
    }
  );
}

function render() {
  $weather.text(weatherData.Weather);
  $temperature.text(weatherData.Temperature);
  $feels.text(weatherData.Feels);
}

$('form').on('submit', handleGetData);

// console.log("It's alive!");