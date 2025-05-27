'use strict'
import { getTimeString, getDateStringFromUnix } from "./datetime.mjs";

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-description');
const weatherHumidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#rise');
const sunset = document.querySelector('#set');
const todayTemp = document.querySelector('#today');
const tomorrowTemp = document.querySelector('#tomorrow');
const thirdDayTemp = document.querySelector('#third-day');

const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=36.768446705675075&lon=-76.2666151320338&units=imperial&APPID=6e1c069e70da582a0591cf8f58953e6e';
const urlForcast = 'https://api.openweathermap.org/data/2.5/forecast?lat=36.768446705675075&lon=-76.2666151320338&units=imperial&appid=6e1c069e70da582a0591cf8f58953e6e'

function getDailyHighLow(forecastData) {
    const highTemps = {};
    const lowTemps = {};

    forecastData.forEach(entry => {
        const dateStr = getDateStringFromUnix(entry.dt);
        const temp = entry.main.temp;

        if (!highTemps[dateStr]) {
            highTemps[dateStr] = temp;
            lowTemps[dateStr] = temp;
        } else {
            highTemps[dateStr] = Math.max(highTemps[dateStr], temp);
            lowTemps[dateStr] = Math.min(lowTemps[dateStr], temp);
        }
    });

    return { highTemps, lowTemps };
}

async function getWeather() {
    try {
        const response = await fetch(urlWeather);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            return await data;
        } else
        {
            throw Error(await response.text());            
        }
    } catch (error) {
        console.error('Something went wrong when fetching the weather data', error);
    }
}

async function getForecast() {
    try {
        const response = await fetch(urlForcast);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            return await data;
        } else
        {
            throw Error(await response.text());            
        }
    } catch (error) {
        console.error('Something went wrong when fetching the forcase data', error);
    }
}

async function displayWeatherData() {
    const weatherData = await getWeather();
    const forecastData = await getForecast();
    currentTemp.textContent = weatherData.main.temp;
    const iconCode = weatherData.weather[0].icon.slice(0, 2);

    if (iconCode == '01') {
        weatherIcon.src = "images/weather/brightness-high.svg";
        weatherIcon.alt = 'Sunny';
    }else if (iconCode == '02'){
        weatherIcon.src = "images/weather/cloud-sun.svg";
        weatherIcon.alt = 'Partly cloudy';
    }else if (iconCode == '03'){
        weatherIcon.src = "images/weather/cloudy.svg";
        weatherIcon.alt = 'Cloudy';
    }else if (iconCode == '04'){
        weatherIcon.src = "images/weather/clouds.svg";
        weatherIcon.alt = 'Scattered clouds';
    }else if (iconCode == '09'){
        weatherIcon.src = "images/weather/cloud-drizzle.svg";
        weatherIcon.alt = 'Light rain';
    }else if (iconCode == '10'){
        weatherIcon.src = "images/weather/cloud-rain.svg";
        weatherIcon.alt = 'Rain';
    }else if (iconCode == '11'){
        weatherIcon.src = "images/weather/cloud-lightning-rain.svg";
        weatherIcon.alt = 'Thunderstorm';
    }else if (iconCode == '13'){
        weatherIcon.src = "images/weather/cloud-snow.svg";
        weatherIcon.alt = 'Snow';
    }else if (iconCode == '50'){
        weatherIcon.src = "images/weather/cloud-fog.svg";
        weatherIcon.alt = 'Fog';
    }else{
        weatherIcon.src = "images/weather/patch-question.svg";
        weatherIcon.alt = 'Sunny'
    }

    weatherDesc.textContent = weatherData.weather[0].description;
    weatherHumidity.textContent = weatherData.main.humidity;
    sunrise.textContent = getTimeString(weatherData.sys.sunrise, weatherData.timezone);
    sunset.textContent = getTimeString(weatherData.sys.sunset, weatherData.timezone);
    const { highTemps, lowTemps } = getDailyHighLow(forecastData.list);
    const dates = Object.keys(highTemps);
    todayTemp.textContent = `${highTemps[dates[0]]}`;
    tomorrowTemp.textContent = `${highTemps[dates[1]]} / ${lowTemps[dates[1]]}`;
    thirdDayTemp.textContent = `${highTemps[dates[2]]} / ${lowTemps[dates[2]]}`;


}

displayWeatherData();
