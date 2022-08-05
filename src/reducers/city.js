const city =(state = { city: '' }, action)=> {
    switch (action.type) {

        
        case 'LOADED_DATA':
           
            if (action.data && action.data.name) return {name: action.data.name};
            return state;
                        
        default: 
            return state;
    }
}

export default city;