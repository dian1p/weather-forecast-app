function getTemperature(response) {
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  let humidity = document.querySelector("#humid");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#winds");
  wind.innerHTML = response.data.wind.speed;
  let visibility = document.querySelector("#visible");
  visibility.innerHTML = response.data.visibility / 1000;
  let city = document.querySelector("#show-city");
  city.innerHTML = response.data.name;
  temperatureCelcius = response.data.main.temp;
  let iconWeather = document.querySelector("#icon");
  iconWeather.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);  
  }
  
let temperatureCelcius = null;

function changeCelcius(event) {
  event.preventDefault();
  toCelcius.classList.add("active");
  toFahrenheit.classList.remove("active");
  let celcius = document.querySelector("#temp");
  celcius.innerHTML = `${Math.round(temperatureCelcius)}°C`;
}

function changeFahrenheit(event) {
  event.preventDefault();
  toCelcius.classList.remove("active");
  toFahrenheit.classList.add("active");
  let fahrenheit = document.querySelector("#temp");
  fahrenheit.innerHTML = `${Math.round((temperatureCelcius * 9) / 5 + 32)}°F`;
}

  function submitCity(event) {
    event.preventDefault();
    let key = "88cb0b2a18f4a84cc455641324b32a73";
    let searchCity = document.querySelector("#city-input");
    let h2 = document.querySelector("h2");
    h2.innerHTML = searchCity.value;
    let showCity = searchCity.value;
    let url = `https://api.openweathermap.org/data/2.5/weather/?q=${showCity}&appid=${key}&units=metric`;
    axios.get(url).then(getTemperature);
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  
  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let key = "88cb0b2a18f4a84cc455641324b32a73";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    axios.get(url).then(getTemperature);
  }
  
  let form = document.querySelector("#signup-form");
  form.addEventListener("submit", submitCity);
  
  let currentLocation = document.querySelector("#current-button");
  currentLocation.addEventListener("submit", submitCity);

  let toCelcius = document.querySelector("#temp-cel");
  toCelcius.addEventListener("click", changeCelcius);
  
  let toFahrenheit = document.querySelector("#temp-fah");
  toFahrenheit.addEventListener("click", changeFahrenheit);

  let now = new Date();
  let year = now.getFullYear();
  let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  
  function formatDate(now) {
    return `${day[now.getDay()]}, ${now.getDate()}-${
      month[now.getMonth()]
    }-${year}`;
  }
  
  let date = document.querySelector("#get-date");
  date.innerHTML = formatDate(now);
  
  function formatTime(now) {
    let hours = now.getHours();
  
    let minutes = now.getMinutes();
  
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  }
  let hour = document.querySelector("#get-time");
  hour.innerHTML = formatTime(now);
  
  function days() {
    for (let i = 0; i < day.length; i++) {
      return day[(now.getDay() + 1 + i++) % 7];
    }
  }
  
  let nextDay = document.querySelector("#first-next");
  nextDay.innerHTML = days();
  
  function nextDays() {
    for (let i = 0; i < day.length; i++) {
      return day[(now.getDay() + 2 + i++) % 7];
    }
  }
  let secondDay = document.querySelector("#second-next");
  secondDay.innerHTML = nextDays();
  
  function secondNextDays() {
    for (let i = 0; i < day.length; i++) {
      return day[(now.getDay() + 3 + i++) % 7];
    }
  }
  let thirdDay = document.querySelector("#third-next");
  thirdDay.innerHTML = secondNextDays();
  
  function thirdNextDay() {
    for (let i = 0; i < day.length; i++) {
      return day[(now.getDay() + 4 + i++) % 7];
    }
  }
  let fourthDay = document.querySelector("#fourth-next");
  fourthDay.innerHTML = thirdNextDay();
  
  function fourthNextDay() {
    for (let i = 0; i < day.length; i++) {
      return day[(now.getDay() + 5 + i++) % 7];
    }
  }
  let fifthDay = document.querySelector("#fifth-next");
  fifthDay.innerHTML = fourthNextDay();
  