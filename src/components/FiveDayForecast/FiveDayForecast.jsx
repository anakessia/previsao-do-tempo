import './FiveDayForecast.css';

function FiveDayForecast({ extendedForecast }) {
    console.log(extendedForecast)

    let processedForecast = {}

    for (let forecast of extendedForecast.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!processedForecast[date]) {
            processedForecast[date] = forecast
        }
    }

    const nextFiveDays = Object.values(processedForecast).slice(1, 6);

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "2-digit",
        });

        return newDate;
    }

    return (
        <div className='weather-container'>
            <h3>Previsão para os Próximos 5 Dias</h3>
            <div className='five-days-list'>
                {nextFiveDays.map((forecast) => (
                    <div key={forecast.dt} className='five-days-item'>
                        <p className='forecast-date'>{convertDate(forecast)}</p>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
                        <p className='forecast-description'>{forecast.weather[0].description}</p>
                        <p>
                            {Math.round(forecast.main.temp_min)}°C min /{''}
                            {Math.round(forecast.main.temp_max)}°C max
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FiveDayForecast;
