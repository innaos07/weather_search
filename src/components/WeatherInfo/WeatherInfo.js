import './WeatherInfo.css';
import WeatherImage from '../WeatherImage/WeatherImage';


const WeatherInfo =({data})=> {

   

    const name = data.name;
    const status = data.weather.main;
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;

    return (
        <>
            <p className='weather-card__city' >{name}</p>
            <p>{status}</p>
            <WeatherImage data={data}/>
            <p className='weather-card__temp'> {temp} °C</p>
            <p>Feels like: {feelsLike} °C</p>
            <p>Humidity: {humidity} %</p> 
        </>
    )
}

export default WeatherInfo;