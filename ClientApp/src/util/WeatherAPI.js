import axios from 'axios'
export default {
    getForecast: async function (city, apiKey) {
        const apiCall = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&mode=json&units=imperial&APPID='+apiKey+''
        let forecastJson = await axios.get(apiCall)
        return forecastJson.data
    },
    getWeather: async function(city,apiKey){
        const apiCall = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&mode=json&units=imperial&APPID='+apiKey+''
        let weatherJson = await axios.get(apiCall)
        return weatherJson.data
    }

}