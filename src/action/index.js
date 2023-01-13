export const loadingDate =()=> ({
    type: 'LOADING_DATA',  
})

export const loadedData =(data)=> ({
    type: 'LOADED_DATA',
    data
})

export const failureWeather =(err)=> ({
    type: 'FAILURE_DATA',
    err
})

export function fetchPosts(city = 'Barcelona') {

    return function(dispatch) {
       
        dispatch(loadingDate());

        return fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&lang=ru_en&appid=4a6c403b7f0af56cb97eb02e4b911803`)  

            .then((response) => {

                if(!response.ok) {
                    throw Error(response.statusText);
                } 
                return response;
            })
            .then((response) => response.json() )
            .then((json) => dispatch(loadedData(json)))
            .catch((err) =>  {
                dispatch(failureWeather(true))
                setTimeout(() => dispatch(failureWeather(null)), 5000)
            }) 
    }
}
