import './WeatherDate.css';
import { useState } from 'react';


const WeatherDate =()=> {

    const [startDate, setStartDate] = useState(new Date());

    const day = startDate.getDate() < 10 ? '0' + startDate.getDate() : startDate.getDate();
    const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthArray[startDate.getMonth()];
    const year = startDate.getFullYear();
    
    return (
        <div className='weather-data'>
            <p className='weather-data__element'>{ day }</p>
            <p className='weather-data__element'>{ month }</p>
            <p className='weather-data__element'>{ year }</p>
        </div>
    )
}

export default WeatherDate;