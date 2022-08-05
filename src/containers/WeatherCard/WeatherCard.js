import './WeatherCard.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
import Spinner from '../../components/Spinner/Spinner';
import {fetchPosts} from '../../action';
import { useDispatch } from 'react-redux';
import  { getCity, getData, getStatus }  from '../../selectors';


const WeatherCard =()=> {
    console.log('render')

    const data = useSelector(getData);
    const status = useSelector(getStatus);
    
    const city = useSelector(getCity);
    // console.log(city,data)
    const dispatch = useDispatch();

    // console.log('data', data,  'status', status)

    useEffect(() => {
        console.log('???')
        console.log('fetchins')
        dispatch(fetchPosts(city))

    },[])
    
    return (

        <div className='weather-card'>
              {console.log('!!!!')}
            { status.error ? <p>city not found</p> : null }

            { status.loading ? <Spinner /> : null}

            { (data.isLoaded && !status.loading) ? <WeatherInfo data={data}/> : null }
            
            
        </div>
    )
}

export default WeatherCard;