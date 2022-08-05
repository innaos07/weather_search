import './WeatherImage.css';


const WeatherImage =({data})=> {

    const id = data.weather.id;

    const image = (id > 801 && id <= 804) ? 'weather-card__image--cloudy' 
        : (id == 800) ? 'weather-card__image--sunny' 
        : (id == 801) ? 'weather-card__image--few-cloudy' 
        : ( (id >= 520 && id <= 531) || (id >= 300 && id <= 321)) ? 'weather-card__image--shower-rain' 
        : (id >= 500 && id <=504) ? 'weather-card__image--rain-sunny' 
        : (id >= 200 && id <= 232) ? 'weather-card__image--thunderstorm' 
        : (id >= 600 && id <= 622) ? 'weather-card__image--snow'
        : (id >= 701 && id <= 781) ? 'weather-card__image--mist' 
        : '';

    return (
        <div className={`weather-card__image ${image}`}></div>
    )
}

export default WeatherImage;
