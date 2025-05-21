const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&APPID=6e1c069e70da582a0591cf8f58953e6e';

async function getWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&APPID=6e1c069e70da582a0591cf8f58953e6e');
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            return await data;
        } else
        {
            throw Error(await response.text());            
        }
    } catch (error) {
        console.console.error('Something went wrong when fetching the weather data', error);
    }
}

async function displayWeatherData() {
    weatherData = await getWeather();
    currentTemp.textContent = weatherData.main.temp;
    const iconCode = weatherData.weather[0].icon.slice(0, 2);

    if (iconCode == '01') {
        weatherIcon.src = "images/weather/brightness-high.svg";
    }else if (iconCode == '02'){
        weatherIcon.src = "images/weather/cloud-sun.svg";
    }else if (iconCode == '03'){
        weatherIcon.src = "images/weather/cloudy.svg";
    }else if (iconCode == '04'){
        weatherIcon.src = "images/weather/clouds.svg";
    }else if (iconCode == '09'){
        weatherIcon.src = "images/weather/cloud-drizzle.svg";
    }else if (iconCode == '10'){
        weatherIcon.src = "images/weather/cloud-rain.svg";
    }else if (iconCode == '11'){
        weatherIcon.src = "images/weather/cloud-lightning-rain.svg";
    }else if (iconCode == '13'){
        weatherIcon.src = "images/weather/cloud-snow.svg";
    }else if (iconCode == '50'){
        weatherIcon.src = "images/weather/cloud-fog.svg";
    }else{
        weatherIcon.src = "images/weather/patch-question.svg";
    }

    captionDesc.textContent = weatherData.weather[0].description;

}

displayWeatherData();