import './WeatherForm.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../action';


const WeatherForm =()=> {

    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();

    const handlerSubmit =(e)=> {
        e.preventDefault();
        const text = searchInput.trim();
        if(!text){
            return;
        }
        dispatch(fetchPosts(text));
        setSearchInput('');
    }

    return (
        <div className='weather-form__wrapper'>
            <form className='weather-form' onSubmit={handlerSubmit}>
                <input 
                    type='text' 
                    className='weather-form__text' 
                    value={searchInput} 
                    placeholder="Searching your city..."
                    onChange={(e) => setSearchInput(e.target.value)}/>
                <button type='submit' className='btn weather-form__btn-search'></button>
            </form>
        </div>  
    )
}

export default WeatherForm;