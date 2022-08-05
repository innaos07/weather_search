import { combineReducers } from 'redux';
import city from './city';
import weather from './weather';
import statusWeather from './statusWeather';

export default combineReducers ({
    city,
    weather,
    statusWeather
});