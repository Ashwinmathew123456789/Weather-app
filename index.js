let api_key = "071269b30c859611df3fcf53dc2b546c"
let city_name = document.getElementById("city_name")
let weather = document.getElementById("weather")
let img = document.getElementById("img")
let temp = document.getElementById("temprature")
let humidity = document.getElementById("humidity")
let wind_speed = document.getElementById("wind_speed")

function cheek() {
  let input = document.getElementById("input").value

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${api_key}&units=metric`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    weather.textContent = data.weather[0].main
    humidity.textContent = "humidity: " + data.main.humidity
    temprature.textContent = data.main.temp
    wind_speed.textContent = "wind: "+ data.wind.speed + " m/s"
    city_name.textContent = input

    if (weather.textContent === "Clear") {
      img.src = "sunny.png"
    }
  else if (weather.textContent === "Clouds") {
      img.src = "cloud.png"
    }
    else if (weather.textContent === "Rain") {
      img.src = "rain_cloud.png"
    }
    
    else if (weather.textContent === "Thunderstorm") {
      img.src = "thunder_cloud_and_rain.png"
    }
   else if (weather.textContent === "Snow") {
      img.src = "snow_cloud.png"
    }
  })
  .catch(err => {
    weather.textContent = "Sorry an error occured";
    wind_speed.textContent = "wind speed: "
    humidity.textContent = "humidity: "
    img.src = ""
    temp.textContent = ""
    weather.style.colour = "hsl(360,91.5%,54.1%)"
    city_name.textContent = "Invalid city or cheek your internet connection"
  })
}
console.log("hai")