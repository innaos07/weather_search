export const failureWeather =()=> ({
    type: 'FAILURE_DATA',
})

export const loadingDate =()=> ({
    type: 'LOADING_DATA',  
})

export const loadedData =(data)=> ({
    type: 'LOADED_DATA',
    data
})

export function fetchPosts(city) {
    console.log('FETCH2')

    return function(dispatch) {
       
        dispatch(loadingDate());
        console.log('LOADING###################' )

        return fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&lang=ru_en&appid=4a6c403b7f0af56cb97eb02e4b911803`)  

            .then((response) => {

                if(!response.ok) {
                    throw Error(response.statusText);
                } 
                return response;
            })
            .then((response) => response.json() )
            .then((json) => dispatch(loadedData(json)))
            .catch((err) =>  dispatch(failureWeather())) 
    }
}
