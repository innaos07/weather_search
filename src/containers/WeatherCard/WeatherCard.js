import './WeatherCard.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {fetchPosts} from '../../action';
import { useDispatch } from 'react-redux';
import  { getCity, getData, getStatus }  from '../../selectors';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';


const WeatherCard =()=> {

    const data = useSelector(getData);
    const status = useSelector(getStatus);
    const city = useSelector(getCity);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(city));
    },[])
    
    return (
        <div className='weather-card'>
            { status.error ? <ErrorMessage /> : null }

            { status.loading ? <Spinner /> : null}

            { (data.isLoaded && !status.loading) ? <WeatherInfo data={data}/> : null } 
        </div>
    )
}

export default WeatherCard;