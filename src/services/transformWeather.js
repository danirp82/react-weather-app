import convert from 'convert-units';
import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    DRIZZLE,
    THUNDER
} from './../constants/weather';
const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C")).toFixed(0);
}

const getWeatherState = weather_data => {
    const {id} = weather_data;

    if(id < 300) {
        return THUNDER;
    } else if( id < 400){
        return DRIZZLE;
    } else if( id < 600){
        return RAIN;
    } else if( id < 700){
        return SNOW;
    } else if( id < 800){
        return SUN;
    } else {
        return CLOUD;
    }
};

const transformWeather = weather_data => {
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature: Number(temperature),
        weatherState,
        wind: `${speed} m/s`
    };
    return data;
};

export default transformWeather;