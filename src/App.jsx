import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'
import FiveDayForecast from './components/FiveDayForecast/FiveDayForecast'

function App() {
  const [cityWeather, setCityWeather] = useState()
  const [extendedForecast, setExtendedForecast] = useState()
  const inputRef = useRef()

  async function onSearchCity(){
    const cityName = inputRef.current.value
    const API_KEY = "9104e92b527e018fe4ddb79d79d84d0c"
    
    const WEATHER_API_URL= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=pt_br&units=metric`
    const FIVE_DAY_FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&lang=pt_br&units=metric`;


    const weatherResponse = await axios.get(WEATHER_API_URL)
    const forecastResponse = await axios.get(FIVE_DAY_FORECAST_API_URL)
    setCityWeather(weatherResponse.data)
    setExtendedForecast(forecastResponse.data)
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type='text' placeholder='Informe o nome da cidade'/>
      <button onClick={onSearchCity}>Buscar</button>

      {cityWeather && <WeatherInfo cityWeather={cityWeather}/>}
      {extendedForecast && <FiveDayForecast extendedForecast={extendedForecast}/>}
    </div>
   
  )
}

export default App
