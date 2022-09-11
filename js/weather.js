const API_KEY = "f7f30b2269a3a8c63bf61426d56dbc02";
const locationTab = document.querySelector("#weather span:first-child");
const weathTab = document.querySelector("#weather span:last-child");

function onGeoOk(position){ 
    const lat= position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url);

    console.log(url)

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationTab.innerText = data.name;
      weathTab.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find location");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);