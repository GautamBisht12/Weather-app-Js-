// document.addEventListener("DOMContentLoaded", () => {
 
 const apikey = "d69c545bf2748eb5f457292f619fe586";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-weather input");
const searchBtn = document.querySelector(".search-weather button");
const weatherIcon = document.querySelector(".weather-icon");

const checkWeather = async (city) => {
  const res = await fetch(apiUrl + city + `&appid=${apikey}`);
  
  if(res.status === 404){
    document.querySelector(".error-weather").style.display = "block";
    document.querySelector(".weather").style.display = "none";
} 

else{
  const data = await res.json();
  
  console.log(data);
  
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + " °C";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  
  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Humidity") {
    weatherIcon.src = "images/humidity.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main === "rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "images/snow.png";
  } else if (data.weather[0].main === "Wind") {
    weatherIcon.src = "images/wind.png";
  }
  
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error-weather").style.display = "none";
  
  
  };
}


searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);

})
// });
