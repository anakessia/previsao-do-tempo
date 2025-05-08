import './WeatherInfo.css';

function WeatherInfo({ cityWeather }) {

    return (
        <div className='weather-container'>
            <h2>{cityWeather.name}</h2>
            <div className='city-weather-info'>
                <img src={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`} alt="Weather Icon" />
                <p className='temperature'>{Math.round(cityWeather.main.temp)}°C</p>
            </div>
            <p className='description'>{cityWeather.weather[0].description}</p>

            <div className='weather-metrics'>
                <p>Sensação Térmica: {Math.round(cityWeather.main.feels_like)}°C</p>
                <p>Umidade: {cityWeather.main.humidity}%</p>
                <p>Pressão: {cityWeather.main.pressure}</p>
            </div>
        </div>
    );
}

export default WeatherInfo;
