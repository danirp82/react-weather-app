import { api_key, url_base} from './../constants/api_url';

const getUrlForecastrByCity = city => {
    return `${url_base}forecast?q=${city}&appid=${api_key}`;
}

export default getUrlForecastrByCity;