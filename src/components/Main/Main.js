import './Main.css';
import WeatherForm from '../../containers/WeatherForm/WeatherForm';
import WeatherDate from '../WeatherDate/WeatherDate';
import WeatherCard from '../../containers/WeatherCard/WeatherCard';

function Main() {

    return (
        <div className='weather--wrapper'>
            <WeatherForm />
            <WeatherDate />
            <WeatherCard />
        </div>
    )
}

export default Main;