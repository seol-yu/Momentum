const API_KEY = "90b618f604a764b02e88efce0748170a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(
        "#seolyu__weather span:first-child"
      );
      const city = document.querySelector("#seolyu__weather span:last-child");
      city.innerText = data.name;
      const weatherEmoji = data.weather[0].main;
      if (weatherEmoji === "Clear") {
        weather.innerText = `🌞 / ${data.main.temp}°`;
      } else {
        weather.innerText = `${weatherEmoji} / ${data.main.temp}°`;
      }
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
