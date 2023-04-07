const API_KEY = "91ba587f21133bc613e100ec8afe5c15";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
  
      const city = document.querySelector(".city");
      const weather = document.querySelector(".weather");
      city.innerText = `${data.name} 🇬🇧`;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);