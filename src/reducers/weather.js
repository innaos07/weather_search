const  weather =(state = { 
    isLoaded: false, 
    name: '', 
    main: {}, 
    weather: {} 
}, action)=> {

    switch (action.type) {

        case 'RESEIVE_DATA':
            return  {   
                        data: action.data, 
                    }
                    
        case 'LOADED_DATA':
            if (action.data) {
                return ({
                    isLoaded: true,
                    name: action.data.name,
                    main: action.data.main,
                    weather: action.data.weather[0]
                })
            }
            return state;

        default: 
            return state;
    }
}

export default weather;

