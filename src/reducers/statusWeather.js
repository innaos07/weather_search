const statusWeather =(state = { 
    loading: false, 
    error: null, 
}, action)=> {

    switch (action.type) {

        case 'LOADING_DATA':
            return {  
                        loading: true, 
                        error: null,
                    }

        case 'LOADED_DATA':
            return  {   ...state,
                        loading: false, 
                    }

        case 'FAILURE_DATA':
            return  {   
                        loading: false,
                        error: action.err,

                    } 
                        
        default: 
            return state;
    }
}

export default statusWeather;