
const inputbox = document.querySelector('.input-box');
const weather_img = document.querySelector('.weather-img');
const searchbtn = document.querySelector('#searchbtn');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.getElementById('humdity');
const wind = document.getElementById('wind');
const location_not_found=document.querySelector(`.location-not-found`);
const weather_body=document.querySelector(`.weather-body`)


 async function checkweather(city){
    const api_key="9e7a2233df9b1f0e3add6ee0fd60e255";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;


    const weather_data= await fetch(`${url}`).then
    (response =>response.json());


    if(weather_data.cod ===`404`){

        location_not_found.style.display = "flex"
        weather_body.style.display ="none"

        console.log("error")
        return;
    }

      location_not_found.style.display = "none"
     weather_body.style.display ="flex"






    temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`

    description.innerHTML=`${weather_data.weather[0].description}`

    humidity.innerHTML=`${weather_data.main.humidity}%`;

    wind.innerHTML=`${weather_data.wind.speed}Km/h`

  switch (weather_data.weather[0].main) {

    case "Smoke":
        weather_img.src = "Smoke.png";
        break;
    case "Haze":
        weather_img.src = "Haze.jpeg";
        break;
    case "Clouds":
        weather_img.src = "cloud.png";
        break;
    case "Clear":
        weather_img.src = "clear.png";
        break;
    case "Rain":
        weather_img.src = "rain.png";
        break;
    case "Mist":
        weather_img.src = "mist.png";
        break;
     case "snow":
        weather_img.src = "snow.png";
        break;
     
    default:
        weather_img.src = "404.png";
}




}


searchbtn.addEventListener('click', ()=>{
    checkweather(inputbox.value);

}
);


