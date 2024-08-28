const apikey = "dbcd3a962c37d51885a63dea8c089d8f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
/*
async function checkWeather(city) {
    const response = await fetch(apiurl + city +`&appid=${apikey}`);

    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
   

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./assets/clouds.png"
    }else if(data.weather[0].main == "Clear"){
         weatherIcon.src = "./assets/clear.png"
    }else if(data.weather[0].main == "Rain"){
         weatherIcon.src = "./assets/rain.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./assets/drizzle.png"
   }else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "./assets/mist.png"
   }

   document.querySelector(".weather").style.display = "block";
   document.querySelector(".details").style.display = "flex";
   document.querySelector(".error").style.display = "none";
  

    }
    
   
}

*/

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".details").style.display = "none";
        return;
    }

    const data = await response.json();

    // Check if the response contains valid data
    if (data.cod === "404" || !data.weather) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".details").style.display = "none";
        return;
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./assets/clouds.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./assets/clear.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./assets/rain.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./assets/drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./assets/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".details").style.display = "flex";
    document.querySelector(".error").style.display = "none";
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

})
