import './Spinner.css';
import loading from '../../img/loading.svg';


const Spinner =()=> {
       
    return (
        <div className='weather-card__loading'>
            <img src = {loading} alt='Loading'/>
        </div> 
    )
} 

export default Spinner;


         